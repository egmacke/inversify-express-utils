import { interfaces as inversifyInterfaces } from 'inversify';
import type { RouteInfo, RawMetadata } from './interfaces';
export declare function getRouteInfo(container: inversifyInterfaces.Container): Array<RouteInfo>;
export declare function getRawMetadata(container: inversifyInterfaces.Container): Array<RawMetadata>;
