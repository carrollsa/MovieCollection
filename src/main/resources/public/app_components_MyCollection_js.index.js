(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_MyCollection_js"],{

/***/ "./app/components/CollectionCard.js":
/*!******************************************!*\
  !*** ./app/components/CollectionCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollectionCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./app/components/Loading.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function CollectionCard(_ref) {
  var id = _ref.id,
      title = _ref.title,
      year = _ref.year,
      runningTime = _ref.runningTime,
      userRating = _ref.userRating,
      setPopup = _ref.setPopup;

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

  function updatePopup() {
    state.movieDetails.userRating = userRating;
    state.movieDetails.id = id;
    setPopup(state.movieDetails);
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_1__.fetchMovieDetails)(id).then(function (data) {
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
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card bg-light medium-text",
    onClick: function onClick() {
      return updatePopup();
    }
  }, state.loading === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "Fetching movie details"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title-container flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "header-sm center-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "link",
    href: "https://www.imdb.com/title/tt".concat(id, "/"),
    target: "_blank"
  }, title.length > 42 ? title.substring(0, 42) + '...' : title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "center-text bold"
  }, userRating, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStar, {
    stroke: "black",
    strokeWidth: 20,
    color: "gold"
  })), state.movieDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "movie-poster",
    src: state.movieDetails.Poster,
    alt: "poster for ".concat(title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaFilm, {
    color: "rgb(129, 195, 245)",
    size: 22
  }), year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "left10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "left5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaClock, {
    color: "rgb(219,155,59)",
    size: 22
  }), (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.convertRunningTime)(runningTime)))))));
}
CollectionCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  year: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  director: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  runningTime: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};

/***/ }),

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip */ "./app/components/Tooltip.js");
/* harmony import */ var _DisplayRatings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayRatings */ "./app/components/DisplayRatings.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);








function Details(_ref) {
  var movie = _ref.movie;
  var Year = movie.Year,
      Runtime = movie.Runtime,
      Rated = movie.Rated,
      Genre = movie.Genre,
      Director = movie.Director,
      Writer = movie.Writer,
      Actors = movie.Actors,
      Awards = movie.Awards,
      Ratings = movie.Ratings,
      BoxOffice = movie.BoxOffice;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "no-bullets card-list"
  }, Director && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Director"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscMegaphone, {
    color: "rgb(222,30,236)"
  }), Director)), Year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Released"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFilm,
    color: "rgb(129, 195, 245)"
  }), Year)), Runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Runtime"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faClock,
    color: "rgb(219,155,59)"
  }), (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.convertRunningTime)(parseInt(Runtime)))), Actors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Starring"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faStar,
    color: "#21ADA8"
  }), Actors)), Writer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Written by"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faUserEdit,
    color: "#606060"
  }), Writer)), Genre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Genre(s)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTheaterMasks,
    color: "red"
  }), Genre)), Awards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Awards"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faAward,
    color: "blue"
  }), Awards)), Ratings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DisplayRatings__WEBPACK_IMPORTED_MODULE_4__.default, {
    ratings: Ratings
  }), BoxOffice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.default, {
    text: "Box office"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faDollarSign,
    color: "#85bb65"
  }), BoxOffice))));
}
Details.propTypes = {
  movie: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired)
};

/***/ }),

/***/ "./app/components/DisplayRatings.js":
/*!******************************************!*\
  !*** ./app/components/DisplayRatings.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip */ "./app/components/Tooltip.js");





function DisplayRatings(_ref) {
  var ratings = _ref.ratings;
  return ratings.map(function (rating) {
    switch (rating.Source) {
      case 'Internet Movie Database':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.default, {
            text: "IMDB"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "fab fa-imdb",
            color: "yellow"
          }), rating.Value));
        }

      case 'Rotten Tomatoes':
        {
          var index = rating.Value.indexOf('%');
          var value = rating.Value.substring(0, index);
          var icon = parseInt(value) < 60 ? '💩 ' : '🍅 ';
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__.default, {
            text: "Rotten Tomatoes"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, icon, rating.Value));
        }
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayRatings);

