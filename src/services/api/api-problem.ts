import { ApiResponse } from "apisauce"

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: "timeout"; temporary: true }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: "cannot-connect"; temporary: true }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: "server" }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: "unauthorized", error: string }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: "forbidden", error: string }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: "not-found", error: string }
  /**
   * All other 4xx series errors.
   */
  | { kind: "rejected", error: string }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: "unknown"; temporary: true }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: "bad-data" | string }

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(response: ApiResponse<any>): GeneralApiProblem | void {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: "cannot-connect", temporary: true }
    case "NETWORK_ERROR":
      return { kind: "cannot-connect", temporary: true }
    case "TIMEOUT_ERROR":
      return { kind: "timeout", temporary: true }
    case "SERVER_ERROR":
      return { kind: "server" }
    case "UNKNOWN_ERROR":
      return { kind: "unknown", temporary: true }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return { kind: "unauthorized", error: response?.data?.errorInfo }
        case 403:
          return { kind: "forbidden", error: response?.data?.errorInfo }
        case 404:
          return { kind: "not-found", error: response?.data?.errorInfo }
        default:
          return { kind: "rejected", error: response?.data?.errorInfo }
      }
    case "CANCEL_ERROR":
      return;
  }

  return;
}
