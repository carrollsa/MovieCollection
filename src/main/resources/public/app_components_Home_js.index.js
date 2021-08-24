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
/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ "./app/contexts/theme.js");
/* harmony import */ var _PerformanceWarning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerformanceWarning */ "./app/components/PerformanceWarning.js");
/* harmony import */ var _MovieOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieOption */ "./app/components/MovieOption.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchCard */ "./app/components/SearchCard.js");
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
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__.default);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      search = _React$useState2[0],
      setSearch = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedId = _React$useState4[0],
      setSelectedId = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedMovie = _React$useState6[0],
      setSelectedMovie = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      optionIndex = _React$useState8[0],
      setOptionIndex = _React$useState8[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movieOptions: [],
    display: false,
    loading: false,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    inputRef.current.focus();
  }, [state.movieOptions]);

  var fetchPosterDetails = function fetchPosterDetails(id) {
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_5__.fetchMovieDetails)(id).then(function (data) {
      return setSelectedMovie(data);
    })["catch"](function (e) {
      return dispatch({
        type: 'error',
        error: error
      });
    });
  };

  var searchMovie = function searchMovie() {
    dispatch({
      type: 'fetch'
    });
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_5__.fetchMovieByTitle)(search).then(function (data) {
      return dispatch({
        type: 'success',
        data: data
      });
    })["catch"](function (error) {
      return dispatch({
        type: 'error',
        error: error
      });
    });
  };

  function fetchReducer(state, action) {
    switch (action.type) {
      case 'fetch':
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });

      case 'success':
        return _objectSpread(_objectSpread({}, state), {}, {
          movieOptions: action.data,
          loading: false,
          display: true,
          error: null
        });

      case 'error':
        return _objectSpread(_objectSpread({}, state), {}, {
          error: action.error.message,
          loading: false
        });

      case 'reset':
        return {
          movieOptions: [],
          display: false,
          loading: false,
          error: null
        };
    }
  }

  function updateSelection(_ref) {
    var movie = _ref.movie;
    setSearch(movie.title);
    state.display = false;
    setSelectedId(movie.id);
    fetchPosterDetails(movie.id);
  }

  var handleKeyDownSearch = function handleKeyDownSearch(e) {
    if (e.key === 'Enter') {
      searchMovie();
    } else if (e.key === 'ArrowDown') {
      document.getElementById('option0').focus();
      setOptionIndex(0);
    } else if (e.key === 'ArrowUp') {
      var finalIndex = state.movieOptions.length - 1;
      document.getElementById("option".concat(finalIndex)).focus();
      setOptionIndex(finalIndex);
    }
  };

  var handleKeyDownOption = function handleKeyDownOption(e, movie) {
    if (e.key === 'Enter') {
      updateSelection(movie);
    } else if (e.key === 'ArrowDown') {
      var newIndex;
      optionIndex === state.movieOptions.length - 1 ? (newIndex = 0, document.getElementById('option0').focus(), setOptionIndex(0)) : (newIndex = optionIndex + 1, document.getElementById("option".concat(newIndex)).focus(), setOptionIndex(newIndex));
    } else if (e.key === 'ArrowUp') {
      optionIndex === 0 ? (document.getElementById("option".concat(state.movieOptions.length - 1)).focus(), setOptionIndex(state.movieOptions.length - 1)) : (document.getElementById("option".concat(optionIndex - 1)).focus(), setOptionIndex(function (optionIndex) {
        return optionIndex -= 1;
      }));
    }
  };

  var reset = function reset() {
    dispatch({
      type: 'reset'
    });
    setSelectedId(undefined);
    setSelectedMovie(null);
    setSearch('');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "searchbox",
    id: "title-search",
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    },
    placeholder: "Title",
    value: search,
    ref: inputRef,
    autoComplete: "off",
    onKeyDown: handleKeyDownSearch
  }), state.movieOptions.length > 500 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PerformanceWarning__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Over 500 results. Please refine search or risk performance degradation."
  })), state.display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "top5"
  }, state.movieOptions.filter(function (_ref2) {
    var title = _ref2.title;
    return title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  }).map(function (movie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index,
      onClick: function onClick() {
        return updateSelection({
          movie: movie
        });
      },
      className: "option",
      id: "option".concat(index),
      tabIndex: "0",
      onKeyDown: function onKeyDown(e) {
        return handleKeyDownOption(e, {
          movie: movie
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieOption__WEBPACK_IMPORTED_MODULE_4__.default, {
      movie: movie
    }));
  })), selectedMovie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchCard__WEBPACK_IMPORTED_MODULE_6__.default, {
    id: selectedId,
    movie: selectedMovie
  }), selectedMovie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn top5 ".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),
    onClick: reset
  }, "Clear")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./app/components/MovieOption.js":