/***/ }),

/***/ "./app/components/MoviePopup.js":
/*!**************************************!*\
  !*** ./app/components/MoviePopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details */ "./app/components/Details.js");
/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ "./app/contexts/theme.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarRating */ "./app/components/StarRating.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ "./app/components/Tooltip.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function MoviePopup(_ref) {
  var movie = _ref.movie,
      setPopup = _ref.setPopup;
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__.default);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showNewRating = _React$useState2[0],
      setShowNewRating = _React$useState2[1];

  var Title = movie.Title,
      Poster = movie.Poster,
      Year = movie.Year,
      Plot = movie.Plot;

  var ratingClick = function ratingClick(val) {
    movie.userRating = val;
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_6__.postRating)(movie.id, val);
    setShowNewRating(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, Title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " (", Year, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !showNewRating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.default, {
    text: "Change rating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating",
    onClick: function onClick() {
      return setShowNewRating(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, movie.userRating, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faStar,
    color: "yellow"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "rating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating__WEBPACK_IMPORTED_MODULE_4__.default, {
    rating: movie.userRating,
    onRating: ratingClick
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: Poster,
    alt: "poster for ".concat(Title)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Details__WEBPACK_IMPORTED_MODULE_1__.default, {
    movie: movie
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "plot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, Plot)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "close",
    onClick: function onClick() {
      return setPopup({});
    }
  }, "Close")));
}

MoviePopup.propTypes = {
  movie: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  setPopup: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviePopup);

/***/ }),

