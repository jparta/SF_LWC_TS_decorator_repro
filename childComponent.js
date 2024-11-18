"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lwc = require('lwc');

var __extends = undefined && undefined.__extends || (function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChildComponent = /** @class */(function (_super) {
    __extends(ChildComponent, _super);
    function ChildComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setThisFromParent = '';
        return _this;
    }
    __decorate([_lwc.api], ChildComponent.prototype, "setThisFromParent", void 0);
    return ChildComponent;
})(_lwc.LightningElement);
exports["default"] = ChildComponent;
module.exports = exports["default"];