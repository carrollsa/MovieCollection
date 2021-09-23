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
  }), state.movieOptions.length > 50 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PerformanceWarning__WEBPACK_IMPORTED_MODULE_3__.default, {
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
      movie = _ref.movie,
      setAddedPosters = _ref.setAddedPosters;
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
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_5__.postRating)(id, rating).then(function () {
      return setSubmitButtonText( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCheck, {
        color: "green"
      }));
    })["catch"](function (e) {
      console.warn('failed to post rating'), setSubmitButtonText("❌");
    });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1BlcmZvcm1hbmNlV2FybmluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQ2FyZC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU3RhclJhdGluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiXSwibmFtZXMiOlsiSG9tZSIsInRoZW1lIiwiUmVhY3QiLCJUaGVtZUNvbnRleHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInNlbGVjdGVkTW92aWUiLCJzZXRTZWxlY3RlZE1vdmllIiwib3B0aW9uSW5kZXgiLCJzZXRPcHRpb25JbmRleCIsImlucHV0UmVmIiwiZmV0Y2hSZWR1Y2VyIiwibW92aWVPcHRpb25zIiwiZGlzcGxheSIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjdXJyZW50IiwiZm9jdXMiLCJmZXRjaFBvc3RlckRldGFpbHMiLCJpZCIsImZldGNoTW92aWVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlIiwidHlwZSIsInNlYXJjaE1vdmllIiwiZmV0Y2hNb3ZpZUJ5VGl0bGUiLCJhY3Rpb24iLCJtZXNzYWdlIiwidXBkYXRlU2VsZWN0aW9uIiwibW92aWUiLCJ0aXRsZSIsImhhbmRsZUtleURvd25TZWFyY2giLCJrZXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluYWxJbmRleCIsImxlbmd0aCIsImhhbmRsZUtleURvd25PcHRpb24iLCJuZXdJbmRleCIsInJlc2V0IiwidW5kZWZpbmVkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm1hcCIsImluZGV4IiwiTW92aWVPcHRpb24iLCJ5ZWFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsIlBlcmZvcm1hbmNlV2FybmluZyIsInRleHQiLCJTZWFyY2hDYXJkIiwic2V0QWRkZWRQb3N0ZXJzIiwicmF0aW5nIiwic2V0UmF0aW5nIiwic3VibWl0QnV0dG9uVGV4dCIsInNldFN1Ym1pdEJ1dHRvblRleHQiLCJyYXRpbmdDbGljayIsInZhbCIsImhhbmRsZVN1Ym1pdCIsInBvc3RSYXRpbmciLCJjb25zb2xlIiwid2FybiIsIlRpdGxlIiwiUG9zdGVyIiwiRGlyZWN0b3IiLCJZZWFyIiwicGFyc2VJbnQiLCJSdW50aW1lIiwiY29udmVydFJ1bm5pbmdUaW1lIiwiU3RhclJhdGluZyIsImNvdW50IiwiY29sb3IiLCJvblJhdGluZyIsImhvdmVyVmFsdWUiLCJzZXRIb3ZlclZhbHVlIiwiZ2V0Q29sb3IiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImNvbnZlcnRJZCIsImNvbnZlcnRlZElkIiwidG9TdHJpbmciLCJtaW5zIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixNQUFNQyxLQUFLLEdBQUdDLDZDQUFBLENBQWlCQyxvREFBakIsQ0FBZDs7QUFFQSx3QkFBNEJELDJDQUFBLENBQWUsRUFBZixDQUE1QjtBQUFBO0FBQUEsTUFBT0UsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0Es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Z0JBQXFDQSxJQUFJLEdBQUcsRUFBNUM7QUFDSDtBQUNKLEMiLCJmaWxlIjoiYXBwX2NvbXBvbmVudHNfSG9tZV9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgUGVyZm9ybWFuY2VXYXJuaW5nIGZyb20gJy4vUGVyZm9ybWFuY2VXYXJuaW5nJ1xyXG5pbXBvcnQgTW92aWVPcHRpb24gZnJvbSAnLi9Nb3ZpZU9wdGlvbidcclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZURldGFpbHMsIGZldGNoTW92aWVCeVRpdGxlIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCBTZWFyY2hDYXJkIGZyb20gJy4vU2VhcmNoQ2FyZCdcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtzZWxlY3RlZE1vdmllLCBzZXRTZWxlY3RlZE1vdmllXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbb3B0aW9uSW5kZXgsIHNldE9wdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVPcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0sIFtzdGF0ZS5tb3ZpZU9wdGlvbnNdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUG9zdGVyRGV0YWlscyA9IChpZCkgPT4ge1xyXG4gICAgICAgIGZldGNoTW92aWVEZXRhaWxzKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2VsZWN0ZWRNb3ZpZShkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaE1vdmllID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2ZldGNoJyB9KVxyXG4gICAgICAgIGZldGNoTW92aWVCeVRpdGxlKHNlYXJjaClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCBlcnJvciB9KSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZU9wdGlvbnM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZU9wdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbih7IG1vdmllIH0pIHtcclxuICAgICAgICBzZXRTZWFyY2gobW92aWUudGl0bGUpXHJcbiAgICAgICAgc3RhdGUuZGlzcGxheSA9IGZhbHNlXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChtb3ZpZS5pZClcclxuICAgICAgICBmZXRjaFBvc3RlckRldGFpbHMobW92aWUuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93blNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaE1vdmllKClcclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uMCcpLmZvY3VzKClcclxuICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoMClcclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmFsSW5kZXggPSBzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3B0aW9uJHtmaW5hbEluZGV4fWApLmZvY3VzKClcclxuICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoZmluYWxJbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93bk9wdGlvbiA9IChlLCBtb3ZpZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24obW92aWUpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4XHJcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID09PSBzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgPyAobmV3SW5kZXggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb24wJykuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleCgwKSlcclxuICAgICAgICAgICAgICAgIDogKG5ld0luZGV4ID0gb3B0aW9uSW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvcHRpb24ke25ld0luZGV4fWApLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgobmV3SW5kZXgpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICBvcHRpb25JbmRleCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG9wdGlvbiR7c3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCAtIDF9YCkuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleChzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMSkpXHJcbiAgICAgICAgICAgICAgICA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3B0aW9uJHtvcHRpb25JbmRleCAtIDF9YCkuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleCgob3B0aW9uSW5kZXgpID0+IG9wdGlvbkluZGV4IC09IDEpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcgfSlcclxuICAgICAgICBzZXRTZWxlY3RlZElkKHVuZGVmaW5lZClcclxuICAgICAgICBzZXRTZWxlY3RlZE1vdmllKG51bGwpXHJcbiAgICAgICAgc2V0U2VhcmNoKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0aXRsZS1zZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCA+IDUwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZvcm1hbmNlV2FybmluZyB0ZXh0PSdPdmVyIDUwMCByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHNlYXJjaCBvciByaXNrIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uLicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5kaXNwbGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRpdGxlIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVTZWxlY3Rpb24oeyBtb3ZpZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nb3B0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BvcHRpb24ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD0nMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUtleURvd25PcHRpb24oZSwge21vdmllfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZU9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGVkSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllPXtzZWxlY3RlZE1vdmllfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRvcDUgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVPcHRpb24oeyBtb3ZpZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPnttb3ZpZS50aXRsZX0gLSB7bW92aWUueWVhcn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbk1vdmllT3B0aW9uLnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVPcHRpb25cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZhRXhjbGFtYXRpb25UcmlhbmdsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZm9ybWFuY2VXYXJuaW5nICh7IHRleHQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FybmluZyBjZW50ZXItdGV4dCc+XHJcbiAgICAgICAgICAgIDxGYUV4Y2xhbWF0aW9uVHJpYW5nbGUgY29sb3I9J3JlZCcgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvdGhlbWUnXHJcbmltcG9ydCB7IEZhQ2xvY2ssIEZhRmlsbSwgRmFDaGVjayB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBWc2NNZWdhcGhvbmUgfSBmcm9tICdyZWFjdC1pY29ucy92c2MnXHJcbmltcG9ydCB7IGNvbnZlcnRSdW5uaW5nVGltZSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi9TdGFyUmF0aW5nJ1xyXG5pbXBvcnQgeyBwb3N0UmF0aW5nIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hDYXJkKHsgaWQsIG1vdmllLCBzZXRBZGRlZFBvc3RlcnMgfSkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gUmVhY3QudXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtzdWJtaXRCdXR0b25UZXh0LCBzZXRTdWJtaXRCdXR0b25UZXh0XSA9IFJlYWN0LnVzZVN0YXRlKCdBZGQgdG8gY29sbGVjdGlvbicpXHJcblxyXG4gICAgLy9JcyB0aGVyZSBhIHdheSB0byBtYWtlIHN1cmUgZHVwbGljYXRlIG9iamVjdHMgd2VyZSBuZXZlciBhZGRlZCBpbiB0aGUgZmlyc3QgcGxhY2U/XHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBzZXRSYXRpbmcodmFsKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBwb3N0UmF0aW5nKGlkLCByYXRpbmcpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFN1Ym1pdEJ1dHRvblRleHQoPEZhQ2hlY2sgY29sb3I9J2dyZWVuJyAvPikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gcG9zdCByYXRpbmcnKSwgXHJcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXRCdXR0b25UZXh0KFwi4p2MXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXByZXZpZXcgYmctbGlnaHQgbWVkaXVtLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7aWR9L2B9IHRhcmdldD1cIl9ibGFua1wiID57bW92aWUuVGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXByZXZpZXctYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAge21vdmllLlBvc3RlciAmJiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW92aWUtcG9zdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21vdmllLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke21vdmllLlRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QgZmxleC1jZW50ZXIgY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLkRpcmVjdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5EaXJlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlllYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGaWxtIGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludChtb3ZpZS5ZZWFyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlJ1bnRpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KG1vdmllLlJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNlbnRlciBjb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtyYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGluZz17cmF0aW5nQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHJhdGluZyAhPT0gMCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gdG9wMTUgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J0FkZCB0byBteSBjb2xsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0QnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU2VhcmNoQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyUmF0aW5nKHsgY291bnQgPSAxMCwgcmF0aW5nID0gMCwgY29sb3IsIG9uUmF0aW5nIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlclZhbHVlLCBzZXRIb3ZlclZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSBpbmRleCA9PiB7XHJcbiAgICAgICAgaWYgKGhvdmVyVmFsdWUgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIWhvdmVyVmFsdWUgJiYgcmF0aW5nID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnVuZmlsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJSYXRpbmcgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gQXJyYXkoY291bnQpXHJcbiAgICAgICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IGkgKyAxKVxyXG4gICAgICAgICAgICAubWFwKGluZGV4ID0+XHJcbiAgICAgICAgICAgICAgICA8RmFTdGFyXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhLXN0YXInXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLnVuZmlsbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmF0aW5nKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZ2V0Q29sb3IoaW5kZXgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyVmFsdWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyVmFsdWUoMCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9LCBbY291bnQsIHJhdGluZywgaG92ZXJWYWx1ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rhci1yYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGFyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU3RhclJhdGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uUmF0aW5nOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub2JqZWN0XHJcbn1cclxuXHJcblN0YXJSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgICBmaWxsZWQ6ICcjZjVlYjNiJyxcclxuICAgICAgICB1bmZpbGxlZDogXCIjRENEQ0RDXCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9