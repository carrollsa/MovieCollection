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
/* harmony import */ var _hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useKeyPress */ "./app/hooks/useKeyPress.js");
/* harmony import */ var _SearchCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchCard */ "./app/components/SearchCard.js");
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
  (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_6__.default)('Escape', function () {
    return reset();
  });

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
    if (e.key === 'Enter' && search.length !== 0) {
      searchMovie();
    } else if (state.movieOptions.length === 0) {
      return;
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
  })), state.display && state.movieOptions.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "top5"
  }, "No results found. Please try again!"), state.display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  })), selectedMovie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchCard__WEBPACK_IMPORTED_MODULE_7__.default, {
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

/***/ "./app/hooks/useKeyPress.js":
/*!**********************************!*\
  !*** ./app/hooks/useKeyPress.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useKeyPress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function useKeyPress(key, action) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    function onKeyUp(e) {
      if (e.key === key) {
        action();
      }
    }

    window.addEventListener('keyup', onKeyUp);
    return function () {
      return window.removeEventListener('keyup', onKeyUp);
    };
  }, []);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1BlcmZvcm1hbmNlV2FybmluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQ2FyZC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvU3RhclJhdGluZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2hvb2tzL3VzZUtleVByZXNzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbWF0aC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidGhlbWUiLCJSZWFjdCIsIlRoZW1lQ29udGV4dCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwic2VsZWN0ZWRNb3ZpZSIsInNldFNlbGVjdGVkTW92aWUiLCJvcHRpb25JbmRleCIsInNldE9wdGlvbkluZGV4IiwiaW5wdXRSZWYiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZU9wdGlvbnMiLCJkaXNwbGF5IiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJkaXNwYXRjaCIsImN1cnJlbnQiLCJmb2N1cyIsInVzZUtleVByZXNzIiwicmVzZXQiLCJmZXRjaFBvc3RlckRldGFpbHMiLCJpZCIsImZldGNoTW92aWVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlIiwidHlwZSIsInNlYXJjaE1vdmllIiwiZmV0Y2hNb3ZpZUJ5VGl0bGUiLCJhY3Rpb24iLCJtZXNzYWdlIiwidXBkYXRlU2VsZWN0aW9uIiwibW92aWUiLCJ0aXRsZSIsImhhbmRsZUtleURvd25TZWFyY2giLCJrZXkiLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluYWxJbmRleCIsImhhbmRsZUtleURvd25PcHRpb24iLCJuZXdJbmRleCIsInVuZGVmaW5lZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXAiLCJpbmRleCIsIk1vdmllT3B0aW9uIiwieWVhciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJQZXJmb3JtYW5jZVdhcm5pbmciLCJ0ZXh0IiwiU2VhcmNoQ2FyZCIsInNldEFkZGVkUG9zdGVycyIsInJhdGluZyIsInNldFJhdGluZyIsInN1Ym1pdEJ1dHRvblRleHQiLCJzZXRTdWJtaXRCdXR0b25UZXh0IiwicmF0aW5nQ2xpY2siLCJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJwb3N0UmF0aW5nIiwiY29uc29sZSIsIndhcm4iLCJUaXRsZSIsIlBvc3RlciIsIkRpcmVjdG9yIiwiWWVhciIsInBhcnNlSW50IiwiUnVudGltZSIsImNvbnZlcnRSdW5uaW5nVGltZSIsIlN0YXJSYXRpbmciLCJjb3VudCIsImNvbG9yIiwib25SYXRpbmciLCJob3ZlclZhbHVlIiwic2V0SG92ZXJWYWx1ZSIsImdldENvbG9yIiwiZmlsbGVkIiwidW5maWxsZWQiLCJzdGFyUmF0aW5nIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJvbktleVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibWlucyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFT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OztBQ3BEQTtBQUVlLFNBQVNuRSxXQUFULENBQXFCaUIsR0FBckIsRUFBMEJOLE1BQTFCLEVBQWtDO0FBQzdDL0IsOENBQUEsQ0FBZ0IsWUFBTTtBQUNsQixhQUFTK0YsT0FBVCxDQUFpQnBFLENBQWpCLEVBQW9CO0FBQ2hCLFVBQUlBLENBQUMsQ0FBQ1UsR0FBRixLQUFVQSxHQUFkLEVBQW1CO0FBQ2ZOLGNBQU07QUFDVDtBQUNKOztBQUNEaUUsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0YsT0FBakM7QUFDQSxXQUFPO0FBQUEsYUFBTUMsTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ0gsT0FBcEMsQ0FBTjtBQUFBLEtBQVA7QUFDSCxHQVJELEVBUUcsRUFSSDtBQVNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFFTyxTQUFTSSxTQUFULENBQW9CNUUsRUFBcEIsRUFBd0I7QUFDM0IsTUFBSTZFLFdBQVcsR0FBRzdFLEVBQUUsQ0FBQzhFLFFBQUgsRUFBbEI7O0FBQ0EsU0FBT0QsV0FBVyxDQUFDOUQsTUFBWixHQUFxQixDQUE1QixFQUErQjtBQUMzQjhELGVBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNIOztBQUNELFNBQVFBLFdBQVI7QUFDSDtBQUVNLFNBQVN0QixrQkFBVCxDQUE2QndCLElBQTdCLEVBQW1DO0FBQ3RDLE1BQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2IsV0FBTyxLQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlBLElBQUksR0FBRyxFQUFYLEVBQWU7QUFDbEIsV0FBT0EsSUFBSSxHQUFHLEtBQWQ7QUFDSCxHQUZNLE1BRUE7QUFDSCxxQkFBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLElBQUksR0FBRyxFQUFsQixDQUFWLGdCQUFxQ0EsSUFBSSxHQUFHLEVBQTVDO0FBQ0g7QUFDSixDIiwiZmlsZSI6ImFwcF9jb21wb25lbnRzX0hvbWVfanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcclxuaW1wb3J0IFBlcmZvcm1hbmNlV2FybmluZyBmcm9tICcuL1BlcmZvcm1hbmNlV2FybmluZydcclxuaW1wb3J0IE1vdmllT3B0aW9uIGZyb20gJy4vTW92aWVPcHRpb24nXHJcbmltcG9ydCB7IGZldGNoTW92aWVEZXRhaWxzLCBmZXRjaE1vdmllQnlUaXRsZSB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgdXNlS2V5UHJlc3MgZnJvbSAnLi4vaG9va3MvdXNlS2V5UHJlc3MnXHJcbmltcG9ydCBTZWFyY2hDYXJkIGZyb20gJy4vU2VhcmNoQ2FyZCdcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtzZWxlY3RlZE1vdmllLCBzZXRTZWxlY3RlZE1vdmllXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbb3B0aW9uSW5kZXgsIHNldE9wdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVPcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0sIFtzdGF0ZS5tb3ZpZU9wdGlvbnNdKVxyXG5cclxuICAgIHVzZUtleVByZXNzKCdFc2NhcGUnLCAoKSA9PiByZXNldCgpKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUG9zdGVyRGV0YWlscyA9IChpZCkgPT4ge1xyXG4gICAgICAgIGZldGNoTW92aWVEZXRhaWxzKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2VsZWN0ZWRNb3ZpZShkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaE1vdmllID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2ZldGNoJyB9KVxyXG4gICAgICAgIGZldGNoTW92aWVCeVRpdGxlKHNlYXJjaClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCBlcnJvciB9KSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZU9wdGlvbnM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZU9wdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbih7IG1vdmllIH0pIHtcclxuICAgICAgICBzZXRTZWFyY2gobW92aWUudGl0bGUpXHJcbiAgICAgICAgc3RhdGUuZGlzcGxheSA9IGZhbHNlXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChtb3ZpZS5pZClcclxuICAgICAgICBmZXRjaFBvc3RlckRldGFpbHMobW92aWUuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93blNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIHNlYXJjaC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgc2VhcmNoTW92aWUoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9uMCcpLmZvY3VzKClcclxuICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoMClcclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmFsSW5kZXggPSBzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3B0aW9uJHtmaW5hbEluZGV4fWApLmZvY3VzKClcclxuICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgoZmluYWxJbmRleClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93bk9wdGlvbiA9IChlLCBtb3ZpZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24obW92aWUpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4XHJcbiAgICAgICAgICAgIG9wdGlvbkluZGV4ID09PSBzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgPyAobmV3SW5kZXggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb24wJykuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleCgwKSlcclxuICAgICAgICAgICAgICAgIDogKG5ld0luZGV4ID0gb3B0aW9uSW5kZXggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvcHRpb24ke25ld0luZGV4fWApLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uSW5kZXgobmV3SW5kZXgpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICBvcHRpb25JbmRleCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG9wdGlvbiR7c3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCAtIDF9YCkuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleChzdGF0ZS5tb3ZpZU9wdGlvbnMubGVuZ3RoIC0gMSkpXHJcbiAgICAgICAgICAgICAgICA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3B0aW9uJHtvcHRpb25JbmRleCAtIDF9YCkuZm9jdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcHRpb25JbmRleCgob3B0aW9uSW5kZXgpID0+IG9wdGlvbkluZGV4IC09IDEpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcgfSlcclxuICAgICAgICBzZXRTZWxlY3RlZElkKHVuZGVmaW5lZClcclxuICAgICAgICBzZXRTZWxlY3RlZE1vdmllKG51bGwpXHJcbiAgICAgICAgc2V0U2VhcmNoKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0aXRsZS1zZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVPcHRpb25zLmxlbmd0aCA+IDUwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmZvcm1hbmNlV2FybmluZyB0ZXh0PSdPdmVyIDUwMCByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHNlYXJjaCBvciByaXNrIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uLicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5kaXNwbGF5ICYmIHN0YXRlLm1vdmllT3B0aW9ucy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlc3VsdHMgZm91bmQuIFBsZWFzZSB0cnkgYWdhaW4hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuZGlzcGxheSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3A1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLm1vdmllT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeyB0aXRsZSB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID4gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChtb3ZpZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlU2VsZWN0aW9uKHsgbW92aWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J29wdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgb3B0aW9uJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9JzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duT3B0aW9uKGUsIHsgbW92aWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZU9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllPXttb3ZpZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGVkSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllPXtzZWxlY3RlZE1vdmllfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRvcDUgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmZ1bmN0aW9uIE1vdmllT3B0aW9uKHsgbW92aWUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57bW92aWUudGl0bGV9IC0ge21vdmllLnllYXJ9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Nb3ZpZU9wdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllT3B0aW9uXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUV4Y2xhbWF0aW9uVHJpYW5nbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcmZvcm1hbmNlV2FybmluZyAoeyB0ZXh0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dhcm5pbmcgY2VudGVyLXRleHQnPlxyXG4gICAgICAgICAgICA8RmFFeGNsYW1hdGlvblRyaWFuZ2xlIGNvbG9yPSdyZWQnIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgeyBGYUNsb2NrLCBGYUZpbG0sIEZhQ2hlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgVnNjTWVnYXBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xyXG5pbXBvcnQgeyBjb252ZXJ0UnVubmluZ1RpbWUgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuaW1wb3J0IHsgcG9zdFJhdGluZyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQ2FyZCh7IGlkLCBtb3ZpZSwgc2V0QWRkZWRQb3N0ZXJzIH0pIHtcclxuICAgIGNvbnN0IHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcblxyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbc3VibWl0QnV0dG9uVGV4dCwgc2V0U3VibWl0QnV0dG9uVGV4dF0gPSBSZWFjdC51c2VTdGF0ZSgnQWRkIHRvIGNvbGxlY3Rpb24nKVxyXG5cclxuICAgIC8vSXMgdGhlcmUgYSB3YXkgdG8gbWFrZSBzdXJlIGR1cGxpY2F0ZSBvYmplY3RzIHdlcmUgbmV2ZXIgYWRkZWQgaW4gdGhlIGZpcnN0IHBsYWNlP1xyXG4gICAgY29uc3QgcmF0aW5nQ2xpY2sgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgc2V0UmF0aW5nKHZhbClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgcG9zdFJhdGluZyhpZCwgcmF0aW5nKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBzZXRTdWJtaXRCdXR0b25UZXh0KDxGYUNoZWNrIGNvbG9yPSdncmVlbicgLz4pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIHBvc3QgcmF0aW5nJyksIFxyXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0QnV0dG9uVGV4dChcIuKdjFwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1wcmV2aWV3IGJnLWxpZ2h0IG1lZGl1bS10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2hlYWRlci1zbSBjZW50ZXItdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJyBocmVmPXtgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQke2lkfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIiA+e21vdmllLlRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1wcmV2aWV3LWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZS5Qb3N0ZXIgJiYgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttb3ZpZS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBvc3RlciBmb3IgJHttb3ZpZS5UaXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0IGZsZXgtY2VudGVyIGNvbHVtbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5EaXJlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWc2NNZWdhcGhvbmUgY29sb3I9J3JnYigxMTQsMzQsMTk5KScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW92aWUuRGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5ZZWFyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQobW92aWUuWWVhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3ZpZS5SdW50aW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShwYXJzZUludChtb3ZpZS5SdW50aW1lKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jZW50ZXIgY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17cmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3JhdGluZ0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhyYXRpbmcgIT09IDApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRvcDE1ICR7dGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodC1idG4nIDogJ2RhcmstYnRuJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdBZGQgdG8gbXkgY29sbGVjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNlYXJjaENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclJhdGluZyh7IGNvdW50ID0gMTAsIHJhdGluZyA9IDAsIGNvbG9yLCBvblJhdGluZyB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJWYWx1ZSwgc2V0SG92ZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChob3ZlclZhbHVlID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWRcclxuICAgICAgICB9IGVsc2UgaWYgKCFob3ZlclZhbHVlICYmIHJhdGluZyA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci51bmZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFyUmF0aW5nID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KGNvdW50KVxyXG4gICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiBpICsgMSlcclxuICAgICAgICAgICAgLm1hcChpbmRleCA9PlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYS1zdGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci51bmZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJhdGluZyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGdldENvbG9yKGluZGV4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlclZhbHVlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlclZhbHVlKDApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW2NvdW50LCByYXRpbmcsIGhvdmVyVmFsdWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhclJhdGluZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJhdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5TdGFyUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZmlsbGVkOiAnI2Y1ZWIzYicsXHJcbiAgICAgICAgdW5maWxsZWQ6IFwiI0RDRENEQ1wiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VLZXlQcmVzcyhrZXksIGFjdGlvbikge1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBvbktleVVwKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25LZXlVcCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uS2V5VXApO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9