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

/***/ "./src/domain/user/user.js":
/*!*********************************!*\
  !*** ./src/domain/user/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
function User({
  _id,
  username,
  password,
  createdAt
}) {
  const user = {
    _id,
    username,
    password,
    createdAt
  };
  return Object.freeze({
    _id: user._id,
    username: user.username,
    password: user.password,
    createdAt: user.createdAt
  });
}

/***/ }),

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
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.services */ "./src/rest-impl/services/auth.services.js");


const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.post('/create-user', async function (req, res) {
  const user = await _services_auth_services__WEBPACK_IMPORTED_MODULE_1__["default"].registerUser(req.body);
  res.send(user);
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
}, {
  _id: false
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
  try {
    const userStored = await UserRepository.create(userToSave);
    return userStored;
  } catch (error) {
    throw error;
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = ({
  existByUsername: existByUsername,
  persist: persist
});

/***/ }),

/***/ "./src/rest-impl/services/auth.services.js":
/*!*************************************************!*\
  !*** ./src/rest-impl/services/auth.services.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db */ "./src/rest-impl/db/index.js");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_password_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/password-encoder */ "./src/rest-impl/utils/password-encoder.js");
/* harmony import */ var _utils_jwt_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/jwt-creator */ "./src/rest-impl/utils/jwt-creator.js");
/* harmony import */ var _usecase_user_register_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../usecase/user/register-user */ "./src/usecase/user/register-user.js");
/* harmony import */ var _usecase_user_login_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../usecase/user/login-user */ "./src/usecase/user/login-user.js");
//dependencies


 //handlers


 //use cases



const idGenerator = {
  generateID: () => {
    return uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
  }
};
const registerUser = Object(_usecase_user_register_user__WEBPACK_IMPORTED_MODULE_5__["default"])({
  idGenerator: idGenerator,
  userRepository: _db__WEBPACK_IMPORTED_MODULE_1__["default"].userRepository,
  passwordEncoder: _utils_password_encoder__WEBPACK_IMPORTED_MODULE_3__["default"],
  logger: console
});
const loginUser = Object(_usecase_user_login_user__WEBPACK_IMPORTED_MODULE_6__["default"])({
  jwtCreator: _utils_jwt_creator__WEBPACK_IMPORTED_MODULE_4__["default"],
  userRepository: _db__WEBPACK_IMPORTED_MODULE_1__["default"].userRepository,
  passwordEncoder: _utils_password_encoder__WEBPACK_IMPORTED_MODULE_3__["default"],
  logger: console
});
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze({
  registerUser: registerUser,
  loginUser: loginUser
}));

/***/ }),

/***/ "./src/rest-impl/utils/jwt-creator.js":
/*!********************************************!*\
  !*** ./src/rest-impl/utils/jwt-creator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/rest-impl/utils/password-encoder.js":
/*!*************************************************!*\
  !*** ./src/rest-impl/utils/password-encoder.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);

const saltRounds = 10;

async function encode(password) {
  const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.genSalt(saltRounds);
  const passwordEncrypted = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, salt);
  return passwordEncrypted;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  encode: encode
});

/***/ }),

/***/ "./src/usecase/user/login-user.js":
/*!****************************************!*\
  !*** ./src/usecase/user/login-user.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeLogInUser; });
function makeLogInUser({
  userRepository,
  passwordEncoder,
  jwtCreator,
  logger
}) {
  if (userRepository == null || userRepository == undefined) {
    throw new Error(`User Repository  is required`);
  }

  if (passwordEncoder == null || passwordEncoder == undefined) {
    throw new Error(`passwordEncoder  is required`);
  }

  if (logger == null || logger == undefined) {
    throw new Error(`logger is required`);
  }

  if (jwtCreator == null || jwtCreator == undefined) {
    throw new Error(`jwtCreator is required`);
  }

  return async function logInUser({
    username,
    password
  }) {
    try {
      const userToLogIn = await userRepository.findByUsername(username);

      if (!userToLogIn) {
        throw new Error(`username or password incorrect`);
      }

      const passwordMath = await passwordEncoder.match(password, userToLogIn.password);

      if (!passwordMath) {
        throw new Error(`username or password incorrect`);
      }

      const jwt = await jwtCreator.generateToken(userToLogIn);
      return jwt;
    } catch (e) {
      logger.error(e.message);
      return {
        error: e
      };
    }
  };
}

/***/ }),

/***/ "./src/usecase/user/register-user.js":
/*!*******************************************!*\
  !*** ./src/usecase/user/register-user.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeRegisterUser; });
/* harmony import */ var _domain_user_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/user/user */ "./src/domain/user/user.js");

