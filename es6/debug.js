"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRawMetadata = exports.getRouteInfo = void 0;
const constants_1 = require("./constants");
const utils_1 = require("./utils");
function getRouteInfo(container) {
    const raw = getRawMetadata(container);
    return raw.map(r => {
        const controllerId = r.controllerMetadata.target.name;
        const endpoints = r.methodMetadata.map(m => {
            const method = m.method.toUpperCase();
            const controllerPath = r.controllerMetadata.path;
            const actionPath = m.path;
            const paramMetadata = r.parameterMetadata;
            let args;
            if (paramMetadata !== undefined) {
                const paramMetadataForKey = paramMetadata[m.key] || undefined;
                if (paramMetadataForKey) {
                    args = (r.parameterMetadata[m.key] || []).map(a => {
                        let type = '';
                        switch (a.type) {
                            case constants_1.PARAMETER_TYPE.RESPONSE:
                                type = '@response';
                                break;
                            case constants_1.PARAMETER_TYPE.REQUEST:
                                type = '@request';
                                break;
                            case constants_1.PARAMETER_TYPE.NEXT:
                                type = '@next';
                                break;
                            case constants_1.PARAMETER_TYPE.PARAMS:
                                type = '@requestParam';
                                break;
                            case constants_1.PARAMETER_TYPE.QUERY:
                                type = 'queryParam';
                                break;
                            case constants_1.PARAMETER_TYPE.BODY:
                                type = '@requestBody';
                                break;
                            case constants_1.PARAMETER_TYPE.HEADERS:
                                type = '@requestHeaders';
                                break;
                            case constants_1.PARAMETER_TYPE.COOKIES:
                                type = '@cookies';
                                break;
                            case constants_1.PARAMETER_TYPE.PRINCIPAL:
                                type = '@principal';
                                break;
                            default:
                                break;
                        }
                        return `${type} ${a.parameterName}`;
                    });
                }
            }
            const details = {
                route: `${method} ${controllerPath}${actionPath}`,
            };
            if (args) {
                details.args = args;
            }
            return details;
        });
        return {
            controller: controllerId,
            endpoints,
        };
    });
}
exports.getRouteInfo = getRouteInfo;
function getRawMetadata(container) {
    const controllers = (0, utils_1.getControllersFromContainer)(container, true);
    return controllers.map(controller => {
        const { constructor } = controller;
        return {
            controllerMetadata: (0, utils_1.getControllerMetadata)(constructor),
            methodMetadata: (0, utils_1.getControllerMethodMetadata)(constructor),
            parameterMetadata: (0, utils_1.getControllerParameterMetadata)(constructor),
        };
    });
}
exports.getRawMetadata = getRawMetadata;
