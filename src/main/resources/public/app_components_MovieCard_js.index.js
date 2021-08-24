(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_MovieCard_js"],{

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
/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/theme */ "./app/contexts/theme.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./app/components/Loading.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Details */ "./app/components/Details.js");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
/* harmony import */ var _hooks_useHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useHover */ "./app/hooks/useHover.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      director = _ref.director,
      _ref$collectionView = _ref.collectionView,
      collectionView = _ref$collectionView === void 0 ? false : _ref$collectionView,
      userRating = _ref.userRating;
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts_theme__WEBPACK_IMPORTED_MODULE_1__.default);

  var _useHover = (0,_hooks_useHover__WEBPACK_IMPORTED_MODULE_8__.default)(),
      _useHover2 = _slicedToArray(_useHover, 2),
      hovering = _useHover2[0],
      attrs = _useHover2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showExtendedInfo = _React$useState4[0],
      setShowExtendedInfo = _React$useState4[1];

  var submitButtonText = react__WEBPACK_IMPORTED_MODULE_0__.useRef('Add to collection');

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movieDetails: null,
    loading: false,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  function fetchReducer(state, action) {
    switch (action.type) {
      case 'fetch':
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });

      case 'success':
        return {
          movieDetails: action.data,
          loading: false,
          error: null
        };

      case 'error':
        return _objectSpread(_objectSpread({}, state), {}, {
          error: action.data.error,
          loading: false
        });
    }
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_2__.fetchMovieDetails)(id).then(function (data) {
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
  }, []); //Is there a way to make sure duplicate objects were never added in the first place?

  var ratingClick = function ratingClick(val) {
    setRating(val);
  };

  var submitRating = function submitRating() {
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
    fetch(api, requestOptions).then(console.log('success'))["catch"](function (e) {
      return console.log('failure');
    });
    submitButtonText.current = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaCheck, {
      color: "green"
    });
  };

  var toggleExtendedInfo = function toggleExtendedInfo() {
    return setShowExtendedInfo(!showExtendedInfo);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: "card bg-light medium-text",
    onClick: toggleExtendedInfo
  }, attrs), state.loading === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Fetching movie details"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "header-sm center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "link",
    href: "https://www.imdb.com/title/tt".concat(id, "/"),
    target: "_blank"
  }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, collectionView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "center-text bold"
  }, userRating, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaStar, {
    stroke: "black",
    strokeWidth: 20,
    color: "gold"
  })), state.movieDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: state.movieDetails.Poster,
    alt: "poster for ".concat(title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, !collectionView && year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), year), !collectionView && runningTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.convertRunningTime)(runningTime)), !collectionView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_7__.default, {
    rating: rating,
    onRating: ratingClick
  })), rating !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn top5 ".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),
    value: "Add to my collection",
    onClick: submitRating
  }, submitButtonText.current)), collectionView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, showExtendedInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Details__WEBPACK_IMPORTED_MODULE_6__.default, {
    movie: state.movieDetails
  })), hovering && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-center ".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),
    onClick: toggleExtendedInfo
  }, showExtendedInfo === false ? 'Click to expand' : 'Click to collapse')))))));
}
MovieCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  year: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  director: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  runningTime: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Ub29sdGlwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvaG9va3MvdXNlSG92ZXIuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tYXRoLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbW92aWVDbGllbnQuanMiXSwibmFtZXMiOlsiRGV0YWlscyIsIm1vdmllIiwiWWVhciIsIlJ1bnRpbWUiLCJSYXRlZCIsIkdlbnJlIiwiRGlyZWN0b3IiLCJXcml0ZXIiLCJBY3RvcnMiLCJQbG90IiwiQXdhcmRzIiwiUmF0aW5ncyIsIkJveE9mZmljZSIsImZhRmlsbSIsImZhQ2xvY2siLCJjb252ZXJ0UnVubmluZ1RpbWUiLCJwYXJzZUludCIsImZhU3RhciIsImZhVXNlckVkaXQiLCJmYVRoZWF0ZXJNYXNrcyIsImZhUGVuIiwiZmFBd2FyZCIsImZhRG9sbGFyU2lnbiIsIk1vdmllQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicnVubmluZ1RpbWUiLCJkaXJlY3RvciIsImNvbGxlY3Rpb25WaWV3IiwidXNlclJhdGluZyIsInRoZW1lIiwiUmVhY3QiLCJUaGVtZUNvbnRleHQiLCJ1c2VIb3ZlciIsImhvdmVyaW5nIiwiYXR0cnMiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJzaG93RXh0ZW5kZWRJbmZvIiwic2V0U2hvd0V4dGVuZGVkSW5mbyIsInN1Ym1pdEJ1dHRvblRleHQiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZURldGFpbHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJmZXRjaE1vdmllRGV0YWlscyIsInRoZW4iLCJyYXRpbmdDbGljayIsInZhbCIsInN1Ym1pdFJhdGluZyIsImFwaSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW92aWVJZCIsInJhdGluZ1ZhbHVlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwiZSIsImN1cnJlbnQiLCJ0b2dnbGVFeHRlbmRlZEluZm8iLCJQb3N0ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJTdGFyUmF0aW5nIiwiY291bnQiLCJjb2xvciIsIm9uUmF0aW5nIiwiaG92ZXJWYWx1ZSIsInNldEhvdmVyVmFsdWUiLCJnZXRDb2xvciIsImluZGV4IiwiZmlsbGVkIiwidW5maWxsZWQiLCJzdGFyUmF0aW5nIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ0b29sdGlwIiwiYm94U2l6aW5nIiwid2lkdGgiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIlRvb2x0aXAiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJzZXRIb3ZlcmluZyIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImNvbnZlcnRJZCIsImNvbnZlcnRlZElkIiwidG9TdHJpbmciLCJsZW5ndGgiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwicmVzIiwianNvbiIsIndhcm4iLCJtZXNzYWdlIiwiZmV0Y2hSYXRpbmdzIiwiZmV0Y2hNb3Zp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eUQsSUFBUixDQUFhdkQsQ0FBQyxDQUFDd0QsT0FBZjtBQUNBLFVBQU14RCxDQUFOO0FBQ0gsR0FMRSxDQUFQO0FBTUg7QUFFTSxTQUFTMkQsaUJBQVQsQ0FBMkJ0RyxLQUEzQixFQUFrQztBQUNyQyxNQUFNK0IsR0FBRyxHQUFHLGdCQUFaO0FBQ0EsU0FDSVMsS0FBSyxDQUFDVCxHQUFHLEdBQUcsSUFBSXdFLGVBQUosQ0FBb0I7QUFDNUJ2RyxTQUFLLEVBQUVBO0FBRHFCLEdBQXBCLENBQVAsQ0FBTCxDQUdLMkIsSUFITCxDQUdVLFVBQUE2RSxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDUCxJQUFULEVBQUo7QUFBQSxHQUhsQixXQUlXLFVBQUN0RCxDQUFELEVBQU87QUFDVkYsV0FBTyxDQUFDeUQsSUFBUixDQUFhdkQsQ0FBQyxDQUFDd0QsT0FBZjtBQUNBLFVBQU14RCxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBV0gsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19Nb3ZpZUNhcmRfanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIsIGZhVXNlckVkaXQsIGZhVGhlYXRlck1hc2tzLCBmYUF3YXJkLCBmYVBlbiwgZmFDbG9jaywgZmFGaWxtLCBmYURvbGxhclNpZ24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IFZzY01lZ2FwaG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYydcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyh7IG1vdmllIH0pIHtcclxuICAgIGNvbnN0IHsgWWVhciwgUnVudGltZSwgUmF0ZWQsIEdlbnJlLCBEaXJlY3RvciwgV3JpdGVyLFxyXG4gICAgICAgIEFjdG9ycywgUGxvdCwgQXdhcmRzLCBSYXRpbmdzLCBCb3hPZmZpY2UgfSA9IG1vdmllXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgIHtEaXJlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJEaXJlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnNjTWVnYXBob25lIGNvbG9yPSdyZ2IoMTE0LDM0LDE5OSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1llYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUmVsZWFzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbG19IGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UnVudGltZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSdW50aW1lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KFJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QWN0b3JzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlN0YXJyaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9JyMyMUFEQTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtXcml0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiV3JpdHRlbiBieVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJFZGl0fSBjb2xvcj0nIzYwNjA2MCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXcml0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0dlbnJlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkdlbnJlKHMpXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGhlYXRlck1hc2tzfSBjb2xvcj0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0dlbnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtQbG90ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlBsb3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQZW59IGNvbG9yPSdibGFjaycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtQbG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtBd2FyZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQXdhcmRzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXdhcmR9IGNvbG9yPSdibHVlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0F3YXJkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UmF0aW5ncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSYXRpbmdzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHsvKiA8Rm9udEF3ZXNvbWVJY29uIGljb249eyB9IGNvbG9yPVwiXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHtzaG93UmF0aW5ncyhSYXRpbmdzKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L2xpPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0JveE9mZmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJCb3ggb2ZmaWNlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRG9sbGFyU2lnbn0gY29sb3I9JyM4NWJiNjUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Qm94T2ZmaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvdGhlbWUnXHJcbmltcG9ydCB7IEZhQ2xvY2ssIEZhRmlsbSwgRmFTdGFyLCBGYUNoZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IGZldGNoTW92aWVEZXRhaWxzIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCB7IGNvbnZlcnRSdW5uaW5nVGltZSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4uL2hvb2tzL3VzZUhvdmVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVDYXJkKHsgaWQsIHRpdGxlLCB5ZWFyLCBydW5uaW5nVGltZSwgZGlyZWN0b3IsIGNvbGxlY3Rpb25WaWV3ID0gZmFsc2UsIHVzZXJSYXRpbmcgfSkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbaG92ZXJpbmcsIGF0dHJzXSA9IHVzZUhvdmVyKClcclxuICAgIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3Nob3dFeHRlbmRlZEluZm8sIHNldFNob3dFeHRlbmRlZEluZm9dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uVGV4dCA9IFJlYWN0LnVzZVJlZignQWRkIHRvIGNvbGxlY3Rpb24nKVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZURldGFpbHM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5kYXRhLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PlxyXG4gICAgICAgIGZldGNoTW92aWVEZXRhaWxzKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3IgfSkpXHJcbiAgICAgICAgLCBbXSlcclxuXHJcbiAgICAvL0lzIHRoZXJlIGEgd2F5IHRvIG1ha2Ugc3VyZSBkdXBsaWNhdGUgb2JqZWN0cyB3ZXJlIG5ldmVyIGFkZGVkIGluIHRoZSBmaXJzdCBwbGFjZT9cclxuICAgIGNvbnN0IHJhdGluZ0NsaWNrID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIHNldFJhdGluZyh2YWwpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UmF0aW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaSA9ICgnYXBpL3YxL3JhdGluZ3MnKVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG1vdmllSWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nVmFsdWU6IHJhdGluZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaChhcGksIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZygnc3VjY2VzcycpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCdmYWlsdXJlJykpXHJcbiAgICAgICAgc3VibWl0QnV0dG9uVGV4dC5jdXJyZW50ID0gPEZhQ2hlY2sgY29sb3I9J2dyZWVuJyAvPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUV4dGVuZGVkSW5mbyA9ICgpID0+IHNldFNob3dFeHRlbmRlZEluZm8oIXNob3dFeHRlbmRlZEluZm8pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGJnLWxpZ2h0IG1lZGl1bS10ZXh0JyBvbkNsaWNrPXt0b2dnbGVFeHRlbmRlZEluZm99IHsuLi5hdHRyc30+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubG9hZGluZyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHRleHQ9J0ZldGNoaW5nIG1vdmllIGRldGFpbHMnIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10aXRsZS1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2hlYWRlci1zbSBjZW50ZXItdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluaycgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0JHtpZH0vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgPnt0aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbGxlY3Rpb25WaWV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2NlbnRlci10ZXh0IGJvbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJSYXRpbmd9IDxGYVN0YXIgc3Ryb2tlPSdibGFjaycgc3Ryb2tlV2lkdGg9ezIwfSBjb2xvcj1cImdvbGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVEZXRhaWxzICYmIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtb3ZpZS1wb3N0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3RhdGUubW92aWVEZXRhaWxzLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke3RpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWNvbGxlY3Rpb25WaWV3ICYmIHllYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGaWxtIGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWNvbGxlY3Rpb25WaWV3ICYmIHJ1bm5pbmdUaW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShydW5uaW5nVGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshY29sbGVjdGlvblZpZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtyYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJhdGluZz17cmF0aW5nQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJhdGluZyAhPT0gMCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIHRvcDUgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nQWRkIHRvIG15IGNvbGxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXRCdXR0b25UZXh0LmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uVmlldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXh0ZW5kZWRJbmZvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxzIG1vdmllPXtzdGF0ZS5tb3ZpZURldGFpbHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtob3ZlcmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1jZW50ZXIgJHt0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0LWJ0bicgOiAnZGFyay1idG4nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRXh0ZW5kZWRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXh0ZW5kZWRJbmZvID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdDbGljayB0byBleHBhbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ0NsaWNrIHRvIGNvbGxhcHNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB5ZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZGlyZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBydW5uaW5nVGltZTogUHJvcFR5cGVzLm51bWJlclxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyUmF0aW5nKHsgY291bnQgPSAxMCwgcmF0aW5nID0gMCwgY29sb3IsIG9uUmF0aW5nIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlclZhbHVlLCBzZXRIb3ZlclZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSBpbmRleCA9PiB7XHJcbiAgICAgICAgaWYgKGhvdmVyVmFsdWUgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIWhvdmVyVmFsdWUgJiYgcmF0aW5nID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLnVuZmlsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJSYXRpbmcgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gQXJyYXkoY291bnQpXHJcbiAgICAgICAgICAgIC5maWxsKDApXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IGkgKyAxKVxyXG4gICAgICAgICAgICAubWFwKGluZGV4ID0+XHJcbiAgICAgICAgICAgICAgICA8RmFTdGFyXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhLXN0YXInXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yLnVuZmlsbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmF0aW5nKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZ2V0Q29sb3IoaW5kZXgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldEhvdmVyVmFsdWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldEhvdmVyVmFsdWUoMCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9LCBbY291bnQsIHJhdGluZywgaG92ZXJWYWx1ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFyLXJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICB7c3RhclJhdGluZ31cclxuICAgICAgICAgICAgICAgIHtob3ZlclZhbHVlICE9PSAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgPGI+e2hvdmVyVmFsdWV9PC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU3RhclJhdGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uUmF0aW5nOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGNvbG9yOiBQcm9wVHlwZXMub2JqZWN0XHJcbiAgICAvL2ZpbGxlZCB2cyB1bmZpbGxlZCB3aXRoaW4gb2JqP1xyXG59XHJcblxyXG5TdGFyUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZmlsbGVkOiAnI2Y1ZWIzYicsXHJcbiAgICAgICAgdW5maWxsZWQ6IFwiI0RDRENEQ1wiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4uL2hvb2tzL3VzZUhvdmVyJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcclxuICAgICAgICBib3R0b206ICcxMDAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnLTgwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaHNsYSgwLCAwJSwgMjAlLCAwLjkpJyxcclxuICAgICAgICBwYWRkaW5nOiAnN3B4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sdGlwKHsgdGV4dCwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBhdHRyc10gPSB1c2VIb3ZlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfSB7Li4uYXR0cnN9PlxyXG4gICAgICAgICAgICB7aG92ZXJpbmcgPT09IHRydWUgJiYgPGRpdiBzdHlsZT17c3R5bGVzLnRvb2x0aXB9Pnt0ZXh0fTwvZGl2Pn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvdmVyKCkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlT3ZlciA9ICgpID0+IHNldEhvdmVyaW5nKHRydWUpXHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gKCkgPT4gc2V0SG92ZXJpbmcoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIFtob3ZlcmluZywge1xyXG4gICAgICAgIG9uTW91c2VPdmVyLFxyXG4gICAgICAgIG9uTW91c2VPdXRcclxuICAgIH1dXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SWQgKGlkKSB7XHJcbiAgICBsZXQgY29udmVydGVkSWQgPSBpZC50b1N0cmluZygpXHJcbiAgICB3aGlsZSAoY29udmVydGVkSWQubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGNvbnZlcnRlZElkID0gJzAnICsgY29udmVydGVkSWRcclxuICAgIH1cclxuICAgIHJldHVybiAgY29udmVydGVkSWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRSdW5uaW5nVGltZSAobWlucykge1xyXG4gICAgaWYgKG1pbnMgPT09IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuICcxaHInO1xyXG4gICAgfSBlbHNlIGlmIChtaW5zIDwgNjApIHtcclxuICAgICAgICByZXR1cm4gbWlucyArICdtaW4nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKG1pbnMgLyA2MCl9aHIgJHttaW5zICUgNjB9bWluYFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVEZXRhaWxzKGlkKSB7XHJcbiAgICAvL0Fja25vd2xlZGdlZCB0aGlzIGlzIG5vIGdvb2QsIGJ1dCBpdCdzIGEgZnJlZSBzZXJ2aWNlIGZvciB3aGljaCBJIGNhbiBnZXQgYW5vdGhlciBBUEkga2V5XHJcbiAgICBjb25zdCBhcGkgPSBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT10dCR7aWR9JmFwaWtleT0yYjNhMzM1ZGBcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJhdGluZ3MoKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL3JhdGluZ3NgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG4vL05PVCBGSU5JU0hFRFxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUZyb21EQihpZCkge1xyXG4gICAgY29uc3QgYXBpID0gYGFwaS92MS9tb3ZpZXNgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUJ5VGl0bGUodGl0bGUpIHtcclxuICAgIGNvbnN0IGFwaSA9ICdhcGkvdjEvbW92aWVzPydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICAgICAgfSlcclxuICAgIClcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9