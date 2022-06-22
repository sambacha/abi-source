"use strict";
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const abi = Convert.toAbi(json);
exports.__esModule = true;
exports.Convert = exports.Type = exports.StateMutability = void 0;
var StateMutability;
(function (StateMutability) {
    StateMutability["Nonpayable"] = "nonpayable";
    StateMutability["Payable"] = "payable";
    StateMutability["Pure"] = "pure";
    StateMutability["View"] = "view";
})(StateMutability = exports.StateMutability || (exports.StateMutability = {}));
var Type;
(function (Type) {
    Type["Constructor"] = "constructor";
    Type["Error"] = "error";
    Type["Event"] = "event";
    Type["Fallback"] = "fallback";
    Type["Function"] = "function";
    Type["Receive"] = "receive";
})(Type = exports.Type || (exports.Type = {}));
// Converts JSON strings to/from your types
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toAbi = function (json) {
        return JSON.parse(json);
    };
    Convert.abiToJson = function (value) {
        return JSON.stringify(value);
    };
    return Convert;
}());
exports.Convert = Convert;
