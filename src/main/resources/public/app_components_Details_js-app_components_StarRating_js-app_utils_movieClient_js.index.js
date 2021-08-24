(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_Details_js-app_components_StarRating_js-app_utils_movieClient_js"],{

/***/ "./app/components/Details.js":
/*!***********************************!*\
  !*** ./app/components/Details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip */ "./app/components/Tooltip.js");






function Details(_ref) {
  var movie = _ref.movie;
  var Year = movie.Year,
      Runtime = movie.Runtime,
      Rated = movie.Rated,
      Genre = movie.Genre,
      Director = movie.Director,
      Writer = movie.Writer,
      Actors = movie.Actors,
      Plot = movie.Plot,
      Awards = movie.Awards,
      Ratings = movie.Ratings,
      BoxOffice = movie.BoxOffice;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, Director && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Director"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscMegaphone, {
    color: "rgb(114,34,199)"
  }), Director)), Year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Released"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFilm,
    color: "rgb(129, 195, 245)"
  }), Year)), Runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Runtime"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faClock,
    color: "rgb(219,155,59)"
  }), (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.convertRunningTime)(parseInt(Runtime)))), Actors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Starring"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faStar,
    color: "#21ADA8"
  }), Actors)), Writer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Written by"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUserEdit,
    color: "#606060"
  }), Writer)), Genre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Genre(s)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTheaterMasks,
    color: "red"
  }), Genre)), Plot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Plot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPen,
    color: "black"
  }), Plot)), Awards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Awards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAward,
    color: "blue"
  }), Awards)), Ratings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Ratings"
  }, "\"Ratings\"") // <li>
  //     {/* <FontAwesomeIcon icon={ } color="" /> */}
  //     {showRatings(Ratings)}
  // </li>
  , BoxOffice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Box office"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faDollarSign,
    color: "#85bb65"
  }), BoxOffice))));
}

/***/ }),

/***/ "./app/components/StarRating.js":
/*!**************************************!*\
  !*** ./app/components/StarRating.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function StarRating(_ref) {
  var _ref$count = _ref.count,
      count = _ref$count === void 0 ? 10 : _ref$count,
      _ref$rating = _ref.rating,
      rating = _ref$rating === void 0 ? 0 : _ref$rating,
      color = _ref.color,
      onRating = _ref.onRating;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hoverValue = _React$useState2[0],
      setHoverValue = _React$useState2[1];

  var getColor = function getColor(index) {
    if (hoverValue >= index) {
      return color.filled;
    } else if (!hoverValue && rating >= index) {
      return color.filled;
    } else {
      return color.unfilled;
    }
  };

  var starRating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return Array(count).fill(0).map(function (_, i) {
      return i + 1;
    }).map(function (index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {
        key: index,
        stroke: "black",
        strokeWidth: 20,
        className: "fa-star",
        color: color.unfilled,
        onClick: function onClick() {
          return onRating(index);
        },
        style: {
          color: getColor(index)
        },
        onMouseOver: function onMouseOver() {
          return setHoverValue(index);
        },
        onMouseOut: function onMouseOut() {
          return setHoverValue(0);
        }
      });
    });
  }, [count, rating, hoverValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "star-rating"
  }, starRating));
}
StarRating.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  rating: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onRating: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object) //filled vs unfilled within obj?

};
StarRating.defaultProps = {
  color: {
    filled: '#f5eb3b',
    unfilled: "#DCDCDC"
  }
};

/***/ }),

/***/ "./app/components/Tooltip.js":
/*!***********************************!*\
  !*** ./app/components/Tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useHover */ "./app/hooks/useHover.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
};

function Tooltip(_ref) {
  var text = _ref.text,
      children = _ref.children;

  var _useHover = (0,_hooks_useHover__WEBPACK_IMPORTED_MODULE_2__.default)(),
      _useHover2 = _slicedToArray(_useHover, 2),
      hovering = _useHover2[0],
      attrs = _useHover2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    style: styles.container
  }, attrs), hovering === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.tooltip
  }, text), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "./app/hooks/useHover.js":
/*!*******************************!*\
  !*** ./app/hooks/useHover.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useHover() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hovering = _React$useState2[0],
      setHovering = _React$useState2[1];

  var onMouseOver = function onMouseOver() {
    return setHovering(true);
  };

  var onMouseOut = function onMouseOut() {
    return setHovering(false);
  };

  return [hovering, {
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut
  }];
}

/***/ }),

