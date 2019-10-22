/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rest_impl_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-impl/app */ "./src/rest-impl/app.js");

Object(_rest_impl_app__WEBPACK_IMPORTED_MODULE_0__["default"])(3000);

/***/ }),

/***/ "./src/rest-impl/app.js":
/*!******************************!*\
  !*** ./src/rest-impl/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db/ */ "./src/rest-impl/db/index.js");


const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
async function init(port) {
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}

/***/ }),

/***/ "./src/rest-impl/db/config.js":
/*!************************************!*\
  !*** ./src/rest-impl/db/config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});
console.log('coneccted db');
/* harmony default export */ __webpack_exports__["default"] = (mongoose);

/***/ }),

/***/ "./src/rest-impl/db/index.js":
/*!***********************************!*\
  !*** ./src/rest-impl/db/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/rest-impl/db/config.js");
/* harmony import */ var _repositories_user_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repositories/user.repository */ "./src/rest-impl/db/repositories/user.repository.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  connection: _config__WEBPACK_IMPORTED_MODULE_0__["default"],
  userRepository: _repositories_user_repository__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/rest-impl/db/repositories/user.repository.js":
/*!**********************************************************!*\
  !*** ./src/rest-impl/db/repositories/user.repository.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/rest-impl/db/config.js");

const Schema = _config__WEBPACK_IMPORTED_MODULE_0__["default"].Schema;
const userSchema = new Schema({
  _id: {
    type: String
  },
  username: {
    type: String,
    index: true,
    unique: true
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date
  }
});
const UserRepository = _config__WEBPACK_IMPORTED_MODULE_0__["default"].model('user', userSchema);

async function existByUsername(username) {
  const exist = await UserRepository.exists({
    username: username
  });
  return exist;
}

;

async function persist(userToSave) {
  const userStored = await UserRepository.create(userToSave);
  return userStored;
}

;
/* harmony default export */ __webpack_exports__["default"] = ({
  existByUsername: existByUsername,
  persist: persist
});

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3QtaW1wbC9kYi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJqc29uIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImluaXQiLCJwb3J0IiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsIm1vbmdvb3NlIiwicmVxdWlyZSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uZWN0aW9uIiwidXNlclJlcG9zaXRvcnkiLCJTY2hlbWEiLCJ1c2VyU2NoZW1hIiwiX2lkIiwidHlwZSIsIlN0cmluZyIsInVzZXJuYW1lIiwiaW5kZXgiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJVc2VyUmVwb3NpdG9yeSIsIm1vZGVsIiwiZXhpc3RCeVVzZXJuYW1lIiwiZXhpc3QiLCJleGlzdHMiLCJwZXJzaXN0IiwidXNlclRvU2F2ZSIsInVzZXJTdG9yZWQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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ImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9yZXN0LWltcGwvYXBwJ1xuXG5hcHAoMzAwMCk7IiwiXG5pbXBvcnQgIGV4cHJlc3MgIGZyb20nZXhwcmVzcyc7XG5pbXBvcnQgIG1vb25nb3NlIGZyb20gJy4vZGIvJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXQocG9ydCl7XG4gICAgYXdhaXQgYXBwLmxpc3Rlbihwb3J0KTtcbiAgICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApXG5cbn1cblxuXG5cblxuIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy90ZXN0Jywge3VzZU5ld1VybFBhcnNlcjogdHJ1ZX0pO1xuXG5jb25zb2xlLmxvZygnY29uZWNjdGVkIGRiJyk7XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZTsiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHVzZXJSZXBvc2l0b3J5IGZyb20gJy4vcmVwb3NpdG9yaWVzL3VzZXIucmVwb3NpdG9yeSdcblxuZXhwb3J0IGRlZmF1bHQge2Nvbm5lY3Rpb246IG1vbmdvb3NlLCB1c2VyUmVwb3NpdG9yeTp1c2VyUmVwb3NpdG9yeX07IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxucGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG59LFxuICAgIGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlfSxcblxufSk7XG5cblxuY29uc3QgVXNlclJlcG9zaXRvcnkgPSBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xuXG5hc3luYyBmdW5jdGlvbiBleGlzdEJ5VXNlcm5hbWUodXNlcm5hbWUpe1xuICAgIGNvbnN0IGV4aXN0ID0gYXdhaXQgVXNlclJlcG9zaXRvcnkuZXhpc3RzKHt1c2VybmFtZTp1c2VybmFtZX0pO1xuICAgICByZXR1cm4gZXhpc3Q7XG4gfTtcblxuYXN5bmMgZnVuY3Rpb24gcGVyc2lzdCh1c2VyVG9TYXZlKXtcbiAgICAgY29uc3QgdXNlclN0b3JlZCA9IGF3YWl0IFVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh1c2VyVG9TYXZlKTtcbiAgICByZXR1cm4gdXNlclN0b3JlZDtcbn07XG4gXG5leHBvcnQgZGVmYXVsdCB7ZXhpc3RCeVVzZXJuYW1lIDpleGlzdEJ5VXNlcm5hbWUgLCBwZXJzaXN0OiBwZXJzaXN0fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=