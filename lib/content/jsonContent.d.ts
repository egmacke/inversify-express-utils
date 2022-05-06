import { HttpContent } from './httpContent';
export declare class JsonContent extends HttpContent {
    private content;
    constructor(content: object);
    readAsync(): Promise<object>;
}
