(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_MovieList_js"],{

/***/ "./app/components/MovieCard.js":
/*!*************************************!*\
  !*** ./app/components/MovieCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function MovieCard(_ref) {
  var id = _ref.id,
      title = _ref.title,
      year = _ref.year,
      posterURL = _ref.posterURL,
      runningTime = _ref.runningTime,
      userRatings = _ref.userRatings;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      disabled = _React$useState4[0],
      setDisabled = _React$useState4[1]; //Is there a way to make sure duplicate objects were never added in the first place?


  var ratingClick = function ratingClick(val) {
    setRating(val);
    setDisabled(true); // userRatings.push({ 
    //     id: id,
    //     rating: val
    // })

    submitRating(id, val);
    console.log(userRatings);
  }; // how do I update if the rating is found and add a new rating if not?


  var submitRating = function submitRating(id, val) {
    var duplicateRating = false;
    userRatings.forEach(function (mapRating) {
      if (mapRating.id === id) {
        mapRating.rating = val;
        duplicateRating = true;
        return userRatings;
      }
    });

    if (!duplicateRating) {
      userRatings.push({
        id: id,
        rating: val
      });
    }

    return userRatings;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'card bg-light medium-text'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "header-sm center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "link",
    href: "https://www.imdb.com/title/tt".concat((0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.convertId)(id), "/")
  }, title)), posterURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: posterURL,
    alt: "poster for ".concat(title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscMegaphone, {
    color: "rgb(114,34,199)",
    size: 24,
    className: "vsci-mega"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " director")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ' ', year, '   ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Math.floor(runningTime / 60), "hr ", runningTime % 60, "min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_3__.default, {
    rating: rating,
    onRating: ratingClick
  }), rating !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "  ", rating)))));
}
MovieCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  year: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  posterURL: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  runningTime: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};

/***/ }),

/***/ "./app/components/MovieList.js":
/*!*************************************!*\
  !*** ./app/components/MovieList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoviesToRate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard */ "./app/components/MovieCard.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./app/components/Loading.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function MovieList(_ref) {
  var movies = _ref.movies,
      userRatings = _ref.userRatings;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "grid space-around no-bullets"
  }, movies.map(function (movie, index) {
    var id = movie.id,
        title = movie.title,
        year = movie.year,
        posterURL = movie.posterURL,
        runningTime = movie.runningTime,
        ratings = movie.ratings;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      id: id,
      title: title,
      year: year,
      posterURL: posterURL,
      runningTime: runningTime,
      userRatings: userRatings
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    className: "btn dark-btn btn-space",
    to: {
      pathname: '/recommendations',
      state: {
        userRatings: userRatings
      }
    }
  }, "Submit Ratings"));
}

function MoviesToRate() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      userRatings = _React$useState2[0],
      setUserRatings = _React$useState2[1];

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movies: null,
    loading: false,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  function fetchReducer(state, action) {
    if (action.type === 'fetch') {
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    } else if (action.type === 'success') {
      return {
        movies: action.data,
        error: null,
        loading: false
      };
    } else if (action.type === 'error') {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error.message,
        loading: false
      });
    } else {
      throw new Error("That action type is not supported: ".concat(action.type));
    }
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    dispatch({
      type: 'fetch'
    });
    fetch('api/v1/movies').then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: 'success',
        data: data
      });
    })["catch"](function (e) {
      console.warn(e.message);
      dispatch({
        type: 'error'
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__.default, null), state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "center-text error"
  }, state.error), state.movies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MovieList, {
    userRatings: userRatings,
    movies: state.movies
  }));
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
        strokeWidth: 10,
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
  }, starRating, hoverValue !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, hoverValue))));
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