/*!***************************************!*\
  !*** ./app/components/MovieOption.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function MovieOption(_ref) {
  var movie = _ref.movie;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, movie.title, " - ", movie.year));
}

MovieOption.propTypes = {
  movie: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieOption);

/***/ }),

/***/ "./app/components/PerformanceWarning.js":
/*!**********************************************!*\
  !*** ./app/components/PerformanceWarning.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PerformanceWarning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


function PerformanceWarning(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "warning center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaExclamationTriangle, {
    color: "red",
    size: 22
  }), text);
}

/***/ }),

/***/ "./app/components/SearchCard.js":
/*!**************************************!*\
  !*** ./app/components/SearchCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme */ "./app/contexts/theme.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function SearchCard(_ref) {
  var id = _ref.id,
      movie = _ref.movie;
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts_theme__WEBPACK_IMPORTED_MODULE_1__.default);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState('Add to collection'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      submitButtonText = _React$useState4[0],
      setSubmitButtonText = _React$useState4[1]; //Is there a way to make sure duplicate objects were never added in the first place?


  var ratingClick = function ratingClick(val) {
    setRating(val);
  };

  var handleSubmit = function handleSubmit() {
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_5__.postRating)(id, rating)["catch"](function (e) {
      return console.log('failure');
    });
    setSubmitButtonText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck, {
      color: "green"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-preview bg-light medium-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "header-sm center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "link",
    href: "https://www.imdb.com/title/tt".concat(id, "/"),
    target: "_blank"
  }, movie.Title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-preview-body"
  }, movie.Poster && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: movie.Poster,
    alt: "poster for ".concat(movie.Title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list flex-center column"
  }, movie.Director && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscMegaphone, {
    color: "rgb(114,34,199)"
  }), movie.Director), movie.Year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), parseInt(movie.Year)), movie.Runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.convertRunningTime)(parseInt(movie.Runtime)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-center column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_4__.default, {
    rating: rating,
    onRating: ratingClick
  }), rating !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn top15 ".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),
    value: "Add to my collection",
    onClick: handleSubmit
  }, submitButtonText)))));
}
SearchCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  movie: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)
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
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
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
/* harmony export */   "postRating": () => (/* binding */ postRating),
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
function postRating(id, rating) {
  var api = 'api/v1/ratings';
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      movieId: id,
      ratingValue: rating
    })
  };
  return fetch(api, requestOptions)["catch"](function (e) {
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
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1BlcmZvcm1hbmNlV2FybmluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQ2FyZC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU3RhclJhdGluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tb3ZpZUNsaWVudC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidGhlbWUiLCJSZWFjdCIsIlRoZW1lQ29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwic2VsZWN0ZWRNb3ZpZSIsInNldFNlbGVjdGVkTW92aWUiLCJvcHRpb25JbmRleCIsInNldE9wdGlvbkluZGV4IiwiaW5wdXRSZWYiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZU9wdGlvbnMiLCJkaXNwbGF5IiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJmb2N1cyIsImZldGNoUG9zdGVyRGV0YWlscyIsImlkIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJ0aGVuIiwiZGF0YSIsImUiLCJ0eXBlIiwic2VhcmNoTW92aWUiLCJmZXRjaE1vdmllQnlUaXRsZSIsImFjdGlvbiIsIm1lc3NhZ2UiLCJ1cGRhdGVTZWxlY3Rpb24iLCJtb3ZpZSIsInRpdGxlIiwiaGFuZGxlS2V5RG93blNlYXJjaCIsImtleSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaW5hbEluZGV4IiwibGVuZ3RoIiwiaGFuZGxlS2V5RG93bk9wdGlvbiIsIm5ld0luZGV4IiwicmVzZXQiLCJ1bmRlZmluZWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibWFwIiwiaW5kZXgiLCJNb3ZpZU9wdGlvbiIsInllYXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiUGVyZm9ybWFuY2VXYXJuaW5nIiwidGV4dCIsIlNlYXJjaENhcmQiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJzdWJtaXRCdXR0b25UZXh0Iiwic2V0U3VibWl0QnV0dG9uVGV4dCIsInJhdGluZ0NsaWNrIiwidmFsIiwiaGFuZGxlU3VibWl0IiwicG9zdFJhdGluZyIsImNvbnNvbGUiLCJsb2ciLCJUaXRsZSIsIlBvc3RlciIsIkRpcmVjdG9yIiwiWWVhciIsInBhcnNlSW50IiwiUnVudGltZSIsImNvbnZlcnRSdW5uaW5nVGltZSIsIlN0YXJSYXRpbmciLCJjb3VudCIsImNvbG9yIiwib25SYXRpbmciLCJob3ZlclZhbHVlIiwic2V0SG92ZXJWYWx1ZSIsImdldENvbG9yIiwiZmlsbGVkIiwidW5maWxsZWQiLCJzdGFyUmF0aW5nIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibWlucyIsIk1hdGgiLCJmbG9vciIsImFwaSIsImZldGNoIiwicmVzIiwianNvbiIsIndhcm4iLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vdmllSWQiLCJyYXRpbmdWYWx1ZSIsImZldGNoUmF0aW5ncyIsImZldGNoTW92aWVGcm9tREIiLCJVUkxTZWFyY2hQYXJhbXMiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6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dCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcclxuaW1wb3J0IFBlcmZvcm1hbmNlV2FybmluZyBmcm9tICcuL1BlcmZvcm1hbmNlV2FybmluZydcclxuaW1wb3J0IE1vdmllT3B0aW9uIGZyb20gJy4vTW92aWVPcHRpb24nXHJcbmltcG9ydCB7IGZldGNoTW92aWVEZXRhaWxzLCBmZXRjaE1vdmllQnlUaXRsZSB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgU2VhcmNoQ2FyZCBmcm9tICcuL1NlYXJjaENhcmQnXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRNb3ZpZSwgc2V0U2VsZWN0ZWRNb3ZpZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW29wdGlvbkluZGV4LCBzZXRPcHRpb25JbmRleF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vdmllT3B0aW9uczogW10sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9LCBbc3RhdGUubW92aWVPcHRpb25zXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFBvc3RlckRldGFpbHMgPSAoaWQpID0+IHtcclxuICAgICAgICBmZXRjaE1vdmllRGV0YWlscyhpZClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFNlbGVjdGVkTW92aWUoZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCBlcnJvciB9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWFyY2hNb3ZpZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdmZXRjaCcgfSlcclxuICAgICAgICBmZXRjaE1vdmllQnlUaXRsZShzZWFyY2gpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3IgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVPcHRpb25zOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2V0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVPcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24oeyBtb3ZpZSB9KSB7XHJcbiAgICAgICAgc2V0U2VhcmNoKG1vdmllLnRpdGxlKVxyXG4gICAgICAgIHN0YXRlLmRpc3BsYXkgPSBmYWxzZVxyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobW92aWUuaWQpXHJcbiAgICAgICAgZmV0Y2hQb3N0ZXJEZXRhaWxzKG1vdmllLmlkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd25TZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZWFyY2hNb3ZpZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbjAnKS5mb2N1cygpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KDApXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbEluZGV4ID0gc3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG9wdGlvbiR7ZmluYWxJbmRleH1gKS5mb2N1cygpXHJcbiAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KGZpbmFsSW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd25PcHRpb24gPSAoZSwgbW92aWUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKG1vdmllKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleFxyXG4gICAgICAgICAgICBvcHRpb25JbmRleCA9PT0gc3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgID8gKG5ld0luZGV4ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uMCcpLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoMCkpXHJcbiAgICAgICAgICAgICAgICA6IChuZXdJbmRleCA9IG9wdGlvbkluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3B0aW9uJHtuZXdJbmRleH1gKS5mb2N1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KG5ld0luZGV4KSlcclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgb3B0aW9uSW5kZXggPT09IDBcclxuICAgICAgICAgICAgICAgID8gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvcHRpb24ke3N0YXRlLm1vdmllT3B0aW9ucy5sZW5ndGggLSAxfWApLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoc3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCAtIDEpKVxyXG4gICAgICAgICAgICAgICAgOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG9wdGlvbiR7b3B0aW9uSW5kZXggLSAxfWApLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoKG9wdGlvbkluZGV4KSA9PiBvcHRpb25JbmRleCAtPSAxKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncmVzZXQnIH0pXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJZCh1bmRlZmluZWQpXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRNb3ZpZShudWxsKVxyXG4gICAgICAgIHNldFNlYXJjaCgnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoYm94J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ndGl0bGUtc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3duU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm1vdmllT3B0aW9ucy5sZW5ndGggPiA1MDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVyZm9ybWFuY2VXYXJuaW5nIHRleHQ9J092ZXIgNTAwIHJlc3VsdHMuIFBsZWFzZSByZWZpbmUgc2VhcmNoIG9yIHJpc2sgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmRpc3BsYXkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5tb3ZpZU9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgdGl0bGUgfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA+IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGlvbih7IG1vdmllIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YG9wdGlvbiR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PScwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlS2V5RG93bk9wdGlvbihlLCB7bW92aWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllT3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VsZWN0ZWRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92aWU9e3NlbGVjdGVkTW92aWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gdG9wNSAke3RoZW1lID09PSAnZGFyaycgPyAnbGlnaHQtYnRuJyA6ICdkYXJrLWJ0bid9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGVhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZU9wdGlvbih7IG1vdmllIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4+e21vdmllLnRpdGxlfSAtIHttb3ZpZS55ZWFyfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuTW92aWVPcHRpb24ucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZU9wdGlvblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFFeGNsYW1hdGlvblRyaWFuZ2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmb3JtYW5jZVdhcm5pbmcgKHsgdGV4dCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YXJuaW5nIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgPEZhRXhjbGFtYXRpb25UcmlhbmdsZSBjb2xvcj0ncmVkJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFGaWxtLCBGYUNoZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IFZzY01lZ2FwaG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYydcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU3RhclJhdGluZyBmcm9tICcuL1N0YXJSYXRpbmcnXHJcbmltcG9ydCB7IHBvc3RSYXRpbmcgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaENhcmQoeyBpZCwgbW92aWUgfSkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gUmVhY3QudXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdWJtaXRCdXR0b25UZXh0LCBzZXRTdWJtaXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKCdBZGQgdG8gY29sbGVjdGlvbicpXHJcblxyXG4gICAgLy9JcyB0aGVyZSBhIHdheSB0byBtYWtlIHN1cmUgZHVwbGljYXRlIG9iamVjdHMgd2VyZSBuZXZlciBhZGRlZCBpbiB0aGUgZmlyc3QgcGxhY2U/XHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcodmFsKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBwb3N0UmF0aW5nKGlkLCByYXRpbmcpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coJ2ZhaWx1cmUnKSlcclxuICAgICAgICBzZXRTdWJtaXRCdXR0b25UZXh0KDxGYUNoZWNrIGNvbG9yPSdncmVlbicgLz4pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXByZXZpZXcgYmctbGlnaHQgbWVkaXVtLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7aWR9L2B9IHRhcmdldD1cIl9ibGFua1wiID57bW92aWUuVGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXByZXZpZXctYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAge21vdmllLlBvc3RlciAmJiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW92aWUtcG9zdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21vdmllLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke21vdmllLlRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QgZmxleC1jZW50ZXIgY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLkRpcmVjdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5EaXJlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlllYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGaWxtIGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChtb3ZpZS5ZZWFyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlJ1bnRpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KG1vdmllLlJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNlbnRlciBjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtyYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGluZz17cmF0aW5nQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHJhdGluZyAhPT0gMCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gdG9wMTUgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J0FkZCB0byBteSBjb2xsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU2VhcmNoQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyUmF0aW5nKHsgY291bnQgPSAxMCwgcmF0aW5nID0gMCwgY29sb3IsIG9uUmF0aW5nIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlclZhbHVlLCBzZXRIb3ZlclZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSBpbmRleCA9PiB7XHJcbiAgICAgICAgaWYgKGhvdmVyVmFsdWUgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIWhvdmVyVmFsdWUgJiYgcmF0aW5nID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnVuZmlsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJSYXRpbmcgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gQXJyYXkoY291bnQpXHJcbiAgICAgICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IGkgKyAxKVxyXG4gICAgICAgICAgICAubWFwKGluZGV4ID0+XHJcbiAgICAgICAgICAgICAgICA8RmFTdGFyXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhLXN0YXInXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLnVuZmlsbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmF0aW5nKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZ2V0Q29sb3IoaW5kZXgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyVmFsdWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyVmFsdWUoMCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9LCBbY291bnQsIHJhdGluZywgaG92ZXJWYWx1ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rhci1yYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGFyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU3RhclJhdGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uUmF0aW5nOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcblN0YXJSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgICBmaWxsZWQ6ICcjZjVlYjNiJyxcclxuICAgICAgICB1bmZpbGxlZDogXCIjRENEQ0RDXCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZURldGFpbHMoaWQpIHtcclxuICAgIC8vQWNrbm93bGVkZ2VkIHRoaXMgaXMgbm8gZ29vZCwgYnV0IGl0J3MgYSBmcmVlIHNlcnZpY2UgZm9yIHdoaWNoIEkgY2FuIGdldCBhbm90aGVyIEFQSSBrZXlcclxuICAgIGNvbnN0IGFwaSA9IGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPXR0JHtpZH0mYXBpa2V5PTJiM2EzMzVkYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RSYXRpbmcoaWQsIHJhdGluZykge1xyXG4gICAgY29uc3QgYXBpID0gKCdhcGkvdjEvcmF0aW5ncycpXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG1vdmllSWQ6IGlkLFxyXG4gICAgICAgICAgICByYXRpbmdWYWx1ZTogcmF0aW5nXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJhdGluZ3MoKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL3JhdGluZ3NgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUZyb21EQihpZCkge1xyXG4gICAgY29uc3QgYXBpID0gYGFwaS92MS9tb3ZpZXNgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUJ5VGl0bGUodGl0bGUpIHtcclxuICAgIGNvbnN0IGFwaSA9ICdhcGkvdjEvbW92aWVzPydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICAgICAgfSlcclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=