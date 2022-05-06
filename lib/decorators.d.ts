import { PARAMETER_TYPE, HTTP_VERBS_ENUM } from './constants';
import type { Controller, Middleware, HandlerDecorator } from './interfaces';
export declare const injectHttpContext: (target: import("inversify/lib/annotation/decorator_utils").DecoratorTarget<unknown>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<any> | undefined) => void;
export declare function controller(path: string, ...middleware: Array<Middleware>): (target: NewableFunction) => void;
export declare function all(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpGet(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpPost(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpPut(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpPatch(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpHead(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpDelete(path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare function httpMethod(method: keyof typeof HTTP_VERBS_ENUM, path: string, ...middleware: Array<Middleware>): HandlerDecorator;
export declare const request: () => ParameterDecorator;
export declare const response: () => ParameterDecorator;
export declare const requestParam: (paramName?: string) => ParameterDecorator;
export declare const queryParam: (queryParamName?: string) => ParameterDecorator;
export declare const requestBody: () => ParameterDecorator;
export declare const requestHeaders: (headerName?: string) => ParameterDecorator;
export declare const cookies: (cookieName?: string) => ParameterDecorator;
export declare const next: () => ParameterDecorator;
export declare const principal: () => ParameterDecorator;
export declare function params(type: PARAMETER_TYPE, parameterName?: string): (target: unknown | Controller, methodName: string | symbol, index: number) => void;
