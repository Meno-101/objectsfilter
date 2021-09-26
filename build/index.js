"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectFilter = void 0;
var objectFilter = function (originObject, callback) {
    var keys = Object.keys(originObject);
    return keys.reduce(function (resultObject, key) {
        var currentItem = originObject[key];
        var resBool = callback(currentItem, key, resultObject, originObject);
        if (resBool) {
            resultObject[key] = originObject[key];
        }
        return resultObject;
    }, {});
};
exports.objectFilter = objectFilter;
//# sourceMappingURL=index.js.map