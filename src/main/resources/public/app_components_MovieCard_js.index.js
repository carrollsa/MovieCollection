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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");




function Details(_ref) {
  var movieDetails = _ref.movieDetails;
  var Rated = movieDetails.Rated,
      Genre = movieDetails.Genre,
      Director = movieDetails.Director,
      Writer = movieDetails.Writer,
      Actors = movieDetails.Actors,
      Plot = movieDetails.Plot,
      Awards = movieDetails.Awards,
      Ratings = movieDetails.Ratings,
      BoxOffice = movieDetails.BoxOffice,
      Production = movieDetails.Production;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,
    color: "#21ADA8"
  }), Actors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUserEdit,
    color: "dark-gray"
  }), Writer)));
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Details */ "./app/components/Details.js");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rating = _React$useState2[0],
      setRating = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      movieDetails = _React$useState4[0],
      setMovieDetails = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showExtendedInfo = _React$useState6[0],
      setShowExtendedInfo = _React$useState6[1];

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movieDetails: null,
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
    } else if (action.type === 'poster success') {
      return {
        movieDetails: action.data,
        loading: false,
        error: null
      };
    } else if (action.type === 'error') {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: 'Fetch failed.',
        loading: false
      });
    }
  } //REFACTOR


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
    console.log(requestOptions);
    fetch(api, requestOptions).then(console.log('success'))["catch"](function (e) {
      return console.log('failure');
    });
  };

  var fetchExtendedInfo = function fetchExtendedInfo() {
    console.log(id);
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_2__.fetchMovieDetails)(id).then(function (data) {
      setMovieDetails(data);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'card bg-light medium-text'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "header-sm center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "link",
    href: "https://www.imdb.com/title/tt".concat(id, "/")
  }, title)), movieDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: movieDetails.Poster,
    alt: "poster for ".concat(title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, director && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscMegaphone, {
    color: "rgb(114,34,199)",
    size: 24,
    className: "vsci-mega"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", director)), year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ' ', year, '   ')), runningTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, Math.floor(runningTime / 60), "hr ", runningTime % 60, "min")), !collectionView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_5__.default, {
    rating: rating,
    onRating: ratingClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, rating !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: submitRating
  }, "Add to my collection"))), collectionView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Rating: ", userRating), !movieDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: fetchExtendedInfo
  }, "More info...")), movieDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Details__WEBPACK_IMPORTED_MODULE_4__.default, {
    movieDetails: movieDetails
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "Less info...")))));
}
MovieCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  year: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  director: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  runningTime: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21vdmllQ2xpZW50LmpzIl0sIm5hbWVzIjpbIkRldGFpbHMiLCJtb3ZpZURldGFpbHMiLCJSYXRlZCIsIkdlbnJlIiwiRGlyZWN0b3IiLCJXcml0ZXIiLCJBY3RvcnMiLCJQbG90IiwiQXdhcmRzIiwiUmF0aW5ncyIsIkJveE9mZmljZSIsIlByb2R1Y3Rpb24iLCJmYVN0YXIiLCJmYVVzZXJFZGl0IiwiTW92aWVDYXJkIiwiaWQiLCJ0aXRsZSIsInllYXIiLCJydW5uaW5nVGltZSIsImRpcmVjdG9yIiwiY29sbGVjdGlvblZpZXciLCJ1c2VyUmF0aW5nIiwiUmVhY3QiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJzZXRNb3ZpZURldGFpbHMiLCJzaG93RXh0ZW5kZWRJbmZvIiwic2V0U2hvd0V4dGVuZGVkSW5mbyIsImZldGNoUmVkdWNlciIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsImZldGNoTW92aWVEZXRhaWxzIiwidGhlbiIsInJhdGluZ0NsaWNrIiwidmFsIiwic3VibWl0UmF0aW5nIiwiYXBpIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb3ZpZUlkIiwicmF0aW5nVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJlIiwiZmV0Y2hFeHRlbmRlZEluZm8iLCJQb3N0ZXIiLCJNYXRoIiwiZmxvb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJTdGFyUmF0aW5nIiwiY291bnQiLCJjb2xvciIsIm9uUmF0aW5nIiwiaG92ZXJWYWx1ZSIsInNldEhvdmVyVmFsdWUiLCJnZXRDb2xvciIsImluZGV4IiwiZmlsbGVkIiwidW5maWxsZWQiLCJzdGFyUmF0aW5nIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJkZWZhdWx0UHJvcHMiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibGVuZ3RoIiwicmVzIiwianNvbiIsIndhcm4iLCJtZXNzYWdlIiwiZmV0Y2hSYXRpbmdzIiwiZmV0Y2hNb3ZpZUZyb21EQiIsImZldGNoTW92aWVCeVRpdGxlIiwiVVJMU2VhcmNoUGFyYW1zIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxPQUFULE9BQW1DO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM5QyxNQUFRQyxLQUFSLEdBQzZERCxZQUQ3RCxDQUFRQyxLQUFSO0FBQUEsTUFBZUMsS0FBZixHQUM2REYsWUFEN0QsQ0FBZUUsS0FBZjtBQUFBLE1BQXNCQyxRQUF0QixHQUM2REgsWUFEN0QsQ0FBc0JHLFFBQXRCO0FBQUEsTUFBZ0NDLE1BQWhDLEdBQzZESixZQUQ3RCxDQUFnQ0ksTUFBaEM7QUFBQSxNQUNJQyxNQURKLEdBQzZETCxZQUQ3RCxDQUNJSyxNQURKO0FBQUEsTUFDWUMsSUFEWixHQUM2RE4sWUFEN0QsQ0FDWU0sSUFEWjtBQUFBLE1BQ2tCQyxNQURsQixHQUM2RFAsWUFEN0QsQ0FDa0JPLE1BRGxCO0FBQUEsTUFDMEJDLE9BRDFCLEdBQzZEUixZQUQ3RCxDQUMwQlEsT0FEMUI7QUFBQSxNQUNtQ0MsU0FEbkMsR0FDNkRULFlBRDdELENBQ21DUyxTQURuQztBQUFBLE1BQzhD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LEVBQU87QUFDVkgsV0FBTyxDQUFDa0MsSUFBUixDQUFhL0IsQ0FBQyxDQUFDZ0MsT0FBZjtBQUNBLFVBQU1oQyxDQUFOO0FBQ0gsR0FMRSxDQUFQO0FBTUg7QUFFTSxTQUFTbUMsaUJBQVQsQ0FBMkJ4RSxLQUEzQixFQUFrQztBQUNyQyxNQUFNeUIsR0FBRyxHQUFHLGdCQUFaO0FBQ0EsU0FDSVcsS0FBSyxDQUFDWCxHQUFHLEdBQUcsSUFBSWdELGVBQUosQ0FBb0I7QUFDNUJ6RSxTQUFLLEVBQUVBO0FBRHFCLEdBQXBCLENBQVAsQ0FBTCxDQUdLcUIsSUFITCxDQUdVLFVBQUFxRCxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDUCxJQUFULEVBQUo7QUFBQSxHQUhsQixXQUlXLFVBQUM5QixDQUFELEVBQU87QUFDVkgsV0FBTyxDQUFDa0MsSUFBUixDQUFhL0IsQ0FBQyxDQUFDZ0MsT0FBZjtBQUNBLFVBQU1oQyxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBV0gsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19Nb3ZpZUNhcmRfanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIsIGZhVXNlckVkaXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUGVuY2lsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbHMoeyBtb3ZpZURldGFpbHMgfSkge1xyXG4gICAgY29uc3QgeyBSYXRlZCwgR2VucmUsIERpcmVjdG9yLCBXcml0ZXIsXHJcbiAgICAgICAgQWN0b3JzLCBQbG90LCBBd2FyZHMsIFJhdGluZ3MsIEJveE9mZmljZSwgUHJvZHVjdGlvbiB9ID0gbW92aWVEZXRhaWxzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9XCIjMjFBREE4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7QWN0b3JzfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlckVkaXR9IGNvbG9yPVwiZGFyay1ncmF5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7V3JpdGVyfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNsb2NrLCBGYUZpbG0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgVnNjTWVnYXBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xyXG5pbXBvcnQgeyBjb252ZXJ0SWQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscydcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi9TdGFyUmF0aW5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVDYXJkKHsgaWQsIHRpdGxlLCB5ZWFyLCBydW5uaW5nVGltZSwgZGlyZWN0b3IsIGNvbGxlY3Rpb25WaWV3ID0gZmFsc2UsIHVzZXJSYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbbW92aWVEZXRhaWxzLCBzZXRNb3ZpZURldGFpbHNdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtzaG93RXh0ZW5kZWRJbmZvLCBzZXRTaG93RXh0ZW5kZWRJbmZvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ2ZldGNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAncG9zdGVyIHN1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpZURldGFpbHM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0ZldGNoIGZhaWxlZC4nLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vUkVGQUNUT1JcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBcclxuICAgICAgICBmZXRjaE1vdmllRGV0YWlscyhpZClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yIH0pKVxyXG4gICAgLCBbXSlcclxuXHJcbiAgICAvL0lzIHRoZXJlIGEgd2F5IHRvIG1ha2Ugc3VyZSBkdXBsaWNhdGUgb2JqZWN0cyB3ZXJlIG5ldmVyIGFkZGVkIGluIHRoZSBmaXJzdCBwbGFjZT9cclxuICAgIGNvbnN0IHJhdGluZ0NsaWNrID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIHNldFJhdGluZyh2YWwpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0UmF0aW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaSA9ICgnYXBpL3YxL3JhdGluZ3MnKVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG1vdmllSWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nVmFsdWU6IHJhdGluZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICBmZXRjaChhcGksIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZygnc3VjY2VzcycpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKCdmYWlsdXJlJykpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hFeHRlbmRlZEluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgZmV0Y2hNb3ZpZURldGFpbHMoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3ZpZURldGFpbHMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkIGJnLWxpZ2h0IG1lZGl1bS10ZXh0J30+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdoZWFkZXItc20gY2VudGVyLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluaycgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0JHtpZH0vYH0+e3RpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7bW92aWVEZXRhaWxzICYmIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e21vdmllRGV0YWlscy5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke3RpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICB7ZGlyZWN0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDExNCwzNCwxOTkpJyBzaXplPXsyNH0gY2xhc3NOYW1lPSd2c2NpLW1lZ2EnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge2RpcmVjdG9yfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT59XHJcbiAgICAgICAgICAgICAgICAgICAge3llYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsnICd9e3llYXJ9eycgICAnfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtydW5uaW5nVGltZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntNYXRoLmZsb29yKHJ1bm5pbmdUaW1lIC8gNjApfWhyIHtydW5uaW5nVGltZSAlIDYwfW1pbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjb2xsZWN0aW9uVmlldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhclJhdGluZyByYXRpbmc9e3JhdGluZ30gb25SYXRpbmc9e3JhdGluZ0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyYXRpbmcgIT09IDApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdFJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIG15IGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sbGVjdGlvblZpZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nOiB7dXNlclJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1vdmllRGV0YWlscyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hFeHRlbmRlZEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIGluZm8uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZURldGFpbHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxzIG1vdmllRGV0YWlscz17bW92aWVEZXRhaWxzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXNzIGluZm8uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGRpcmVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcnVubmluZ1RpbWU6IFByb3BUeXBlcy5udW1iZXJcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclJhdGluZyh7IGNvdW50ID0gMTAsIHJhdGluZyA9IDAsIGNvbG9yLCBvblJhdGluZyB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJWYWx1ZSwgc2V0SG92ZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChob3ZlclZhbHVlID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWRcclxuICAgICAgICB9IGVsc2UgaWYgKCFob3ZlclZhbHVlICYmIHJhdGluZyA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci51bmZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFyUmF0aW5nID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KGNvdW50KVxyXG4gICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiBpICsgMSlcclxuICAgICAgICAgICAgLm1hcChpbmRleCA9PlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MTB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYS1zdGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci51bmZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJhdGluZyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGdldENvbG9yKGluZGV4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlclZhbHVlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlclZhbHVlKDApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW2NvdW50LCByYXRpbmcsIGhvdmVyVmFsdWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3Rhci1yYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAge3N0YXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICB7aG92ZXJWYWx1ZSAhPT0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gIDxiPntob3ZlclZhbHVlfTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJhdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9iamVjdFxyXG4gICAgLy9maWxsZWQgdnMgdW5maWxsZWQgd2l0aGluIG9iaj9cclxufVxyXG5cclxuU3RhclJhdGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjoge1xyXG4gICAgICAgIGZpbGxlZDogJyNmNWViM2InLFxyXG4gICAgICAgIHVuZmlsbGVkOiBcIiNEQ0RDRENcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydElkIChpZCkge1xyXG4gICAgbGV0IGNvbnZlcnRlZElkID0gaWQudG9TdHJpbmcoKVxyXG4gICAgd2hpbGUgKGNvbnZlcnRlZElkLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICBjb252ZXJ0ZWRJZCA9ICcwJyArIGNvbnZlcnRlZElkXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIGNvbnZlcnRlZElkXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZURldGFpbHMoaWQpIHtcclxuICAgIC8vQWNrbm93bGVkZ2VkIHRoaXMgaXMgbm8gZ29vZCwgYnV0IGl0J3MgYSBmcmVlIHNlcnZpY2UgZm9yIHdoaWNoIEkgY2FuIGdldCBhbm90aGVyIEFQSSBrZXlcclxuICAgIGNvbnN0IGFwaSA9IGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPXR0JHtpZH0mYXBpa2V5PTJiM2EzMzVkYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmF0aW5ncygpIHtcclxuICAgIGNvbnN0IGFwaSA9IGBhcGkvdjEvcmF0aW5nc2BcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8vTk9UIEZJTklTSEVEXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllRnJvbURCKGlkKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL21vdmllc2BcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllQnlUaXRsZSh0aXRsZSkge1xyXG4gICAgY29uc3QgYXBpID0gJ2FwaS92MS9tb3ZpZXM/J1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBmZXRjaChhcGkgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=