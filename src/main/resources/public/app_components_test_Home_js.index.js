(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_test_Home_js"],{

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

/***/ "./app/components/test/Home.js":
/*!*************************************!*\
  !*** ./app/components/test/Home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./app/components/test/Loading.js");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StarRating */ "./app/components/StarRating.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieCard */ "./app/components/test/MovieCard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      display = _React$useState2[0],
      setDisplay = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      search = _React$useState4[0],
      setSearch = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      movie = _React$useState8[0],
      setMovie = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      rating = _React$useState10[0],
      setRating = _React$useState10[1];

  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movies: [],
    loading: true,
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
        movies: action.movieData,
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
    fetch('v1/api/movies', {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (movieData) {
      return dispatch({
        type: 'success',
        movieData: movieData
      });
    })["catch"](function (e) {
      console.warn(e.message);
      dispatch({
        type: error
      });
    });
  }, []); //There has to be a better way?

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    state.loading === true;
    var opt = [];
    state.movies.map(function (movie) {
      opt.push(movie.title);
    });
    setOptions(opt);
    state.loading === false;
  }, [state.movies]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  var setDisplayMovie = function setDisplayMovie(title) {
    setSearch(title);
    setDisplay(false);
  };

  var handleClickOutside = function handleClickOutside(event) {
    var wrap = wrapperRef.current;

    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  var handleSubmit = function handleSubmit() {
    setMovie('Poop');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: wrapperRef
  }, state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, {
    text: "Loading database"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "auto-complete",
    onClick: function onClick() {
      return setDisplay(!display);
    },
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    },
    placeholder: "Type to search movies",
    value: search
  }), search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleSubmit
  }, "Select Movie"), movie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_2__.default, {
    rating: rating,
    onRating: setRating
  }), rating !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Rating: ", rating), display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, options.filter(function (title) {
    return title.indexOf(search.toLowerCase()) > -1;
  }).map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "option",
      key: index,
      onClick: function onClick() {
        return setDisplayMovie(value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value));
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./app/components/test/MovieCard.js":
/*!******************************************!*\
  !*** ./app/components/test/MovieCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/math'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './StarRating'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    href: "https://www.imdb.com/title/tt".concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/math'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id), "/")
  }, title)), posterURL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: posterURL,
    alt: "poster for ".concat(title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscMegaphone, {
    color: "rgb(114,34,199)",
    size: 24,
    className: "vsci-mega"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " director")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ' ', year, '   ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Math.floor(runningTime / 60), "hr ", runningTime % 60, "min")))));
}
MovieCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  year: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  posterURL: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  runningTime: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU3RhclJhdGluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvdGVzdC9Ib21lLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy90ZXN0L01vdmllQ2FyZC5qcyJdLCJuYW1lcyI6WyJTdGFyUmF0aW5nIiwiY291bnQiLCJyYXRpbmciLCJjb2xvciIsIm9uUmF0aW5nIiwiUmVhY3QiLCJob3ZlclZhbHVlIiwic2V0SG92ZXJWYWx1ZSIsImdldENvbG9yIiwiaW5kZXgiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIkhvbWUiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInNlYXJjaCIsInNldFNlYXJjaCIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibW92aWUiLCJzZXRNb3ZpZSIsInNldFJhdGluZyIsIndyYXBwZXJSZWYiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwidHlwZSIsIm1vdmllRGF0YSIsIm1lc3NhZ2UiLCJFcnJvciIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwib3B0IiwicHVzaCIsInRpdGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldERpc3BsYXlNb3ZpZSIsImV2ZW50Iiwid3JhcCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInZhbHVlIiwiZmlsdGVyIiwiaW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiTW92aWVDYXJkIiwiaWQiLCJ5ZWFyIiwicG9zdGVyVVJMIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5ncyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJyYXRpbmdDbGljayIsInZhbCIsInN1Ym1pdFJhdGluZyIsImxvZyIsImR1cGxpY2F0ZVJhdGluZyIsImZvckVhY2giLCJtYXBSYXRpbmciLCJjb252ZXJ0SWQiLCJNYXRoIiwiZmxvb3IiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUFpRTtBQUFBLHdCQUEzQ0MsS0FBMkM7QUFBQSxNQUEzQ0EsS0FBMkMsMkJBQW5DLEVBQW1DO0FBQUEseUJBQS9CQyxNQUErQjtBQUFBLE1BQS9CQSxNQUErQiw0QkFBdEIsQ0FBc0I7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUM1RSx3QkFBb0NDLDJDQUFBLENBQWUsQ0FBZixDQUFwQztBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDdEIsUUFBSUgsVUFBVSxJQUFJRyxLQUFsQixFQUF5QjtBQUNyQixhQUFPTixLQUFLLENBQUNPLE1BQWI7QUFDSCxLQUZELE1BRU8sSUFBSSxDQUFDSixVQUFELElBQWVKLE1BQU0sSUFBSU8sS0FBN0IsRUFBb0M7QUFDdkMsYUFBT04sS0FBSyxDQUFDTyxNQUFiO0FBQ0gsS0FGTSxNQUVBO0FBQ0gsYUFBT1AsS0FBSyxDQUFDUSxRQUFiO0FBQ0g7QUFDSixHQVJEOztBQVVBLE1BQU1DLFVBQVUsR0FBR1AsMENBQUEsQ0FBYyxZQUFNO0FBQ25DLFdBQU9RLEtBQUssQ0FBQ1osS0FBRCxDQUFMLENBQ0ZhLElBREUsQ0FDRyxDQURILEVB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QUZXO0FBR2xCb0QsTUFBSSxFQUFFcEQsMERBSFk7QUFJbEJxRCxXQUFTLEVBQUVyRCwwREFKTztBQUtsQnNELGFBQVcsRUFBRXRELDBEQUFnQm9FO0FBTFgsQ0FBdEIsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c190ZXN0X0hvbWVfanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgIHtzdGFyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAge2hvdmVyVmFsdWUgIT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICA8Yj57aG92ZXJWYWx1ZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIC8vZmlsbGVkIHZzIHVuZmlsbGVkIHdpdGhpbiBvYmo/XHJcbn1cclxuXHJcblN0YXJSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgICBmaWxsZWQ6ICcjZjVlYjNiJyxcclxuICAgICAgICB1bmZpbGxlZDogXCIjRENEQ0RDXCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4uL1N0YXJSYXRpbmcnXHJcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3Qgd3JhcHBlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZXM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdmZXRjaCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpZXM6IGFjdGlvbi5tb3ZpZURhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoYXQgYWN0aW9uIHR5cGUgaXMgbm90IHN1cHBvcnRlZDogJHthY3Rpb24udHlwZX1gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2ZldGNoJyB9KVxyXG5cclxuICAgICAgICBmZXRjaCgndjEvYXBpL21vdmllcycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChtb3ZpZURhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBtb3ZpZURhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogZXJyb3IgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG4gICAgLy9UaGVyZSBoYXMgdG8gYmUgYSBiZXR0ZXIgd2F5P1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgY29uc3Qgb3B0ID0gW11cclxuICAgICAgICBzdGF0ZS5tb3ZpZXMubWFwKChtb3ZpZSkgPT4ge1xyXG4gICAgICAgICAgICBvcHQucHVzaChtb3ZpZS50aXRsZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldE9wdGlvbnMob3B0KVxyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPT09IGZhbHNlXHJcbiAgICB9LCBbc3RhdGUubW92aWVzXSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgc2V0RGlzcGxheU1vdmllID0gdGl0bGUgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaCh0aXRsZSlcclxuICAgICAgICBzZXREaXNwbGF5KGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IHdyYXAgfSA9IHdyYXBwZXJSZWZcclxuICAgICAgICBpZiAod3JhcCAmJiAhd3JhcC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHNldERpc3BsYXkoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb3ZpZSgnUG9vcCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXt3cmFwcGVyUmVmfT5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGluZyB0ZXh0PVwiTG9hZGluZyBkYXRhYmFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2F1dG8tY29tcGxldGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERpc3BsYXkoIWRpc3BsYXkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgdG8gc2VhcmNoIG1vdmllcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgIHtzZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBNb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge21vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IG9uUmF0aW5nPXtzZXRSYXRpbmd9IC8+fVxyXG4gICAgICAgICAgICAgICAgeyhyYXRpbmcgIT09IDApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmF0aW5nOiB7cmF0aW5nfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuZmlsdGVyKCh0aXRsZSkgPT4gdGl0bGUuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29wdGlvbicga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gc2V0RGlzcGxheU1vdmllKHZhbHVlKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFDYWxlbmRhciwgRmFGaWxtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IFZzY01lZ2FwaG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYydcclxuaW1wb3J0IHsgY29udmVydElkIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICcuL1N0YXJSYXRpbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUNhcmQoeyBpZCwgdGl0bGUsIHllYXIsIHBvc3RlclVSTCwgcnVubmluZ1RpbWUsIHVzZXJSYXRpbmdzIH0pIHtcclxuICAgIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvL0lzIHRoZXJlIGEgd2F5IHRvIG1ha2Ugc3VyZSBkdXBsaWNhdGUgb2JqZWN0cyB3ZXJlIG5ldmVyIGFkZGVkIGluIHRoZSBmaXJzdCBwbGFjZT9cclxuICAgIGNvbnN0IHJhdGluZ0NsaWNrID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIHNldFJhdGluZyh2YWwpXHJcbiAgICAgICAgc2V0RGlzYWJsZWQodHJ1ZSlcclxuICAgICAgICAvLyB1c2VyUmF0aW5ncy5wdXNoKHsgXHJcbiAgICAgICAgLy8gICAgIGlkOiBpZCxcclxuICAgICAgICAvLyAgICAgcmF0aW5nOiB2YWxcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHN1Ym1pdFJhdGluZyhpZCwgdmFsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJSYXRpbmdzKVxyXG4gICAgfVxyXG4gICAgLy8gaG93IGRvIEkgdXBkYXRlIGlmIHRoZSByYXRpbmcgaXMgZm91bmQgYW5kIGFkZCBhIG5ldyByYXRpbmcgaWYgbm90P1xyXG4gICAgY29uc3Qgc3VibWl0UmF0aW5nID0gKGlkLCB2YWwpID0+IHtcclxuICAgICAgICBsZXQgZHVwbGljYXRlUmF0aW5nID0gZmFsc2VcclxuICAgICAgICB1c2VyUmF0aW5ncy5mb3JFYWNoKChtYXBSYXRpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hcFJhdGluZy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIG1hcFJhdGluZy5yYXRpbmcgPSB2YWxcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVJhdGluZyA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyUmF0aW5nc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIWR1cGxpY2F0ZVJhdGluZykge1xyXG4gICAgICAgICAgICB1c2VyUmF0aW5ncy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogdmFsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1c2VyUmF0aW5nc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NhcmQgYmctbGlnaHQgbWVkaXVtLXRleHQnfT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2hlYWRlci1zbSBjZW50ZXItdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJyBocmVmPXtgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQke2NvbnZlcnRJZChpZCl9L2B9Pnt0aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAge3Bvc3RlclVSTCAmJiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtb3ZpZS1wb3N0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0ZXJVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke3RpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWc2NNZWdhcGhvbmUgY29sb3I9J3JnYigxMTQsMzQsMTk5KScgc2l6ZT17MjR9IGNsYXNzTmFtZT0ndnNjaS1tZWdhJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gZGlyZWN0b3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZpbG0gY29sb3I9J3JnYigxMjksIDE5NSwgMjQ1KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsnICd9e3llYXJ9eycgICAnfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57TWF0aC5mbG9vcihydW5uaW5nVGltZSAvIDYwKX1ociB7cnVubmluZ1RpbWUgJSA2MH1taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB5ZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcG9zdGVyVVJMOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcnVubmluZ1RpbWU6IFByb3BUeXBlcy5udW1iZXJcclxufSJdLCJzb3VyY2VSb290IjoiIn0=