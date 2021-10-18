"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectsForEach = exports.objectsFilter = void 0;
var objectsFilter = function (originObject, callback) {
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
exports.objectsFilter = objectsFilter;
var objectsForEach = function (originObject, callback) {
    var keys = Object.keys(originObject);
    keys.forEach(function (key) {
        var currentItem = originObject[key];
        callback(currentItem, key, originObject);
    });
};
exports.objectsForEach = objectsForEach;
//# sourceMappingURL=index.js.map