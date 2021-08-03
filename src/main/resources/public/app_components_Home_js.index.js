(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_Home_js"],{

/***/ "./app/components/Home.js":
/*!********************************!*\
  !*** ./app/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./app/components/Loading.js");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieCard */ "./app/components/MovieCard.js");
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
    var title = document.getElementById('title-search').value;
    var targetMovie;
    state.movies.map(function (movieData) {
      if (movieData.title === title) {
        console.log('found');
        targetMovie = movieData;
      }
    });
    console.log(targetMovie);
    setMovie(targetMovie);
    console.log('hi');
    console.log(movie);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: wrapperRef
  }, state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, {
    text: "Loading database"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "title-search",
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
  }, "Select Movie"), movie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    posterURL: movie.posterURL,
    runningTime: movie.runningTime
  }), display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, options.filter(function (title) {
    return title.toLowerCase().indexOf(search.toLowerCase()) > -1;
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
      runningTime = _ref.runningTime,
      userRatings = _ref.userRatings;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      disabled = _React$useState4[0],
      setDisabled = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      posterURL = _React$useState6[0],
      setPosterURL = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    fetch("http://www.omdbapi.com/?i=tt".concat(id, "&apikey=2b3a335d")).then(function (res) {
      return res.json();
    }).then(function (data) {
      setPosterURL(data.Poster);
    })["catch"](function (e) {
      console.warn(e.message);
    });
  }, []); //Is there a way to make sure duplicate objects were never added in the first place?

  var ratingClick = function ratingClick(val) {
    setRating(val);
    setDisabled(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbWF0aC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiUmVhY3QiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInNlYXJjaCIsInNldFNlYXJjaCIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibW92aWUiLCJzZXRNb3ZpZSIsInJhdGluZyIsInNldFJhdGluZyIsIndyYXBwZXJSZWYiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwidHlwZSIsIm1vdmllRGF0YSIsIm1lc3NhZ2UiLCJFcnJvciIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwib3B0IiwibWFwIiwicHVzaCIsInRpdGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldERpc3BsYXlNb3ZpZSIsImV2ZW50Iiwid3JhcCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0YXJnZXRNb3ZpZSIsImxvZyIsImlkIiwieWVhciIsInBvc3RlclVSTCIsInJ1bm5pbmdUaW1lIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaW5kZXgiLCJNb3ZpZUNhcmQiLCJ1c2VyUmF0aW5ncyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJzZXRQb3N0ZXJVUkwiLCJkYXRhIiwiUG9zdGVyIiwicmF0aW5nQ2xpY2siLCJ2YWwiLCJzdWJtaXRSYXRpbmciLCJkdXBsaWNhdGVSYXRpbmciLCJmb3JFYWNoIiwibWFwUmF0aW5nIiwiY29udmVydElkIiwiTWF0aCIsImZsb29yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiU3RhclJhdGluZyIsImNvdW50IiwiY29sb3IiLCJvblJhdGluZyIsImhvdmVyVmFsdWUiLCJzZXRIb3ZlclZhbHVlIiwiZ2V0Q29sb3IiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsImRlZmF1bHRQcm9wcyIsImNvbnZlcnRlZElkIiwidG9TdHJpbmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNaLHdCQUE4QkMsMkNBQUEsQ0FBZSxLQUFmLENBQTlCO0FBQUE7QUFBQSxNQUFPQyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLHlCQUE0QkYsMkNBQUEsQ0FBZSxFQUFmLENBQTVCO0FBQUE7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSx5QkFBOEJKLDJDQUFBLENBQWUsRUFBZixDQUE5QjtBQUFBO0FBQUEsTUFBT0ssT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSx5QkFBMEJOLDJDQUFBLENBQWUsSUFBZixDQUExQjtBQUFBO0FBQUEsTUFBT08sS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EseUJBQTRCUiwyQ0FBQSxDQUFlLENBQWYsQ0FBNUI7QUFBQTtBQUFBLE1BQU9TLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLFVBQVUsR0FBR1gseUNBQUEsQ0FBYSxJQUFiLENBQW5COztBQUVBLDBCQUEwQkEsNkNBQUEsQ0FD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LENBREo7QUFVSDtBQUVESixVQUFVLENBQUNILFNBQVgsR0FBdUI7QUFDbkJJLE9BQUssRUFBRUgsMERBRFk7QUFFbkJsRSxRQUFNLEVBQUVrRSwwREFGVztBQUduQkssVUFBUSxFQUFFTCx3REFIUztBQUluQkksT0FBSyxFQUFFSiwwREFKWSxDQUtuQjs7QUFMbUIsQ0FBdkI7QUFRQUUsVUFBVSxDQUFDYyxZQUFYLEdBQTBCO0FBQ3RCWixPQUFLLEVBQUU7QUFDSEssVUFBTSxFQUFFLFNBREw7QUFFSEMsWUFBUSxFQUFFO0FBRlA7QUFEZSxDQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBRU8sU0FBU2QsU0FBVCxDQUFvQnJCLEVBQXBCLEVBQXdCO0FBQzNCLE1BQUkwQyxXQUFXLEdBQUcxQyxFQUFFLENBQUMyQyxRQUFILEVBQWxCOztBQUNBLFNBQU9ELFdBQVcsQ0FBQ0UsTUFBWixHQUFxQixDQUE1QixFQUErQjtBQUMzQkYsZUFBVyxHQUFHLE1BQU1BLFdBQXBCO0FBQ0g7O0FBQ0QsU0FBUUEsV0FBUjtBQUNILEMiLCJmaWxlIjoiYXBwX2NvbXBvbmVudHNfSG9tZV9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCdcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCB3cmFwcGVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vdmllczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ2ZldGNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vdmllczogYWN0aW9uLm1vdmllRGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhhdCBhY3Rpb24gdHlwZSBpcyBub3Qgc3VwcG9ydGVkOiAke2FjdGlvbi50eXBlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZmV0Y2gnIH0pXHJcblxyXG4gICAgICAgIGZldGNoKCd2MS9hcGkvbW92aWVzJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKG1vdmllRGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIG1vdmllRGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBlcnJvciB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcbiAgICAvL1RoZXJlIGhhcyB0byBiZSBhIGJldHRlciB3YXk/XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICBjb25zdCBvcHQgPSBbXVxyXG4gICAgICAgIHN0YXRlLm1vdmllcy5tYXAoKG1vdmllKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdC5wdXNoKG1vdmllLnRpdGxlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0T3B0aW9ucyhvcHQpXHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9PT0gZmFsc2VcclxuICAgIH0sIFtzdGF0ZS5tb3ZpZXNdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKVxyXG5cclxuICAgICAgICByZXR1cm4gKCgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzZXREaXNwbGF5TW92aWUgPSB0aXRsZSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoKHRpdGxlKVxyXG4gICAgICAgIHNldERpc3BsYXkoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogd3JhcCB9ID0gd3JhcHBlclJlZlxyXG4gICAgICAgIGlmICh3cmFwICYmICF3cmFwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgc2V0RGlzcGxheShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1zZWFyY2gnKS52YWx1ZVxyXG4gICAgICAgIGxldCB0YXJnZXRNb3ZpZVxyXG4gICAgICAgIHN0YXRlLm1vdmllcy5tYXAoKG1vdmllRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobW92aWVEYXRhLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kJylcclxuICAgICAgICAgICAgICAgIHRhcmdldE1vdmllID0gbW92aWVEYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldE1vdmllKVxyXG4gICAgICAgIHNldE1vdmllKHRhcmdldE1vdmllKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpXHJcbiAgICAgICAgY29uc29sZS5sb2cobW92aWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXt3cmFwcGVyUmVmfT5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGluZyB0ZXh0PVwiTG9hZGluZyBkYXRhYmFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RpdGxlLXNlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlzcGxheSghZGlzcGxheSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB0byBzZWFyY2ggbW92aWVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAge3NlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IE1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7bW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXttb3ZpZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXJVUkw9e21vdmllLnBvc3RlclVSTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e21vdmllLnJ1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuZmlsdGVyKCh0aXRsZSkgPT4gdGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA+IC0xKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uJyBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXREaXNwbGF5TW92aWUodmFsdWUpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFGaWxtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IFZzY01lZ2FwaG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYydcclxuaW1wb3J0IHsgY29udmVydElkIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICcuL1N0YXJSYXRpbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUNhcmQoeyBpZCwgdGl0bGUsIHllYXIsIHJ1bm5pbmdUaW1lLCB1c2VyUmF0aW5ncyB9KSB7XHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gUmVhY3QudXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcG9zdGVyVVJMLCBzZXRQb3N0ZXJVUkxdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT10dCR7aWR9JmFwaWtleT0yYjNhMzM1ZGApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0ZXJVUkwoZGF0YS5Qb3N0ZXIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgLy9JcyB0aGVyZSBhIHdheSB0byBtYWtlIHN1cmUgZHVwbGljYXRlIG9iamVjdHMgd2VyZSBuZXZlciBhZGRlZCBpbiB0aGUgZmlyc3QgcGxhY2U/XHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcodmFsKVxyXG4gICAgICAgIHNldERpc2FibGVkKHRydWUpXHJcbiAgICAgICAgc3VibWl0UmF0aW5nKGlkLCB2YWwpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlclJhdGluZ3MpXHJcbiAgICB9XHJcbiAgICAvLyBob3cgZG8gSSB1cGRhdGUgaWYgdGhlIHJhdGluZyBpcyBmb3VuZCBhbmQgYWRkIGEgbmV3IHJhdGluZyBpZiBub3Q/XHJcbiAgICBjb25zdCBzdWJtaXRSYXRpbmcgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBkdXBsaWNhdGVSYXRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHVzZXJSYXRpbmdzLmZvckVhY2goKG1hcFJhdGluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwUmF0aW5nLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgbWFwUmF0aW5nLnJhdGluZyA9IHZhbFxyXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlUmF0aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJSYXRpbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghZHVwbGljYXRlUmF0aW5nKSB7XHJcbiAgICAgICAgICAgIHVzZXJSYXRpbmdzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiB2YWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVzZXJSYXRpbmdzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCBiZy1saWdodCBtZWRpdW0tdGV4dCd9PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7Y29udmVydElkKGlkKX0vYH0+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7cG9zdGVyVVJMICYmIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3RlclVSTH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Bwb3N0ZXIgZm9yICR7dGl0bGV9YH1cclxuICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyBzaXplPXsyNH0gY2xhc3NOYW1lPSd2c2NpLW1lZ2EnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBkaXJlY3Rvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eycgJ317eWVhcn17JyAgICd9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLmZsb29yKHJ1bm5pbmdUaW1lIC8gNjApfWhyIHtydW5uaW5nVGltZSAlIDYwfW1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IG9uUmF0aW5nPXtyYXRpbmdDbGlja30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhyYXRpbmcgIT09IDApICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICB7cmF0aW5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHBvc3RlclVSTDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJ1bm5pbmdUaW1lOiBQcm9wVHlwZXMubnVtYmVyXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgIHtzdGFyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAge2hvdmVyVmFsdWUgIT09IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICA8Yj57aG92ZXJWYWx1ZX08L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxuICAgIC8vZmlsbGVkIHZzIHVuZmlsbGVkIHdpdGhpbiBvYmo/XHJcbn1cclxuXHJcblN0YXJSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgICBmaWxsZWQ6ICcjZjVlYjNiJyxcclxuICAgICAgICB1bmZpbGxlZDogXCIjRENEQ0RDXCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==