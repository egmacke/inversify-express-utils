var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { HttpContent } from './httpContent';
var DEFAULT_MEDIA_TYPE = 'application/json';
var JsonContent = (function (_super) {
    __extends(JsonContent, _super);
    function JsonContent(content) {
        var _this = _super.call(this) || this;
        _this.content = content;
        _this.headers['content-type'] = DEFAULT_MEDIA_TYPE;
        return _this;
    }
    JsonContent.prototype.readAsync = function () {
        return Promise.resolve(this.content);
    };
    return JsonContent;
}(HttpContent));
export { JsonContent };