function makeRegisterUser({
  idGenerator,
  userRepository,
  passwordEncoder,
  logger
}) {
  if (idGenerator == null || idGenerator == undefined) {
    throw new Error(`idGenerator is required`);
  }

  if (userRepository == null || userRepository == undefined) {
    throw new Error(`User Repository  is required`);
  }

  if (passwordEncoder == null || passwordEncoder == undefined) {
    throw new Error(`passwordEncoder  is required`);
  }

  if (logger == null || logger == undefined) {
    throw new Error(`logger is required`);
  }

  return async function registerUser({
    username,
    password
  }) {
    try {
      const userAlreadyExist = await userRepository.existByUsername(username);

      if (userAlreadyExist) {
        throw new Error(`User for ${username} already exist`);
      }

      const encodedPassword = await passwordEncoder.encode(password);
      const newUser = Object(_domain_user_user__WEBPACK_IMPORTED_MODULE_0__["default"])({
        _id: await idGenerator.generateID(),
        username: username,
        password: encodedPassword,
        createdAt: new Date()
      });
      const userStored = await userRepository.persist(newUser);
      return Object.freeze(userStored);
    } catch (e) {
      logger.log(e.message);
      return {
        error: e.message
      };
    }
  };
}

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

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

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3QtaW1wbC9kYi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvc2VydmljZXMvYXV0aC5zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzdC1pbXBsL3V0aWxzL2p3dC1jcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvdXRpbHMvcGFzc3dvcmQtZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlY2FzZS91c2VyL2xvZ2luLXVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZWNhc2UvdXNlci9yZWdpc3Rlci11c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6WyJVc2VyIiwiX2lkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsInVzZXIiLCJPYmplY3QiLCJmcmVlemUiLCJhcHAiLCJleHByZXNzIiwidXNlIiwianNvbiIsInBvc3QiLCJyZXEiLCJyZXMiLCJhdXRoU2VydmljZSIsInJlZ2lzdGVyVXNlciIsImJvZHkiLCJzZW5kIiwiaW5pdCIsInBvcnQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsImNvbm5lY3Rpb24iLCJ1c2VyUmVwb3NpdG9yeSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwiaW5kZXgiLCJ1bmlxdWUiLCJEYXRlIiwiVXNlclJlcG9zaXRvcnkiLCJtb2RlbCIsImV4aXN0QnlVc2VybmFtZSIsImV4aXN0IiwiZXhpc3RzIiwicGVyc2lzdCIsInVzZXJUb1NhdmUiLCJ1c2VyU3RvcmVkIiwiY3JlYXRlIiwiZXJyb3IiLCJpZEdlbmVyYXRvciIsImdlbmVyYXRlSUQiLCJ1dWlkIiwibWFrZVJlZ2lzdGVyVXNlciIsImRiQ29udGV4dCIsInBhc3N3b3JkRW5jb2RlciIsImxvZ2dlciIsImxvZ2luVXNlciIsIm1ha2VMb2dpblVzZXIiLCJqd3RDcmVhdG9yIiwic2FsdFJvdW5kcyIsImVuY29kZSIsInNhbHQiLCJiY3J5cHQiLCJnZW5TYWx0IiwicGFzc3dvcmRFbmNyeXB0ZWQiLCJoYXNoIiwibWFrZUxvZ0luVXNlciIsInVuZGVmaW5lZCIsIkVycm9yIiwibG9nSW5Vc2VyIiwidXNlclRvTG9nSW4iLCJmaW5kQnlVc2VybmFtZSIsInBhc3N3b3JkTWF0aCIsIm1hdGNoIiwiand0IiwiZ2VuZXJhdGVUb2tlbiIsImUiLCJtZXNzYWdlIiwidXNlckFscmVhZHlFeGlzdCIsImVuY29kZWRQYXNzd29yZCIsIm5ld1VzZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LENBQVA7QUFFSCxLQXBCRCxDQW9CRSxPQUFPOEIsQ0FBUCxFQUFVO0FBQ1JyQixZQUFNLENBQUM5QixHQUFQLENBQVdtRCxDQUFDLENBQUNDLE9BQWI7QUFDQSxhQUFPO0FBQUU3QixhQUFLLEVBQUU0QixDQUFDLENBQUNDO0FBQVgsT0FBUDtBQUNIO0FBQ0osR0E1QkQ7QUE2QkgsQzs7Ozs7Ozs7Ozs7QUNoREQsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgX2lkLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNyZWF0ZWRBdCB9KSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IF9pZCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBjcmVhdGVkQXQgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0XG4gICAgICAgIH0pO1xuXG4gICAgfVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL3Jlc3QtaW1wbC9hcHAnXG5cbmFwcCgzMDAwKTsiLCJcbmltcG9ydCAgZXhwcmVzcyAgZnJvbSdleHByZXNzJztcbmltcG9ydCAgYXV0aFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC5wb3N0KCcvY3JlYXRlLXVzZXInLCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlZ2lzdGVyVXNlcihyZXEuYm9keSlcbiAgcmVzLnNlbmQodXNlcik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdChwb3J0KXtcbiAgICBhd2FpdCBhcHAubGlzdGVuKHBvcnQpO1xuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YClcblxufVxuXG5cblxuXG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlfSk7XG5cbmNvbnNvbGUubG9nKCdjb25lY2N0ZWQgZGInKTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlOyIsImltcG9ydCBtb25nb29zZSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgdXNlclJlcG9zaXRvcnkgZnJvbSAnLi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5J1xuXG5leHBvcnQgZGVmYXVsdCB7Y29ubmVjdGlvbjogbW9uZ29vc2UsIHVzZXJSZXBvc2l0b3J5OnVzZXJSZXBvc2l0b3J5fTsiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG5wYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbn0sXG4gICAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGV9LFxuXG59LCB7IF9pZDogZmFsc2UgfSk7XG5cblxuY29uc3QgVXNlclJlcG9zaXRvcnkgPSBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xuXG5hc3luYyBmdW5jdGlvbiBleGlzdEJ5VXNlcm5hbWUodXNlcm5hbWUpe1xuICAgIGNvbnN0IGV4aXN0ID0gYXdhaXQgVXNlclJlcG9zaXRvcnkuZXhpc3RzKHt1c2VybmFtZTp1c2VybmFtZX0pO1xuICAgICByZXR1cm4gZXhpc3Q7XG4gfTtcblxuYXN5bmMgZnVuY3Rpb24gcGVyc2lzdCh1c2VyVG9TYXZlKXtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyU3RvcmVkID0gYXdhaXQgVXNlclJlcG9zaXRvcnkuY3JlYXRlKHVzZXJUb1NhdmUpO1xuICAgICAgICByZXR1cm4gdXNlclN0b3JlZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59O1xuIFxuZXhwb3J0IGRlZmF1bHQge2V4aXN0QnlVc2VybmFtZSA6ZXhpc3RCeVVzZXJuYW1lICwgcGVyc2lzdDogcGVyc2lzdH07IiwiLy9kZXBlbmRlbmNpZXNcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0IGRiQ29udGV4dCBmcm9tICcuLi9kYidcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcblxuLy9oYW5kbGVyc1xuaW1wb3J0IHBhc3N3b3JkRW5jb2RlciBmcm9tICcuLi91dGlscy9wYXNzd29yZC1lbmNvZGVyJztcbmltcG9ydCBqd3RDcmVhdG9yIGZyb20gJy4uL3V0aWxzL2p3dC1jcmVhdG9yJ1xuLy91c2UgY2FzZXNcbmltcG9ydCBtYWtlUmVnaXN0ZXJVc2VyIGZyb20gJy4uLy4uL3VzZWNhc2UvdXNlci9yZWdpc3Rlci11c2VyJztcbmltcG9ydCBtYWtlTG9naW5Vc2VyIGZyb20gJy4uLy4uL3VzZWNhc2UvdXNlci9sb2dpbi11c2VyJztcblxuY29uc3QgaWRHZW5lcmF0b3IgPSB7XG4gICAgZ2VuZXJhdGVJRDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXVpZCgpO1xuICAgIH1cbn07XG5cbiBjb25zdCByZWdpc3RlclVzZXIgPSBtYWtlUmVnaXN0ZXJVc2VyKHtpZEdlbmVyYXRvcjogaWRHZW5lcmF0b3IsIFxuICAgIHVzZXJSZXBvc2l0b3J5OiBkYkNvbnRleHQudXNlclJlcG9zaXRvcnksXG4gICAgcGFzc3dvcmRFbmNvZGVyOiBwYXNzd29yZEVuY29kZXIsXG4gICAgbG9nZ2VyOiBjb25zb2xlfSk7XG5cbiBjb25zdCBsb2dpblVzZXIgPSBtYWtlTG9naW5Vc2VyKHtqd3RDcmVhdG9yOiBqd3RDcmVhdG9yLCBcbiAgICB1c2VyUmVwb3NpdG9yeTogZGJDb250ZXh0LnVzZXJSZXBvc2l0b3J5LFxuICAgIHBhc3N3b3JkRW5jb2RlcjogcGFzc3dvcmRFbmNvZGVyLFxuICAgIGxvZ2dlcjogY29uc29sZX0gKTtcblxuIGV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe3JlZ2lzdGVyVXNlcjogcmVnaXN0ZXJVc2VyLCBsb2dpblVzZXI6bG9naW5Vc2VyfSk7IiwiZXhwb3J0IGRlZmF1bHQge307IiwiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuXG5hc3luYyBmdW5jdGlvbiBlbmNvZGUocGFzc3dvcmQpe1xuXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KHNhbHRSb3VuZHMpO1xuICAgIGNvbnN0IHBhc3N3b3JkRW5jcnlwdGVkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsc2FsdCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRFbmNyeXB0ZWQ7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7ZW5jb2RlOmVuY29kZX0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VMb2dJblVzZXIoeyB1c2VyUmVwb3NpdG9yeSwgcGFzc3dvcmRFbmNvZGVyLCBqd3RDcmVhdG9yLCBsb2dnZXIgfSkge1xuXG5cbiAgICBpZiAodXNlclJlcG9zaXRvcnkgPT0gbnVsbCB8fCB1c2VyUmVwb3NpdG9yeSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIFJlcG9zaXRvcnkgIGlzIHJlcXVpcmVkYCk7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZEVuY29kZXIgPT0gbnVsbCB8fCBwYXNzd29yZEVuY29kZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcGFzc3dvcmRFbmNvZGVyICBpcyByZXF1aXJlZGApO1xuICAgIH1cbiAgICBpZiAobG9nZ2VyID09IG51bGwgfHwgbG9nZ2VyID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGxvZ2dlciBpcyByZXF1aXJlZGApO1xuICAgIH1cbiAgICBpZiAoand0Q3JlYXRvciA9PSBudWxsIHx8IGp3dENyZWF0b3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgand0Q3JlYXRvciBpcyByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiBsb2dJblVzZXIoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9KSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJUb0xvZ0luID0gYXdhaXQgdXNlclJlcG9zaXRvcnkuZmluZEJ5VXNlcm5hbWUodXNlcm5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJUb0xvZ0luKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2VybmFtZSBvciBwYXNzd29yZCBpbmNvcnJlY3RgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRNYXRoID0gYXdhaXQgcGFzc3dvcmRFbmNvZGVyLm1hdGNoKHBhc3N3b3JkLCB1c2VyVG9Mb2dJbi5wYXNzd29yZCk7XG5cbiAgICAgICAgICAgIGlmICghcGFzc3dvcmRNYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2VybmFtZSBvciBwYXNzd29yZCBpbmNvcnJlY3RgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgand0ID0gYXdhaXQgand0Q3JlYXRvci5nZW5lcmF0ZVRva2VuKHVzZXJUb0xvZ0luKTtcblxuICAgICAgICAgICAgcmV0dXJuIGp3dDtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlIH07XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9kb21haW4vdXNlci91c2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUmVnaXN0ZXJVc2VyKHsgaWRHZW5lcmF0b3IsICB1c2VyUmVwb3NpdG9yeSwgcGFzc3dvcmRFbmNvZGVyLCBsb2dnZXIgfSkge1xuXG4gICAgaWYgKGlkR2VuZXJhdG9yID09IG51bGwgfHwgaWRHZW5lcmF0b3IgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaWRHZW5lcmF0b3IgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICBpZiAodXNlclJlcG9zaXRvcnkgPT0gbnVsbCB8fCB1c2VyUmVwb3NpdG9yeSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIFJlcG9zaXRvcnkgIGlzIHJlcXVpcmVkYCk7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZEVuY29kZXIgPT0gbnVsbCB8fCBwYXNzd29yZEVuY29kZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcGFzc3dvcmRFbmNvZGVyICBpcyByZXF1aXJlZGApO1xuICAgIH1cbiAgICBpZiAobG9nZ2VyID09IG51bGwgfHwgbG9nZ2VyID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGxvZ2dlciBpcyByZXF1aXJlZGApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmRcbiAgICB9KSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJBbHJlYWR5RXhpc3QgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5leGlzdEJ5VXNlcm5hbWUodXNlcm5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodXNlckFscmVhZHlFeGlzdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVXNlciBmb3IgJHt1c2VybmFtZX0gYWxyZWFkeSBleGlzdGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkUGFzc3dvcmQgPSBhd2FpdCBwYXNzd29yZEVuY29kZXIuZW5jb2RlKHBhc3N3b3JkKTtcbiAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9ICBVc2VyKHtcbiAgICAgICAgICAgICAgICBfaWQ6IGF3YWl0IGlkR2VuZXJhdG9yLmdlbmVyYXRlSUQoKSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGVuY29kZWRQYXNzd29yZCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgdXNlclN0b3JlZCA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LnBlcnNpc3QobmV3VXNlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHVzZXJTdG9yZWQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlLm1lc3NhZ2V9O1xuICAgICAgICB9XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkL3Y0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=