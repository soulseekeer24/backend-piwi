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
app.post('/login', async function (req, res) {
  const user = await _services_auth_services__WEBPACK_IMPORTED_MODULE_1__["default"].loginUser(req.body);
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
  return await UserRepository.exists({
    username: username
  });
}

;

async function findByUsername(username) {
  return await UserRepository.findOne({
    username: username
  });
}

async function persist(userToSave) {
  return await UserRepository.create(userToSave);
}

;
/* harmony default export */ __webpack_exports__["default"] = ({
  existByUsername: existByUsername,
  persist: persist,
  findByUsername: findByUsername
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
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
 //TODO; Env variable

const secretKey = 'secretkey';
const expirationTime = 360;

function generateToken(user) {
  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({
    user_id: user.user_id,
    username: username
  }, secretKey, {
    algorithm: 'HS256',
    expiresIn: expirationTime
  });
  return token;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  generateToken: generateToken
});

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

async function match(passwordInput, userDbPassword) {
  return await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.compare(passwordInput, userDbPassword);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  encode: encode,
  match: match
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
      logger.error(e.message, e);
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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbWFpbi91c2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3QtaW1wbC9kYi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvc2VydmljZXMvYXV0aC5zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzdC1pbXBsL3V0aWxzL2p3dC1jcmVhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXN0LWltcGwvdXRpbHMvcGFzc3dvcmQtZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlY2FzZS91c2VyL2xvZ2luLXVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZWNhc2UvdXNlci9yZWdpc3Rlci11c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWQvdjRcIiJdLCJuYW1lcyI6WyJVc2VyIiwiX2lkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsInVzZXIiLCJPYmplY3QiLCJmcmVlemUiLCJhcHAiLCJleHByZXNzIiwidXNlIiwianNvbiIsInBvc3QiLCJyZXEiLCJyZXMiLCJhdXRoU2VydmljZSIsInJlZ2lzdGVyVXNlciIsImJvZHkiLCJzZW5kIiwibG9naW5Vc2VyIiwiaW5pdCIsInBvcnQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsImNvbm5lY3Rpb24iLCJ1c2VyUmVwb3NpdG9yeSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwiaW5kZXgiLCJ1bmlxdWUiLCJEYXRlIiwiVXNlclJlcG9zaXRvcnkiLCJtb2RlbCIsImV4aXN0QnlVc2VybmFtZSIsImV4aXN0cyIsImZpbmRCeVVzZXJuYW1lIiwiZmluZE9uZSIsInBlcnNpc3QiLCJ1c2VyVG9TYXZlIiwiY3JlYXRlIiwiaWRHZW5lcmF0b3IiLCJnZW5lcmF0ZUlEIiwidXVpZCIsIm1ha2VSZWdpc3RlclVzZXIiLCJkYkNvbnRleHQiLCJwYXNzd29yZEVuY29kZXIiLCJsb2dnZXIiLCJtYWtlTG9naW5Vc2VyIiwiand0Q3JlYXRvciIsInNlY3JldEtleSIsImV4cGlyYXRpb25UaW1lIiwiZ2VuZXJhdGVUb2tlbiIsInRva2VuIiwiand0Iiwic2lnbiIsInVzZXJfaWQiLCJhbGdvcml0aG0iLCJleHBpcmVzSW4iLCJzYWx0Um91bmRzIiwiZW5jb2RlIiwic2FsdCIsImJjcnlwdCIsImdlblNhbHQiLCJwYXNzd29yZEVuY3J5cHRlZCIsImhhc2giLCJtYXRjaCIsInBhc3N3b3JkSW5wdXQiLCJ1c2VyRGJQYXNzd29yZCIsImNvbXBhcmUiLCJtYWtlTG9nSW5Vc2VyIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJsb2dJblVzZXIiLCJ1c2VyVG9Mb2dJbiIsInBhc3N3b3JkTWF0aCIsImUiLCJlcnJvciIsIm1lc3NhZ2UiLCJ1c2VyQWxyZWFkeUV4aXN0IiwiZW5jb2RlZFBhc3N3b3JkIiwibmV3VXNlciIsInVzZXJTdG9yZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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b0JFLE9BQU9OLENBQVAsRUFBVTtBQUNSN0IsWUFBTSxDQUFDN0IsR0FBUCxDQUFXMEQsQ0FBQyxDQUFDRSxPQUFiO0FBQ0EsYUFBTztBQUFFRCxhQUFLLEVBQUVELENBQUMsQ0FBQ0U7QUFBWCxPQUFQO0FBQ0g7QUFDSixHQTVCRDtBQTZCSCxDOzs7Ozs7Ozs7OztBQ2hERCxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyBfaWQsIHVzZXJuYW1lLCBwYXNzd29yZCwgY3JlYXRlZEF0IH0pIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHsgX2lkLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNyZWF0ZWRBdCB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBfaWQ6IHVzZXIuX2lkLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXRcbiAgICAgICAgfSk7XG5cbiAgICB9XG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vcmVzdC1pbXBsL2FwcCdcblxuYXBwKDMwMDApOyIsIlxuaW1wb3J0ICBleHByZXNzICBmcm9tJ2V4cHJlc3MnO1xuaW1wb3J0ICBhdXRoU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZXMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuYXBwLnBvc3QoJy9jcmVhdGUtdXNlcicsIGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aFNlcnZpY2UucmVnaXN0ZXJVc2VyKHJlcS5ib2R5KVxuICByZXMuc2VuZCh1c2VyKTtcbn0pO1xuXG5cblxuYXBwLnBvc3QoJy9sb2dpbicsIGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCB1c2VyID0gYXdhaXQgYXV0aFNlcnZpY2UubG9naW5Vc2VyKHJlcS5ib2R5KVxuICByZXMuc2VuZCh1c2VyKTtcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXQocG9ydCl7XG4gICAgYXdhaXQgYXBwLmxpc3Rlbihwb3J0KTtcbiAgICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApXG4gIFxufVxuXG5cblxuXG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlfSk7XG5cbmNvbnNvbGUubG9nKCdjb25lY2N0ZWQgZGInKTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlOyIsImltcG9ydCBtb25nb29zZSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgdXNlclJlcG9zaXRvcnkgZnJvbSAnLi9yZXBvc2l0b3JpZXMvdXNlci5yZXBvc2l0b3J5J1xuXG5leHBvcnQgZGVmYXVsdCB7Y29ubmVjdGlvbjogbW9uZ29vc2UsIHVzZXJSZXBvc2l0b3J5OnVzZXJSZXBvc2l0b3J5fTsiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIF9pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgIH0sXG5wYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbn0sXG4gICAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGV9LFxuXG59LCB7IF9pZDogZmFsc2UgfSk7XG5cblxuY29uc3QgVXNlclJlcG9zaXRvcnkgPSBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpO1xuXG5hc3luYyBmdW5jdGlvbiBleGlzdEJ5VXNlcm5hbWUodXNlcm5hbWUpe1xuICAgIHJldHVybiBhd2FpdCBVc2VyUmVwb3NpdG9yeS5leGlzdHMoe3VzZXJuYW1lOnVzZXJuYW1lfSk7XG4gfTtcblxuIGFzeW5jIGZ1bmN0aW9uIGZpbmRCeVVzZXJuYW1lKHVzZXJuYW1lKXtcbiAgICAgcmV0dXJuIGF3YWl0IFVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoe3VzZXJuYW1lOnVzZXJuYW1lfSk7XG4gfVxuXG5hc3luYyBmdW5jdGlvbiBwZXJzaXN0KHVzZXJUb1NhdmUpe1xuICAgICAgICByZXR1cm4gYXdhaXQgVXNlclJlcG9zaXRvcnkuY3JlYXRlKHVzZXJUb1NhdmUpO1xufTtcbiBcbmV4cG9ydCBkZWZhdWx0IHtleGlzdEJ5VXNlcm5hbWUgOmV4aXN0QnlVc2VybmFtZSAsIHBlcnNpc3Q6IHBlcnNpc3QgLCBmaW5kQnlVc2VybmFtZTpmaW5kQnlVc2VybmFtZX07IiwiLy9kZXBlbmRlbmNpZXNcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xuaW1wb3J0IGRiQ29udGV4dCBmcm9tICcuLi9kYidcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcblxuLy9oYW5kbGVyc1xuaW1wb3J0IHBhc3N3b3JkRW5jb2RlciBmcm9tICcuLi91dGlscy9wYXNzd29yZC1lbmNvZGVyJztcbmltcG9ydCBqd3RDcmVhdG9yIGZyb20gJy4uL3V0aWxzL2p3dC1jcmVhdG9yJ1xuLy91c2UgY2FzZXNcbmltcG9ydCBtYWtlUmVnaXN0ZXJVc2VyIGZyb20gJy4uLy4uL3VzZWNhc2UvdXNlci9yZWdpc3Rlci11c2VyJztcbmltcG9ydCBtYWtlTG9naW5Vc2VyIGZyb20gJy4uLy4uL3VzZWNhc2UvdXNlci9sb2dpbi11c2VyJztcblxuY29uc3QgaWRHZW5lcmF0b3IgPSB7XG4gICAgZ2VuZXJhdGVJRDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdXVpZCgpO1xuICAgIH1cbn07XG5cbiBjb25zdCByZWdpc3RlclVzZXIgPSBtYWtlUmVnaXN0ZXJVc2VyKHtpZEdlbmVyYXRvcjogaWRHZW5lcmF0b3IsIFxuICAgIHVzZXJSZXBvc2l0b3J5OiBkYkNvbnRleHQudXNlclJlcG9zaXRvcnksXG4gICAgcGFzc3dvcmRFbmNvZGVyOiBwYXNzd29yZEVuY29kZXIsXG4gICAgbG9nZ2VyOiBjb25zb2xlfSk7XG5cbiBjb25zdCBsb2dpblVzZXIgPSBtYWtlTG9naW5Vc2VyKHtqd3RDcmVhdG9yOiBqd3RDcmVhdG9yLCBcbiAgICB1c2VyUmVwb3NpdG9yeTogZGJDb250ZXh0LnVzZXJSZXBvc2l0b3J5LFxuICAgIHBhc3N3b3JkRW5jb2RlcjogcGFzc3dvcmRFbmNvZGVyLFxuICAgIGxvZ2dlcjogY29uc29sZX0gKTtcblxuIGV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe3JlZ2lzdGVyVXNlcjogcmVnaXN0ZXJVc2VyLCBsb2dpblVzZXI6bG9naW5Vc2VyfSk7IiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5cbi8vVE9ETzsgRW52IHZhcmlhYmxlXG5jb25zdCBzZWNyZXRLZXkgPSAnc2VjcmV0a2V5JztcbmNvbnN0IGV4cGlyYXRpb25UaW1lID0gMzYwO1xuXG5cbiBmdW5jdGlvbiBnZW5lcmF0ZVRva2VuKHVzZXIpXG57XG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJfaWQ6IHVzZXIudXNlcl9pZCwgdXNlcm5hbWU6IHVzZXJuYW1lIH0sIHNlY3JldEtleSwge1xuICAgICAgICBhbGdvcml0aG06ICdIUzI1NicsXG4gICAgICAgIGV4cGlyZXNJbjogZXhwaXJhdGlvblRpbWVcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB0b2tlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBnZW5lcmF0ZVRva2VuOmdlbmVyYXRlVG9rZW59OyIsImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcbmNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcblxuYXN5bmMgZnVuY3Rpb24gZW5jb2RlKHBhc3N3b3JkKXtcblxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdChzYWx0Um91bmRzKTtcbiAgICBjb25zdCBwYXNzd29yZEVuY3J5cHRlZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLHNhbHQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkRW5jcnlwdGVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBtYXRjaChwYXNzd29yZElucHV0LCB1c2VyRGJQYXNzd29yZCl7XG4gICAgcmV0dXJuICBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZElucHV0LCB1c2VyRGJQYXNzd29yZCk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7ZW5jb2RlOmVuY29kZSwgbWF0Y2g6bWF0Y2h9IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTG9nSW5Vc2VyKHsgdXNlclJlcG9zaXRvcnksIHBhc3N3b3JkRW5jb2Rlciwgand0Q3JlYXRvciwgbG9nZ2VyIH0pIHtcblxuXG4gICAgaWYgKHVzZXJSZXBvc2l0b3J5ID09IG51bGwgfHwgdXNlclJlcG9zaXRvcnkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVXNlciBSZXBvc2l0b3J5ICBpcyByZXF1aXJlZGApO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmRFbmNvZGVyID09IG51bGwgfHwgcGFzc3dvcmRFbmNvZGVyID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHBhc3N3b3JkRW5jb2RlciAgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG4gICAgaWYgKGxvZ2dlciA9PSBudWxsIHx8IGxvZ2dlciA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBsb2dnZXIgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG4gICAgaWYgKGp3dENyZWF0b3IgPT0gbnVsbCB8fCBqd3RDcmVhdG9yID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGp3dENyZWF0b3IgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbG9nSW5Vc2VyKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgfSkge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyVG9Mb2dJbiA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LmZpbmRCeVVzZXJuYW1lKHVzZXJuYW1lKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VyVG9Mb2dJbikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaW5jb3JyZWN0YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0aCA9IGF3YWl0IHBhc3N3b3JkRW5jb2Rlci5tYXRjaChwYXNzd29yZCwgdXNlclRvTG9nSW4ucGFzc3dvcmQpO1xuXG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkTWF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaW5jb3JyZWN0YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGp3dCA9IGF3YWl0IGp3dENyZWF0b3IuZ2VuZXJhdGVUb2tlbih1c2VyVG9Mb2dJbik7XG5cbiAgICAgICAgICAgIHJldHVybiBqd3Q7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGUubWVzc2FnZSwgZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZSB9O1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZG9tYWluL3VzZXIvdXNlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVJlZ2lzdGVyVXNlcih7IGlkR2VuZXJhdG9yLCAgdXNlclJlcG9zaXRvcnksIHBhc3N3b3JkRW5jb2RlciwgbG9nZ2VyIH0pIHtcblxuICAgIGlmIChpZEdlbmVyYXRvciA9PSBudWxsIHx8IGlkR2VuZXJhdG9yID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGlkR2VuZXJhdG9yIGlzIHJlcXVpcmVkYCk7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJSZXBvc2l0b3J5ID09IG51bGwgfHwgdXNlclJlcG9zaXRvcnkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVXNlciBSZXBvc2l0b3J5ICBpcyByZXF1aXJlZGApO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmRFbmNvZGVyID09IG51bGwgfHwgcGFzc3dvcmRFbmNvZGVyID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHBhc3N3b3JkRW5jb2RlciAgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG4gICAgaWYgKGxvZ2dlciA9PSBudWxsIHx8IGxvZ2dlciA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBsb2dnZXIgaXMgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgfSkge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyQWxyZWFkeUV4aXN0ID0gYXdhaXQgdXNlclJlcG9zaXRvcnkuZXhpc3RCeVVzZXJuYW1lKHVzZXJuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJBbHJlYWR5RXhpc3QpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgZm9yICR7dXNlcm5hbWV9IGFscmVhZHkgZXhpc3RgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZW5jb2RlZFBhc3N3b3JkID0gYXdhaXQgcGFzc3dvcmRFbmNvZGVyLmVuY29kZShwYXNzd29yZCk7XG4gICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSAgVXNlcih7XG4gICAgICAgICAgICAgICAgX2lkOiBhd2FpdCBpZEdlbmVyYXRvci5nZW5lcmF0ZUlEKCksXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBlbmNvZGVkUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJTdG9yZWQgPSBhd2FpdCB1c2VyUmVwb3NpdG9yeS5wZXJzaXN0KG5ld1VzZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh1c2VyU3RvcmVkKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZS5tZXNzYWdlfTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==