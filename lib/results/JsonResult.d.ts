import { HttpResponseMessage } from '../httpResponseMessage';
import type { IHttpActionResult } from '../interfaces';
export declare class JsonResult implements IHttpActionResult {
    readonly json: object;
    readonly statusCode: number;
    constructor(json: object, statusCode: number);
    executeAsync(): Promise<HttpResponseMessage>;
}