/***/ "./app/utils/math.js":
/*!***************************!*\
  !*** ./app/utils/math.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertId": () => (/* binding */ convertId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function convertId(id) {
  var convertedId = id.toString();

  while (convertedId.length < 7) {
    convertedId = '0' + convertedId;
  }

  return convertedId;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tYXRoLmpzIl0sIm5hbWVzIjpbIk1vdmllQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicG9zdGVyVVJMIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5ncyIsIlJlYWN0IiwicmF0aW5nIiwic2V0UmF0aW5nIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInJhdGluZ0NsaWNrIiwidmFsIiwic3VibWl0UmF0aW5nIiwiY29uc29sZSIsImxvZyIsImR1cGxpY2F0ZVJhdGluZyIsImZvckVhY2giLCJtYXBSYXRpbmciLCJwdXNoIiwiY29udmVydElkIiwiTWF0aCIsImZsb29yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiTW92aWVMaXN0IiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpbmRleCIsInJhdGluZ3MiLCJwYXRobmFtZSIsInN0YXRlIiwiTW92aWVzVG9SYXRlIiwic2V0VXNlclJhdGluZ3MiLCJmZXRjaFJlZHVjZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJkaXNwYXRjaCIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwibWVzc2FnZSIsIkVycm9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJ3YXJuIiwiU3RhclJhdGluZyIsImNvdW50IiwiY29sb3IiLCJvblJhdGluZyIsImhvdmVyVmFsdWUiLCJzZXRIb3ZlclZhbHVlIiwiZ2V0Q29sb3IiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsImRlZmF1bHRQcm9wcyIsImNvbnZlcnRlZElkIiwidG9TdHJpbmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUE2RTtBQUFBLE1BQXhEQyxFQUF3RCxRQUF4REEsRUFBd0Q7QUFBQSxNQUFwREMsS0FBb0QsUUFBcERBLEtBQW9EO0FBQUEsTUFBN0NDLElBQTZDLFFBQTdDQSxJQUE2QztBQUFBLE1BQXZDQyxTQUF1QyxRQUF2Q0EsU0FBdUM7QUFBQSxNQUE1QkMsV0FBNEIsUUFBNUJBLFdBQTRCO0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUN4Rix3QkFBNEJDLDJDQUFBLENBQWUsQ0FBZixDQUE1QjtBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EseUJBQWdDRiwyQ0FBQSxDQUFlLEtBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakIsdUJBRndGLENBSXhGOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDekJKLGFBQVMsQ0FBQ0ksR0FBRCxDQUFUO0FBQ0FGLGVBQVcsQ0FBQyxJQUFELENBQVgsQ0FGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FHLGdCQUFZLENBQUNiLEVBQUQsRUFBS1ksR0FBTCxDQUFaO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixXQUFaO0FBQ0gsR0FURCxDQUx3RixDQWV4Rjs7O0FBQ0EsTUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2IsRUFBRCxFQUFLWSxHQUFMLEVBQWE7QUFDOUIsUUFBSUksZUFBZSxHQUFHLEtBQXRCO0FBQ0FYLGVBQVcsQ0FBQ1ksT0FBWixDQUFvQixVQUFDQyxTQUFELEVBQWU7QUFDL0IsVUFBSUEsU0FBUyxDQUFDbEIsRUFBVixL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SCxDIiwiZmlsZSI6ImFwcF9jb21wb25lbnRzX01vdmllTGlzdF9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNsb2NrLCBGYUNhbGVuZGFyLCBGYUZpbG0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgVnNjTWVnYXBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xyXG5pbXBvcnQgeyBjb252ZXJ0SWQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllQ2FyZCh7IGlkLCB0aXRsZSwgeWVhciwgcG9zdGVyVVJMLCBydW5uaW5nVGltZSwgdXNlclJhdGluZ3MgfSkge1xyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vSXMgdGhlcmUgYSB3YXkgdG8gbWFrZSBzdXJlIGR1cGxpY2F0ZSBvYmplY3RzIHdlcmUgbmV2ZXIgYWRkZWQgaW4gdGhlIGZpcnN0IHBsYWNlP1xyXG4gICAgY29uc3QgcmF0aW5nQ2xpY2sgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgc2V0UmF0aW5nKHZhbClcclxuICAgICAgICBzZXREaXNhYmxlZCh0cnVlKVxyXG4gICAgICAgIC8vIHVzZXJSYXRpbmdzLnB1c2goeyBcclxuICAgICAgICAvLyAgICAgaWQ6IGlkLFxyXG4gICAgICAgIC8vICAgICByYXRpbmc6IHZhbFxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgc3VibWl0UmF0aW5nKGlkLCB2YWwpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlclJhdGluZ3MpXHJcbiAgICB9XHJcbiAgICAvLyBob3cgZG8gSSB1cGRhdGUgaWYgdGhlIHJhdGluZyBpcyBmb3VuZCBhbmQgYWRkIGEgbmV3IHJhdGluZyBpZiBub3Q/XHJcbiAgICBjb25zdCBzdWJtaXRSYXRpbmcgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBkdXBsaWNhdGVSYXRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHVzZXJSYXRpbmdzLmZvckVhY2goKG1hcFJhdGluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwUmF0aW5nLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgbWFwUmF0aW5nLnJhdGluZyA9IHZhbFxyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlUmF0aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJSYXRpbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghZHVwbGljYXRlUmF0aW5nKSB7XHJcbiAgICAgICAgICAgIHVzZXJSYXRpbmdzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiB2YWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZXJSYXRpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCBiZy1saWdodCBtZWRpdW0tdGV4dCd9PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7Y29udmVydElkKGlkKX0vYH0+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdGVyVVJMICYmIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3RlclVSTH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Bwb3N0ZXIgZm9yICR7dGl0bGV9YH1cclxuICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyBzaXplPXsyNH0gY2xhc3NOYW1lPSd2c2NpLW1lZ2EnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBkaXJlY3Rvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eycgJ317eWVhcn17JyAgICd9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLmZsb29yKHJ1bm5pbmdUaW1lIC8gNjApfWhyIHtydW5uaW5nVGltZSAlIDYwfW1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IG9uUmF0aW5nPXtyYXRpbmdDbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhyYXRpbmcgIT09IDApICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICB7cmF0aW5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHBvc3RlclVSTDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJ1bm5pbmdUaW1lOiBQcm9wVHlwZXMubnVtYmVyXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmZ1bmN0aW9uIE1vdmllTGlzdCh7IG1vdmllcywgdXNlclJhdGluZ3MgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2dyaWQgc3BhY2UtYXJvdW5kIG5vLWJ1bGxldHMnPlxyXG4gICAgICAgICAgICAgICAge21vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRpdGxlLCB5ZWFyLCBwb3N0ZXJVUkwsIHJ1bm5pbmdUaW1lLCByYXRpbmdzIH0gPSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyVVJMPXtwb3N0ZXJVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e3J1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmdzPXt1c2VyUmF0aW5nc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBkYXJrLWJ0biBidG4tc3BhY2UnXHJcbiAgICAgICAgICAgICAgICB0bz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3JlY29tbWVuZGF0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHt1c2VyUmF0aW5nc31cclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXQgUmF0aW5nc1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzVG9SYXRlKCkge1xyXG4gICAgY29uc3QgW3VzZXJSYXRpbmdzLCBzZXRVc2VyUmF0aW5nc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVzOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdmZXRjaCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpZXM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGF0IGFjdGlvbiB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQ6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdmZXRjaCcgfSlcclxuXHJcbiAgICAgICAgZmV0Y2goJ2FwaS92MS9tb3ZpZXMnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxyXG5cclxuICAgICAgICAgICAge3N0YXRlLmVycm9yICYmIDxwIGNsYXNzTmFtZT0nY2VudGVyLXRleHQgZXJyb3InPntzdGF0ZS5lcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAge3N0YXRlLm1vdmllcyAmJiA8TW92aWVMaXN0IHVzZXJSYXRpbmdzPXt1c2VyUmF0aW5nc30gbW92aWVzPXtzdGF0ZS5tb3ZpZXN9IC8+fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgIHtzdGFyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAge2hvdmVyVmFsdWUgIT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICA8Yj57aG92ZXJWYWx1ZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIC8vZmlsbGVkIHZzIHVuZmlsbGVkIHdpdGhpbiBvYmo/XHJcbn1cclxuXHJcblN0YXJSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgICBmaWxsZWQ6ICcjZjVlYjNiJyxcclxuICAgICAgICB1bmZpbGxlZDogXCIjRENEQ0RDXCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==