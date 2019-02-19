(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["trackingLogger"] = factory();
	else
		root["trackingLogger"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/trackinglogger.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/guid-typescript/dist/guid.js":
/*!***************************************************!*\
  !*** ./node_modules/guid-typescript/dist/guid.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Guid = /** @class */ (function () {\r\n    function Guid(guid) {\r\n        if (!guid) {\r\n            throw new TypeError(\"Invalid argument; `value` has no value.\");\r\n        }\r\n        this.value = Guid.EMPTY;\r\n        if (guid && Guid.isGuid(guid)) {\r\n            this.value = guid;\r\n        }\r\n    }\r\n    Guid.isGuid = function (guid) {\r\n        var value = guid.toString();\r\n        return guid && (guid instanceof Guid || Guid.validator.test(value));\r\n    };\r\n    Guid.create = function () {\r\n        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join(\"-\"));\r\n    };\r\n    Guid.createEmpty = function () {\r\n        return new Guid(\"emptyguid\");\r\n    };\r\n    Guid.parse = function (guid) {\r\n        return new Guid(guid);\r\n    };\r\n    Guid.raw = function () {\r\n        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join(\"-\");\r\n    };\r\n    Guid.gen = function (count) {\r\n        var out = \"\";\r\n        for (var i = 0; i < count; i++) {\r\n            // tslint:disable-next-line:no-bitwise\r\n            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);\r\n        }\r\n        return out;\r\n    };\r\n    Guid.prototype.equals = function (other) {\r\n        // Comparing string `value` against provided `guid` will auto-call\r\n        // toString on `guid` for comparison\r\n        return Guid.isGuid(other) && this.value === other.toString();\r\n    };\r\n    Guid.prototype.isEmpty = function () {\r\n        return this.value === Guid.EMPTY;\r\n    };\r\n    Guid.prototype.toString = function () {\r\n        return this.value;\r\n    };\r\n    Guid.prototype.toJSON = function () {\r\n        return {\r\n            value: this.value\r\n        };\r\n    };\r\n    Guid.validator = new RegExp(\"^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$\", \"i\");\r\n    Guid.EMPTY = \"00000000-0000-0000-0000-000000000000\";\r\n    return Guid;\r\n}());\r\nexports.Guid = Guid;\r\n\n\n//# sourceURL=webpack://trackingLogger/./node_modules/guid-typescript/dist/guid.js?");

/***/ }),

/***/ "./src/trackinglogger.ts":
/*!*******************************!*\
  !*** ./src/trackinglogger.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar guid_typescript_1 = __webpack_require__(/*! guid-typescript */ \"./node_modules/guid-typescript/dist/guid.js\");\nvar GenerateGuid = (function () {\n    function GenerateGuid() {\n        GenerateGuid.createGuid();\n    }\n    GenerateGuid.getGuid = function () {\n        return this.trackingId;\n    };\n    GenerateGuid.createGuid = function () {\n        return this.trackingId = guid_typescript_1.Guid.create();\n    };\n    return GenerateGuid;\n}());\nexports.GenerateGuid = GenerateGuid;\n\n\n//# sourceURL=webpack://trackingLogger/./src/trackinglogger.ts?");

/***/ })

/******/ });
});