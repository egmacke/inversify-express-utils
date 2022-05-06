/// <reference types="node" />
import { URL } from 'url';
import { HttpResponseMessage } from './httpResponseMessage';
import { CreatedNegotiatedContentResult, ConflictResult, OkNegotiatedContentResult, OkResult, BadRequestErrorMessageResult, BadRequestResult, ExceptionResult, InternalServerErrorResult, NotFoundResult, RedirectResult, ResponseMessageResult, StatusCodeResult, JsonResult } from './results';
import type { HttpContext } from './interfaces';
export declare class BaseHttpController {
    protected readonly httpContext: HttpContext;
    protected created<T>(location: string | URL, content: T): CreatedNegotiatedContentResult<T>;
    protected conflict(): ConflictResult;
    protected ok<T>(content: T): OkNegotiatedContentResult<T>;
    protected ok(): OkResult;
    protected badRequest(): BadRequestResult;
    protected badRequest(message: string): BadRequestErrorMessageResult;
    protected internalServerError(): InternalServerErrorResult;
    protected internalServerError(error: Error): ExceptionResult;
    protected notFound(): NotFoundResult;
    protected redirect(uri: string | URL): RedirectResult;
    protected responseMessage(message: HttpResponseMessage): ResponseMessageResult;
    protected statusCode(statusCode: number): StatusCodeResult;
    protected json(content: object, statusCode?: number): JsonResult;
}