/***/ "./app/utils/math.js":
/*!***************************!*\
  !*** ./app/utils/math.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertId": () => (/* binding */ convertId),
/* harmony export */   "convertRunningTime": () => (/* binding */ convertRunningTime)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function convertId(id) {
  var convertedId = id.toString();

  while (convertedId.length < 7) {
    convertedId = '0' + convertedId;
  }

  return convertedId;
}
function convertRunningTime(mins) {
  if (mins === 60) {
    return '1hr';
  } else if (mins < 60) {
    return mins + 'min';
  } else {
    return "".concat(Math.floor(mins / 60), "hr ").concat(mins % 60, "min");
  }
}

/***/ }),

/***/ "./app/utils/movieClient.js":
/*!**********************************!*\
  !*** ./app/utils/movieClient.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchMovieDetails": () => (/* binding */ fetchMovieDetails),
/* harmony export */   "fetchRatings": () => (/* binding */ fetchRatings),
/* harmony export */   "fetchMovieFromDB": () => (/* binding */ fetchMovieFromDB),
/* harmony export */   "fetchMovieByTitle": () => (/* binding */ fetchMovieByTitle)
/* harmony export */ });
function fetchMovieDetails(id) {
  //Acknowledged this is no good, but it's a free service for which I can get another API key
  var api = "http://www.omdbapi.com/?i=tt".concat(id, "&apikey=2b3a335d");
  return fetch(api).then(function (res) {
    return res.json();
  })["catch"](function (e) {
    console.warn(e.message);
    throw e;
  });
}
function fetchRatings() {
  var api = "api/v1/ratings";
  return fetch(api).then(function (res) {
    return res.json();
  })["catch"](function (e) {
    console.warn(e.message);
    throw e;
  });
} //NOT FINISHED