/***/ "./app/components/MyCollection.js":
/*!****************************************!*\
  !*** ./app/components/MyCollection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./app/components/Loading.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
/* harmony import */ var _CollectionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollectionCard */ "./app/components/CollectionCard.js");
/* harmony import */ var _MoviePopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MoviePopup */ "./app/components/MoviePopup.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function MyCollection() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popup = _React$useState2[0],
      setPopup = _React$useState2[1];

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    ratings: [],
    loading: true,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_2__.fetchRatings)().then(function (data) {
      return dispatch({
        type: 'success',
        data: data
      });
    })["catch"](function (e) {
      dispatch({
        type: 'error'
      });
    });
  }, []);

  function fetchReducer(state, action) {
    switch (action.type) {
      case 'fetch':
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });

      case 'success':
        return {
          ratings: action.data,
          loading: false,
          error: null
        };

      case 'error':
        return _objectSpread(_objectSpread({}, state), {}, {
          error: 'Fetch failed.',
          loading: false
        });
    }
  }

  function DisplayCollection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "collection space-around"
    }, state.ratings.map(function (ratingItem) {
      var id = ratingItem.id,
          ratingValue = ratingItem.ratingValue,
          movie = ratingItem.movie;
      var title = movie.title,
          year = movie.year;
      var movieId = movie.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollectionCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: movieId,
        title: title,
        year: year,
        runningTime: movie.runningTime,
        userRating: ratingValue,
        setPopup: setPopup
      }));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, {
    text: "Loading your collection"
  }) : state.ratings.length === 0 ? 'Your collection is empty!' : typeof popup.Title != 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoviePopup__WEBPACK_IMPORTED_MODULE_4__.default, {
    movie: popup,
    setPopup: setPopup
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisplayCollection, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCollection);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0Rpc3BsYXlSYXRpbmdzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZVBvcHVwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9NeUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9ob29rcy91c2VIb3Zlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tb3ZpZUNsaWVudC5qcyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5nIiwic2V0UG9wdXAiLCJSZWFjdCIsImZldGNoUmVkdWNlciIsIm1vdmllRGV0YWlscyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInVwZGF0ZVBvcHVwIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJ0aGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUG9zdGVyIiwiY29udmVydFJ1bm5pbmdUaW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGlyZWN0b3IiLCJudW1iZXIiLCJEZXRhaWxzIiwibW92aWUiLCJZZWFyIiwiUnVudGltZSIsIlJhdGVkIiwiR2VucmUiLCJEaXJlY3RvciIsIldyaXRlciIsIkFjdG9ycyIsIkF3YXJkcyIsIlJhdGluZ3MiLCJCb3hPZmZpY2UiLCJmYUZpbG0iLCJmYUNsb2NrIiwicGFyc2VJbnQiLCJmYVN0YXIiLCJmYVVzZXJFZGl0IiwiZmFUaGVhdGVyTWFza3MiLCJmYUF3YXJkIiwiZmFEb2xsYXJTaWduIiwiaXNSZXF1aXJlZCIsIkRpc3BsYXlSYXRpbmdzIiwicmF0aW5ncyIsIm1hcCIsInJhdGluZyIsIlNvdXJjZSIsIlZhbHVlIiwiaW5kZXgiLCJpbmRleE9mIiwidmFsdWUiLCJpY29uIiwiTW92aWVQb3B1cCIsInRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2hvd05ld1JhdGluZyIsInNldFNob3dOZXdSYXRpbmciLCJUaXRsZSIsIlBsb3QiLCJyYXRpbmdDbGljayIsInZhbCIsInBvc3RSYXRpbmciLCJNeUNvbGxlY3Rpb24iLCJwb3B1cCIsImZldGNoUmF0aW5ncyIsImUiLCJEaXNwbGF5Q29sbGVjdGlvbiIsInJhdGluZ0l0ZW0iLCJyYXRpbmdWYWx1ZSIsIm1vdmllSWQiLCJTdGFyUmF0aW5nIiwiY291bnQiLCJjb2xvciIsIm9uUmF0aW5nIiwiaG92ZXJWYWx1ZSIsInNldEhvdmVyVmFsdWUiLCJnZXRDb2xvciIsImZpbGxlZCIsInVuZmlsbGVkIiwic3RhclJhdGluZyIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwidG9vbHRpcCIsImJveFNpemluZyIsIndpZHRoIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJUb29sdGlwIiwidGV4dCIsImNoaWxkcmVuIiwidXNlSG92ZXIiLCJob3ZlcmluZyIsImF0dHJzIiwic2V0SG92ZXJpbmciLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibWlucyIsIk1hdGgiLCJmbG9vciIsImFwaSIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2hNb3ZpZUZyb21EQiIsImZldGNoTW92aWVCeVRpdGxlIiwiVVJMU2VhcmNoUGFyYW1zIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsY0FBVCxPQUFnRjtBQUFBLE1BQXREQyxFQUFzRCxRQUF0REEsRUFBc0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxXQUFxQyxRQUFyQ0EsV0FBcUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUUzRiwwQkFBMEJDLDZDQUFBLENBQ3RCQyxZQURzQixFQUV0QjtBQUNJQyxnQkFBWSxFQUFFLElBRGxCO0FBRUlDLFdBQU8sRUFBRSxLQUZiO0FBR0lDLFNBQUssRUFBRTtBQUhYLEdBRnNCLENBQTFCO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFTQSxXQUFTTCxZQUFULENBQXNCSSxLQUF0QixFQUE2QkUsTUFBN0IsRUFBcUM7QUFDakMsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBSyxPQUFMO0FB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QUFULEVBQUo7QUFBQSxHQUhsQixXQUlXLFVBQUN2RCxDQUFELEVBQU87QUFDVndELFdBQU8sQ0FBQ0MsSUFBUixDQUFhekQsQ0FBQyxDQUFDMEQsT0FBZjtBQUNBLFVBQU0xRCxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBVUgsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19NeUNvbGxlY3Rpb25fanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFGaWxtLCBGYVN0YXIsIEZhQ2hlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZURldGFpbHMgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbkNhcmQoeyBpZCwgdGl0bGUsIHllYXIsIHJ1bm5pbmdUaW1lLCB1c2VyUmF0aW5nLCBzZXRQb3B1cCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQb3B1cCAoKSB7XHJcbiAgICAgICAgc3RhdGUubW92aWVEZXRhaWxzLnVzZXJSYXRpbmcgPSB1c2VyUmF0aW5nO1xyXG4gICAgICAgIHN0YXRlLm1vdmllRGV0YWlscy5pZCA9IGlkO1xyXG4gICAgICAgIHNldFBvcHVwKHN0YXRlLm1vdmllRGV0YWlscylcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT5cclxuICAgICAgICBmZXRjaE1vdmllRGV0YWlscyhpZClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBkYXRhIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yIH0pKVxyXG4gICAgICAgICwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgYmctbGlnaHQgbWVkaXVtLXRleHQnIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVBvcHVwKCl9ID5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdGV4dD0nRmV0Y2hpbmcgbW92aWUgZGV0YWlscycgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRpdGxlLWNvbnRhaW5lciBmbGV4LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJyBocmVmPXtgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQke2lkfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGUubGVuZ3RoID4gNDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aXRsZS5zdWJzdHJpbmcoMCwgNDIpICsgJy4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nY2VudGVyLXRleHQgYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyUmF0aW5nfSA8RmFTdGFyIHN0cm9rZT0nYmxhY2snIHN0cm9rZVdpZHRoPXsyMH0gY29sb3I9XCJnb2xkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5tb3ZpZURldGFpbHMgJiYgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdGF0ZS5tb3ZpZURldGFpbHMuUG9zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Bwb3N0ZXIgZm9yICR7dGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduby1idWxsZXRzIGNhcmQtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZmxleC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsZWZ0MTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xlZnQ1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShydW5uaW5nVGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Db2xsZWN0aW9uQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHllYXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBkaXJlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJ1bm5pbmdUaW1lOiBQcm9wVHlwZXMubnVtYmVyXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIsIGZhVXNlckVkaXQsIGZhVGhlYXRlck1hc2tzLCBmYUF3YXJkLCBmYUNsb2NrLCBmYUZpbG0sIGZhRG9sbGFyU2lnbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgVnNjTWVnYXBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCBEaXNwbGF5UmF0aW5ncyBmcm9tICcuL0Rpc3BsYXlSYXRpbmdzJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzKHsgbW92aWUgfSkge1xyXG4gICAgY29uc3QgeyBZZWFyLCBSdW50aW1lLCBSYXRlZCwgR2VucmUsIERpcmVjdG9yLCBXcml0ZXIsXHJcbiAgICAgICAgQWN0b3JzLCBBd2FyZHMsIFJhdGluZ3MsIEJveE9mZmljZSB9ID0gbW92aWVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAge0RpcmVjdG9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkRpcmVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWc2NNZWdhcGhvbmUgY29sb3I9J3JnYigyMjIsMzAsMjM2KScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEaXJlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7WWVhciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSZWxlYXNlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmlsbX0gY29sb3I9J3JnYigxMjksIDE5NSwgMjQ1KScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtZZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtSdW50aW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlJ1bnRpbWVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDbG9ja30gY29sb3I9J3JnYigyMTksMTU1LDU5KScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb252ZXJ0UnVubmluZ1RpbWUocGFyc2VJbnQoUnVudGltZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtBY3RvcnMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiU3RhcnJpbmdcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBjb2xvcj0nIzIxQURBOCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBY3RvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1dyaXRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJXcml0dGVuIGJ5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlckVkaXR9IGNvbG9yPScjNjA2MDYwJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1dyaXRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7R2VucmUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiR2VucmUocylcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaGVhdGVyTWFza3N9IGNvbG9yPSdyZWQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2VucmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0F3YXJkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJBd2FyZHNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBd2FyZH0gY29sb3I9J2JsdWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXdhcmRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtSYXRpbmdzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlSYXRpbmdzIHJhdGluZ3M9e1JhdGluZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Qm94T2ZmaWNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkJveCBvZmZpY2VcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBjb2xvcj0nIzg1YmI2NScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtCb3hPZmZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkRldGFpbHMucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcblxyXG5mdW5jdGlvbiBEaXNwbGF5UmF0aW5ncyh7IHJhdGluZ3MgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICByYXRpbmdzLm1hcCgocmF0aW5nID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChyYXRpbmcuU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PSdJTURCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1pbWRiJyBjb2xvcj0neWVsbG93JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyYXRpbmcuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnUm90dGVuIFRvbWF0b2VzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHJhdGluZy5WYWx1ZS5pbmRleE9mKCclJylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSByYXRpbmcuVmFsdWUuc3Vic3RyaW5nKDAsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpY29uID0gcGFyc2VJbnQodmFsdWUpIDwgNjAgPyAn8J+SqSAnIDogJ/CfjYUgJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9J1JvdHRlbiBUb21hdG9lcycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyYXRpbmcuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlSYXRpbmdzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9EZXRhaWxzJ1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi9TdGFyUmF0aW5nJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCB7IHBvc3RSYXRpbmcgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVQb3B1cCh7IG1vdmllLCBzZXRQb3B1cCB9KSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFtzaG93TmV3UmF0aW5nLCBzZXRTaG93TmV3UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHsgVGl0bGUsIFBvc3RlciwgWWVhciwgUGxvdCB9ID0gbW92aWVcclxuXHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBtb3ZpZS51c2VyUmF0aW5nID0gdmFsXHJcbiAgICAgICAgcG9zdFJhdGluZyhtb3ZpZS5pZCwgdmFsKVxyXG4gICAgICAgIHNldFNob3dOZXdSYXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtUaXRsZX08c3Bhbj4gKHtZZWFyfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IXNob3dOZXdSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8VG9vbHRpcCB0ZXh0PSdDaGFuZ2UgcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdSYXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS51c2VyUmF0aW5nfSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9J3llbGxvdycgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e21vdmllLnVzZXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3JhdGluZ0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1Bvc3Rlcn0gYWx0PXtgcG9zdGVyIGZvciAke1RpdGxlfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlscyBtb3ZpZT17bW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbG90Jz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57UGxvdH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBvcHVwKHt9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuTW92aWVQb3B1cC5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0UG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVQb3B1cFxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgeyBmZXRjaFJhdGluZ3MsIGZldGNoTW92aWVEZXRhaWxzIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCBDb2xsZWN0aW9uQ2FyZCBmcm9tICcuL0NvbGxlY3Rpb25DYXJkJ1xyXG5pbXBvcnQgTW92aWVQb3B1cCBmcm9tICcuL01vdmllUG9wdXAnXHJcblxyXG5mdW5jdGlvbiBNeUNvbGxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByYXRpbmdzOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFJhdGluZ3MoKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByYXRpbmdzOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnRmV0Y2ggZmFpbGVkLicsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGlzcGxheUNvbGxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbGxlY3Rpb24gc3BhY2UtYXJvdW5kJz5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5yYXRpbmdzLm1hcCgocmF0aW5nSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIHJhdGluZ1ZhbHVlLCBtb3ZpZSB9ID0gcmF0aW5nSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIHllYXIgfSA9IG1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aWVJZCA9IG1vdmllLmlkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGVjdGlvbkNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bW92aWVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGltZT17bW92aWUucnVubmluZ1RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJhdGluZz17cmF0aW5nVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXA9e3NldFBvcHVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gPExvYWRpbmcgdGV4dD0nTG9hZGluZyB5b3VyIGNvbGxlY3Rpb24nIC8+XHJcbiAgICAgICAgICAgICAgICA6IHN0YXRlLnJhdGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnWW91ciBjb2xsZWN0aW9uIGlzIGVtcHR5ISdcclxuICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiBwb3B1cC5UaXRsZSAhPSAndW5kZWZpbmVkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8TW92aWVQb3B1cCBtb3ZpZT17cG9wdXB9IHNldFBvcHVwPXtzZXRQb3B1cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8RGlzcGxheUNvbGxlY3Rpb24gLz5cclxuICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29sbGVjdGlvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclJhdGluZyh7IGNvdW50ID0gMTAsIHJhdGluZyA9IDAsIGNvbG9yLCBvblJhdGluZyB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJWYWx1ZSwgc2V0SG92ZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChob3ZlclZhbHVlID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWRcclxuICAgICAgICB9IGVsc2UgaWYgKCFob3ZlclZhbHVlICYmIHJhdGluZyA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci51bmZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFyUmF0aW5nID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KGNvdW50KVxyXG4gICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiBpICsgMSlcclxuICAgICAgICAgICAgLm1hcChpbmRleCA9PlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYS1zdGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci51bmZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJhdGluZyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGdldENvbG9yKGluZGV4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlclZhbHVlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlclZhbHVlKDApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW2NvdW50LCByYXRpbmcsIGhvdmVyVmFsdWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhclJhdGluZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJhdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5TdGFyUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZmlsbGVkOiAnI2Y1ZWIzYicsXHJcbiAgICAgICAgdW5maWxsZWQ6IFwiI0RDRENEQ1wiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4uL2hvb2tzL3VzZUhvdmVyJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcclxuICAgICAgICBib3R0b206ICcxMDAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnLTgwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaHNsYSgwLCAwJSwgMjAlLCAwLjkpJyxcclxuICAgICAgICBwYWRkaW5nOiAnN3B4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sdGlwKHsgdGV4dCwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBhdHRyc10gPSB1c2VIb3ZlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfSB7Li4uYXR0cnN9PlxyXG4gICAgICAgICAgICB7aG92ZXJpbmcgPT09IHRydWUgJiYgPGRpdiBzdHlsZT17c3R5bGVzLnRvb2x0aXB9Pnt0ZXh0fTwvZGl2Pn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG92ZXIoKSB7XHJcbiAgICBjb25zdCBbaG92ZXJpbmcsIHNldEhvdmVyaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG9uTW91c2VPdmVyID0gKCkgPT4gc2V0SG92ZXJpbmcodHJ1ZSlcclxuICAgIGNvbnN0IG9uTW91c2VPdXQgPSAoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gW2hvdmVyaW5nLCB7XHJcbiAgICAgICAgb25Nb3VzZU92ZXIsXHJcbiAgICAgICAgb25Nb3VzZU91dFxyXG4gICAgfV1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZURldGFpbHMoaWQpIHtcclxuICAgIC8vQWNrbm93bGVkZ2VkIHRoaXMgaXMgbm8gZ29vZCwgYnV0IGl0J3MgYSBmcmVlIHNlcnZpY2UgZm9yIHdoaWNoIEkgY2FuIGdldCBhbm90aGVyIEFQSSBrZXlcclxuICAgIGNvbnN0IGFwaSA9IGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPXR0JHtpZH0mYXBpa2V5PTJiM2EzMzVkYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RSYXRpbmcoaWQsIHJhdGluZykge1xyXG4gICAgY29uc3QgYXBpID0gKCdhcGkvdjEvcmF0aW5ncycpXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG1vdmllSWQ6IGlkLFxyXG4gICAgICAgICAgICByYXRpbmdWYWx1ZTogcmF0aW5nXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJhdGluZ3MoKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL3JhdGluZ3NgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUZyb21EQihpZCkge1xyXG4gICAgY29uc3QgYXBpID0gYGFwaS92MS9tb3ZpZXNgXHJcbiAgICByZXR1cm4gZmV0Y2goYXBpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb3ZpZUJ5VGl0bGUodGl0bGUpIHtcclxuICAgIGNvbnN0IGFwaSA9ICdhcGkvdjEvbW92aWVzPydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpICsgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICAgICAgfSlcclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=