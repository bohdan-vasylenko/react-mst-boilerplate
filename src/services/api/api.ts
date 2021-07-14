import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
import * as Types from './api.types';
import {getGeneralApiProblem} from "./api-problem";

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  public apisauce: ApisauceInstance;

  /**
   * Configurable options.
   */
  public config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce =  create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: '*/*',
      },
    });
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    });

    this.apisauce.addAsyncRequestTransform(request => async () => {
      const token = localStorage.getItem('authToken')
      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      }
    })

  }

  async generalRequest(): Promise<Types.GeneralResponse> {

    const response: ApiResponse<any> = await this.apisauce.get(`api/example`, {},{
      headers: {
        Authorization: `Bearer token`
      }
    });

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      return { kind: 'ok', data: response?.data };
    } catch {
      return { kind: 'bad-data' };
    }
  }
}