function fetchMovieFromDB(id) {
  var api = "api/v1/movies";
  return fetch(api).then(function (res) {
    return res.json();
  })["catch"](function (e) {
    console.warn(e.message);
    throw e;
  });
}
function fetchMovieByTitle(title) {
  var api = 'api/v1/movies?';
  return fetch(api + new URLSearchParams({
    title: title
  })).then(function (response) {
    return response.json();
  })["catch"](function (e) {
    console.warn(e.message);
    throw e;
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU3RhclJhdGluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2hvb2tzL3VzZUhvdmVyLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21vdmllQ2xpZW50LmpzIl0sIm5hbWVzIjpbIkRldGFpbHMiLCJtb3ZpZSIsIlllYXIiLCJSdW50aW1lIiwiUmF0ZWQiLCJHZW5yZSIsIkRpcmVjdG9yIiwiV3JpdGVyIiwiQWN0b3JzIiwiUGxvdCIsIkF3YXJkcyIsIlJhdGluZ3MiLCJCb3hPZmZpY2UiLCJmYUZpbG0iLCJmYUNsb2NrIiwiY29udmVydFJ1bm5pbmdUaW1lIiwicGFyc2VJbnQiLCJmYVN0YXIiLCJmYVVzZXJFZGl0IiwiZmFUaGVhdGVyTWFza3MiLCJmYVBlbiIsImZhQXdhcmQiLCJmYURvbGxhclNpZ24iLCJTdGFyUmF0aW5nIiwiY291bnQiLCJyYXRpbmciLCJjb2xvciIsIm9uUmF0aW5nIiwiUmVhY3QiLCJob3ZlclZhbHVlIiwic2V0SG92ZXJWYWx1ZSIsImdldENvbG9yIiwiaW5kZXgiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsImNvbnRhaW5lciIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRvb2x0aXAiLCJib3hTaXppbmciLCJ3aWR0aCIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiVG9vbHRpcCIsInRleHQiLCJjaGlsZHJlbiIsInVzZUhvdmVyIiwiaG92ZXJpbmciLCJhdHRycyIsInNldEhvdmVyaW5nIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwiY29udmVydElkIiwiaWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWlucyIsIk1hdGgiLCJmbG9vciIsImZldGNoTW92aWVEZXRhaWxzIiwiYXBpIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJmZXRjaFJhdGluZ3MiLCJmZXRjaE1vdmllRnJvbURCIiwiZmV0Y2hNb3ZpZUJ5VGl0bGUiLCJ0aXRsZSIsIlVSTFNlYXJjaFBhcmFtcyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUE0QjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN2QyxNQUFRQyxJQUFSLEdBQ2lERCxLQURqRCxDQUFRQyxJQUFSO0FBQUEsTUFBY0MsT0FBZCxHQUNpREYsS0FEakQsQ0FBY0UsT0FBZDtBQUFBLE1BQXVCQyxLQUF2QixHQUNpREgsS0FEakQsQ0FBdUJHLEtBQXZCO0FBQUEsTUFBOEJDLEtBQTlCLEdBQ2lESixLQURqRCxDQUE4QkksS0FBOUI7QUFBQSxNQUFxQ0MsUUFBckMsR0FDaURMLEtBRGpELENBQXFDSyxRQUFyQztBQUFBLE1BQStDQyxNQUEvQyxHQUNpRE4sS0FEakQsQ0FBK0NNLE1BQS9DO0FBQUEsTUFDSUMsTUFESixHQUNpRFAsS0FEakQsQ0FDSU8sTUFESjtBQUFBLE1BQ1lDLElBRFosR0FDaURSLEtBRGpELENB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Q0FBQ0QsR0FBRCxDQUFMLENBQ0ZFLElBREUsQ0FDRyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQURILFdBRUksVUFBQ0MsQ0FBRCxFQUFPO0FBQ1ZDLFdBQU8sQ0FBQ0MsSUFBUixDQUFhRixDQUFDLENBQUNHLE9BQWY7QUFDQSxVQUFNSCxDQUFOO0FBQ0gsR0FMRSxDQUFQO0FBTUg7QUFFTSxTQUFTTSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDckMsTUFBTVosR0FBRyxHQUFHLGdCQUFaO0FBQ0EsU0FDSUMsS0FBSyxDQUFDRCxHQUFHLEdBQUcsSUFBSWEsZUFBSixDQUFvQjtBQUM1QkQsU0FBSyxFQUFFQTtBQURxQixHQUFwQixDQUFQLENBQUwsQ0FHS1YsSUFITCxDQUdVLFVBQUFZLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNWLElBQVQsRUFBSjtBQUFBLEdBSGxCLFdBSVcsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1ZDLFdBQU8sQ0FBQ0MsSUFBUixDQUFhRixDQUFDLENBQUNHLE9BQWY7QUFDQSxVQUFNSCxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBV0gsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19EZXRhaWxzX2pzLWFwcF9jb21wb25lbnRzX1N0YXJSYXRpbmdfanMtYXBwX3V0aWxzX21vdmllQ2xpZW50X2pzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbnZlcnRSdW5uaW5nVGltZSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFTdGFyLCBmYVVzZXJFZGl0LCBmYVRoZWF0ZXJNYXNrcywgZmFBd2FyZCwgZmFQZW4sIGZhQ2xvY2ssIGZhRmlsbSwgZmFEb2xsYXJTaWduIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBWc2NNZWdhcGhvbmUgfSBmcm9tICdyZWFjdC1pY29ucy92c2MnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbHMoeyBtb3ZpZSB9KSB7XHJcbiAgICBjb25zdCB7IFllYXIsIFJ1bnRpbWUsIFJhdGVkLCBHZW5yZSwgRGlyZWN0b3IsIFdyaXRlcixcclxuICAgICAgICBBY3RvcnMsIFBsb3QsIEF3YXJkcywgUmF0aW5ncywgQm94T2ZmaWNlIH0gPSBtb3ZpZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduby1idWxsZXRzIGNhcmQtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICB7RGlyZWN0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiRGlyZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0RpcmVjdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtZZWFyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlJlbGVhc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxtfSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1J1bnRpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUnVudGltZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsb2NrfSBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShwYXJzZUludChSdW50aW1lKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0FjdG9ycyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJTdGFycmluZ1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IGNvbG9yPScjMjFBREE4JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FjdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7V3JpdGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIldyaXR0ZW4gYnlcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyRWRpdH0gY29sb3I9JyM2MDYwNjAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7V3JpdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtHZW5yZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJHZW5yZShzKVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRoZWF0ZXJNYXNrc30gY29sb3I9J3JlZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHZW5yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UGxvdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJQbG90XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGVufSBjb2xvcj0nYmxhY2snIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UGxvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QXdhcmRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkF3YXJkc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUF3YXJkfSBjb2xvcj0nYmx1ZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBd2FyZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1JhdGluZ3MgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUmF0aW5nc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJSYXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB7LyogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgfSBjb2xvcj1cIlwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB7c2hvd1JhdGluZ3MoUmF0aW5ncyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPC9saT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtCb3hPZmZpY2UgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQm94IG9mZmljZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvbGxhclNpZ259IGNvbG9yPScjODViYjY1JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0JveE9mZmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclJhdGluZyh7IGNvdW50ID0gMTAsIHJhdGluZyA9IDAsIGNvbG9yLCBvblJhdGluZyB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJWYWx1ZSwgc2V0SG92ZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChob3ZlclZhbHVlID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWRcclxuICAgICAgICB9IGVsc2UgaWYgKCFob3ZlclZhbHVlICYmIHJhdGluZyA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci51bmZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFyUmF0aW5nID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KGNvdW50KVxyXG4gICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiBpICsgMSlcclxuICAgICAgICAgICAgLm1hcChpbmRleCA9PlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYS1zdGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci51bmZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJhdGluZyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGdldENvbG9yKGluZGV4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlclZhbHVlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlclZhbHVlKDApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW2NvdW50LCByYXRpbmcsIGhvdmVyVmFsdWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhclJhdGluZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJhdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgLy9maWxsZWQgdnMgdW5maWxsZWQgd2l0aGluIG9iaj9cclxufVxyXG5cclxuU3RhclJhdGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjoge1xyXG4gICAgICAgIGZpbGxlZDogJyNmNWViM2InLFxyXG4gICAgICAgIHVuZmlsbGVkOiBcIiNEQ0RDRENcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuLi9ob29rcy91c2VIb3ZlcidcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMTAwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJy04MHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDIwJSwgMC45KScsXHJcbiAgICAgICAgcGFkZGluZzogJzdweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVG9vbHRpcCh7IHRleHQsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlcmluZywgYXR0cnNdID0gdXNlSG92ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gey4uLmF0dHJzfT5cclxuICAgICAgICAgICAge2hvdmVyaW5nID09PSB0cnVlICYmIDxkaXYgc3R5bGU9e3N0eWxlcy50b29sdGlwfT57dGV4dH08L2Rpdj59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb3ZlcigpIHtcclxuICAgIGNvbnN0IFtob3ZlcmluZywgc2V0SG92ZXJpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZU92ZXIgPSAoKSA9PiBzZXRIb3ZlcmluZyh0cnVlKVxyXG4gICAgY29uc3Qgb25Nb3VzZU91dCA9ICgpID0+IHNldEhvdmVyaW5nKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiBbaG92ZXJpbmcsIHtcclxuICAgICAgICBvbk1vdXNlT3ZlcixcclxuICAgICAgICBvbk1vdXNlT3V0XHJcbiAgICB9XVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydElkIChpZCkge1xyXG4gICAgbGV0IGNvbnZlcnRlZElkID0gaWQudG9TdHJpbmcoKVxyXG4gICAgd2hpbGUgKGNvbnZlcnRlZElkLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBjb252ZXJ0ZWRJZCA9ICcwJyArIGNvbnZlcnRlZElkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIGNvbnZlcnRlZElkXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UnVubmluZ1RpbWUgKG1pbnMpIHtcclxuICAgIGlmIChtaW5zID09PSA2MCkge1xyXG4gICAgICAgIHJldHVybiAnMWhyJztcclxuICAgIH0gZWxzZSBpZiAobWlucyA8IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbnMgKyAnbWluJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihtaW5zIC8gNjApfWhyICR7bWlucyAlIDYwfW1pbmBcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllRGV0YWlscyhpZCkge1xyXG4gICAgLy9BY2tub3dsZWRnZWQgdGhpcyBpcyBubyBnb29kLCBidXQgaXQncyBhIGZyZWUgc2VydmljZSBmb3Igd2hpY2ggSSBjYW4gZ2V0IGFub3RoZXIgQVBJIGtleVxyXG4gICAgY29uc3QgYXBpID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2k9dHQke2lkfSZhcGlrZXk9MmIzYTMzNWRgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSYXRpbmdzKCkge1xyXG4gICAgY29uc3QgYXBpID0gYGFwaS92MS9yYXRpbmdzYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuLy9OT1QgRklOSVNIRURcclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVGcm9tREIoaWQpIHtcclxuICAgIGNvbnN0IGFwaSA9IGBhcGkvdjEvbW92aWVzYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVCeVRpdGxlKHRpdGxlKSB7XHJcbiAgICBjb25zdCBhcGkgPSAnYXBpL3YxL21vdmllcz8nXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGZldGNoKGFwaSArIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGVcclxuICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICApXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==