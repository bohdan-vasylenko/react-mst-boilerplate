import { GeneralApiProblem } from './api-problem';
import {GeneralResponseBody} from "./api-responses.types";

export type GeneralResponse = { kind: 'ok', data: GeneralResponseBody } | GeneralApiProblem;

