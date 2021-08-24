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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0Rpc3BsYXlSYXRpbmdzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZVBvcHVwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9NeUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9ob29rcy91c2VIb3Zlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tb3ZpZUNsaWVudC5qcyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5nIiwic2V0UG9wdXAiLCJSZWFjdCIsImZldGNoUmVkdWNlciIsIm1vdmllRGV0YWlscyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInVwZGF0ZVBvcHVwIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJ0aGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUG9zdGVyIiwiY29udmVydFJ1bm5pbmdUaW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGlyZWN0b3IiLCJudW1iZXIiLCJEZXRhaWxzIiwibW92aWUiLCJZZWFyIiwiUnVudGltZSIsIlJhdGVkIiwiR2VucmUiLCJEaXJlY3RvciIsIldyaXRlciIsIkFjdG9ycyIsIkF3YXJkcyIsIlJhdGluZ3MiLCJCb3hPZmZpY2UiLCJmYUZpbG0iLCJmYUNsb2NrIiwicGFyc2VJbnQiLCJmYVN0YXIiLCJmYVVzZXJFZGl0IiwiZmFUaGVhdGVyTWFza3MiLCJmYUF3YXJkIiwiZmFEb2xsYXJTaWduIiwiaXNSZXF1aXJlZCIsIkRpc3BsYXlSYXRpbmdzIiwicmF0aW5ncyIsIm1hcCIsInJhdGluZyIsIlNvdXJjZSIsIlZhbHVlIiwiaW5kZXgiLCJpbmRleE9mIiwidmFsdWUiLCJpY29uIiwiTW92aWVQb3B1cCIsInRoZW1lIiwiVGhlbWVDb250ZXh0Iiwic2hvd05ld1JhdGluZyIsInNldFNob3dOZXdSYXRpbmciLCJUaXRsZSIsIlBsb3QiLCJyYXRpbmdDbGljayIsInZhbCIsInBvc3RSYXRpbmciLCJNeUNvbGxlY3Rpb24iLCJwb3B1cCIsImZldGNoUmF0aW5ncyIsImUiLCJEaXNwbGF5Q29sbGVjdGlvbiIsInJhdGluZ0l0ZW0iLCJyYXRpbmdWYWx1ZSIsIm1vdmllSWQiLCJTdGFyUmF0aW5nIiwiY291bnQiLCJjb2xvciIsIm9uUmF0aW5nIiwiaG92ZXJWYWx1ZSIsInNldEhvdmVyVmFsdWUiLCJnZXRDb2xvciIsImZpbGxlZCIsInVuZmlsbGVkIiwic3RhclJhdGluZyIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwidG9vbHRpcCIsImJveFNpemluZyIsIndpZHRoIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJUb29sdGlwIiwidGV4dCIsImNoaWxkcmVuIiwidXNlSG92ZXIiLCJob3ZlcmluZyIsImF0dHJzIiwic2V0SG92ZXJpbmciLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibWlucyIsIk1hdGgiLCJmbG9vciIsImFwaSIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2hNb3ZpZUZyb21EQiIsImZldGNoTW92aWVCeVRpdGxlIiwiVVJMU2VhcmNoUGFyYW1zIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsY0FBVCxPQUFnRjtBQUFBLE1BQXREQyxFQUFzRCxRQUF0REEsRUFBc0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxXQUFxQyxRQUFyQ0EsV0FBcUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUN2RiwwQkFBMEJDLDZDQUFBLENBQzFCQyxZQUQwQixFQUUxQjtBQUNJQyxnQkFBWSxFQUFFLElBRGxCO0FBRUlDLFdBQU8sRUFBRSxLQUZiO0FBR0lDLFNBQUssRUFBRTtBQUhYLEdBRjBCLENBQTFCO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFTSixXQUFTTCxZQUFULENBQXNCSSxLQUF0QixFQUE2QkUsTUFBN0IsRUFBcUM7QUFDakMsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBSyxPQUFMO0FB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QUFULEVBQUo7QUFBQSxHQUhsQixXQUlXLFVBQUN2RCxDQUFELEVBQU87QUFDVndELFdBQU8sQ0FBQ0MsSUFBUixDQUFhekQsQ0FBQyxDQUFDMEQsT0FBZjtBQUNBLFVBQU0xRCxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBVUgsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19NeUNvbGxlY3Rpb25fanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFGaWxtLCBGYVN0YXIsIEZhQ2hlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZURldGFpbHMgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbkNhcmQoeyBpZCwgdGl0bGUsIHllYXIsIHJ1bm5pbmdUaW1lLCB1c2VyUmF0aW5nLCBzZXRQb3B1cCB9KSB7XHJcbiAgICAgICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vdmllRGV0YWlsczogbnVsbCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdmZXRjaCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmllRGV0YWlsczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9wdXAgKCkge1xyXG4gICAgICAgIHN0YXRlLm1vdmllRGV0YWlscy51c2VyUmF0aW5nID0gdXNlclJhdGluZztcclxuICAgICAgICBzdGF0ZS5tb3ZpZURldGFpbHMuaWQgPSBpZDtcclxuICAgICAgICBzZXRQb3B1cChzdGF0ZS5tb3ZpZURldGFpbHMpXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+XHJcbiAgICAgICAgZmV0Y2hNb3ZpZURldGFpbHMoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCBlcnJvciB9KSlcclxuICAgICAgICAsIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIGJnLWxpZ2h0IG1lZGl1bS10ZXh0JyBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb3B1cCgpfSA+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubG9hZGluZyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIHRleHQ9J0ZldGNoaW5nIG1vdmllIGRldGFpbHMnIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10aXRsZS1jb250YWluZXIgZmxleC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2hlYWRlci1zbSBjZW50ZXItdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluaycgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlL3R0JHtpZH0vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlLmxlbmd0aCA+IDQyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGl0bGUuc3Vic3RyaW5nKDAsIDQyKSArICcuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2NlbnRlci10ZXh0IGJvbGQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlclJhdGluZ30gPEZhU3RhciBzdHJva2U9J2JsYWNrJyBzdHJva2VXaWR0aD17MjB9IGNvbG9yPVwiZ29sZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVEZXRhaWxzICYmIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtb3ZpZS1wb3N0ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3RhdGUubW92aWVEZXRhaWxzLlBvc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgcG9zdGVyIGZvciAke3RpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbm8tYnVsbGV0cyBjYXJkLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGZsZXgtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZpbG0gY29sb3I9J3JnYigxMjksIDE5NSwgMjQ1KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGVmdDEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsZWZ0NSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDbG9jayBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb252ZXJ0UnVubmluZ1RpbWUocnVubmluZ1RpbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuQ29sbGVjdGlvbkNhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB5ZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZGlyZWN0b3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBydW5uaW5nVGltZTogUHJvcFR5cGVzLm51bWJlclxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbnZlcnRSdW5uaW5nVGltZSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFTdGFyLCBmYVVzZXJFZGl0LCBmYVRoZWF0ZXJNYXNrcywgZmFBd2FyZCwgZmFDbG9jaywgZmFGaWxtLCBmYURvbGxhclNpZ24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IFZzY01lZ2FwaG9uZSB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYydcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgRGlzcGxheVJhdGluZ3MgZnJvbSAnLi9EaXNwbGF5UmF0aW5ncydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyh7IG1vdmllIH0pIHtcclxuICAgIGNvbnN0IHsgWWVhciwgUnVudGltZSwgUmF0ZWQsIEdlbnJlLCBEaXJlY3RvciwgV3JpdGVyLFxyXG4gICAgICAgIEFjdG9ycywgQXdhcmRzLCBSYXRpbmdzLCBCb3hPZmZpY2UgfSA9IG1vdmllXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgIHtEaXJlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJEaXJlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnNjTWVnYXBob25lIGNvbG9yPSdyZ2IoMjIyLDMwLDIzNiknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1llYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUmVsZWFzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbG19IGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UnVudGltZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSdW50aW1lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KFJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QWN0b3JzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlN0YXJyaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9JyMyMUFEQTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtXcml0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiV3JpdHRlbiBieVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJFZGl0fSBjb2xvcj0nIzYwNjA2MCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXcml0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0dlbnJlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkdlbnJlKHMpXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGhlYXRlck1hc2tzfSBjb2xvcj0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0dlbnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtBd2FyZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQXdhcmRzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXdhcmR9IGNvbG9yPSdibHVlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0F3YXJkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UmF0aW5ncyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5UmF0aW5ncyByYXRpbmdzPXtSYXRpbmdzfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0JveE9mZmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJCb3ggb2ZmaWNlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRG9sbGFyU2lnbn0gY29sb3I9JyM4NWJiNjUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Qm94T2ZmaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5EZXRhaWxzLnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5cclxuZnVuY3Rpb24gRGlzcGxheVJhdGluZ3MoeyByYXRpbmdzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcmF0aW5ncy5tYXAoKHJhdGluZyA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmF0aW5nLlNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnSW50ZXJuZXQgTW92aWUgRGF0YWJhc2UnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD0nSU1EQic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW1kYicgY29sb3I9J3llbGxvdycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0aW5nLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ1JvdHRlbiBUb21hdG9lcyc6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByYXRpbmcuVmFsdWUuaW5kZXhPZignJScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF0aW5nLlZhbHVlLnN1YnN0cmluZygwLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IHBhcnNlSW50KHZhbHVlKSA8IDYwID8gJ/CfkqkgJyA6ICfwn42FICdcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PSdSb3R0ZW4gVG9tYXRvZXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0aW5nLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5UmF0aW5nc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscydcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgeyBwb3N0UmF0aW5nIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmZ1bmN0aW9uIE1vdmllUG9wdXAoeyBtb3ZpZSwgc2V0UG9wdXAgfSkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbc2hvd05ld1JhdGluZywgc2V0U2hvd05ld1JhdGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB7IFRpdGxlLCBQb3N0ZXIsIFllYXIsIFBsb3QgfSA9IG1vdmllXHJcblxyXG4gICAgY29uc3QgcmF0aW5nQ2xpY2sgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgbW92aWUudXNlclJhdGluZyA9IHZhbFxyXG4gICAgICAgIHBvc3RSYXRpbmcobW92aWUuaWQsIHZhbClcclxuICAgICAgICBzZXRTaG93TmV3UmF0aW5nKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwb3B1cCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICB7VGl0bGV9PHNwYW4+ICh7WWVhcn0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzaG93TmV3UmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFRvb2x0aXAgdGV4dD0nQ2hhbmdlIHJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3UmF0aW5nKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bW92aWUudXNlclJhdGluZ30gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IGNvbG9yPSd5ZWxsb3cnIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXttb3ZpZS51c2VyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0aW5nPXtyYXRpbmdDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtQb3N0ZXJ9IGFsdD17YHBvc3RlciBmb3IgJHtUaXRsZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbHMgbW92aWU9e21vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxvdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e1Bsb3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cCh7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbk1vdmllUG9wdXAucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllUG9wdXBcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IHsgZmV0Y2hSYXRpbmdzLCBmZXRjaE1vdmllRGV0YWlscyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgQ29sbGVjdGlvbkNhcmQgZnJvbSAnLi9Db2xsZWN0aW9uQ2FyZCdcclxuaW1wb3J0IE1vdmllUG9wdXAgZnJvbSAnLi9Nb3ZpZVBvcHVwJ1xyXG5cclxuZnVuY3Rpb24gTXlDb2xsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZSh7fSlcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmF0aW5nczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hSYXRpbmdzKClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBkYXRhIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ZldGNoIGZhaWxlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpc3BsYXlDb2xsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsZWN0aW9uIHNwYWNlLWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUucmF0aW5ncy5tYXAoKHJhdGluZ0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCByYXRpbmdWYWx1ZSwgbW92aWUgfSA9IHJhdGluZ0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCB5ZWFyIH0gPSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5pZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxlY3Rpb25DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e21vdmllLnJ1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmc9e3JhdGluZ1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwPXtzZXRQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIHRleHQ9J0xvYWRpbmcgeW91ciBjb2xsZWN0aW9uJyAvPlxyXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5yYXRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ1lvdXIgY29sbGVjdGlvbiBpcyBlbXB0eSEnXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlb2YgcG9wdXAuVGl0bGUgIT0gJ3VuZGVmaW5lZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPE1vdmllUG9wdXAgbW92aWU9e3BvcHVwfSBzZXRQb3B1cD17c2V0UG9wdXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPERpc3BsYXlDb2xsZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbGxlY3Rpb24iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFyLXJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuU3RhclJhdGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjoge1xyXG4gICAgICAgIGZpbGxlZDogJyNmNWViM2InLFxyXG4gICAgICAgIHVuZmlsbGVkOiBcIiNEQ0RDRENcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuLi9ob29rcy91c2VIb3ZlcidcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMTAwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJy04MHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDIwJSwgMC45KScsXHJcbiAgICAgICAgcGFkZGluZzogJzdweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVG9vbHRpcCh7IHRleHQsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlcmluZywgYXR0cnNdID0gdXNlSG92ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gey4uLmF0dHJzfT5cclxuICAgICAgICAgICAge2hvdmVyaW5nID09PSB0cnVlICYmIDxkaXYgc3R5bGU9e3N0eWxlcy50b29sdGlwfT57dGV4dH08L2Rpdj59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvdmVyKCkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlT3ZlciA9ICgpID0+IHNldEhvdmVyaW5nKHRydWUpXHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gKCkgPT4gc2V0SG92ZXJpbmcoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIFtob3ZlcmluZywge1xyXG4gICAgICAgIG9uTW91c2VPdmVyLFxyXG4gICAgICAgIG9uTW91c2VPdXRcclxuICAgIH1dXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SWQgKGlkKSB7XHJcbiAgICBsZXQgY29udmVydGVkSWQgPSBpZC50b1N0cmluZygpXHJcbiAgICB3aGlsZSAoY29udmVydGVkSWQubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGNvbnZlcnRlZElkID0gJzAnICsgY29udmVydGVkSWRcclxuICAgIH1cclxuICAgIHJldHVybiAgY29udmVydGVkSWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRSdW5uaW5nVGltZSAobWlucykge1xyXG4gICAgaWYgKG1pbnMgPT09IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuICcxaHInO1xyXG4gICAgfSBlbHNlIGlmIChtaW5zIDwgNjApIHtcclxuICAgICAgICByZXR1cm4gbWlucyArICdtaW4nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKG1pbnMgLyA2MCl9aHIgJHttaW5zICUgNjB9bWluYFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVEZXRhaWxzKGlkKSB7XHJcbiAgICAvL0Fja25vd2xlZGdlZCB0aGlzIGlzIG5vIGdvb2QsIGJ1dCBpdCdzIGEgZnJlZSBzZXJ2aWNlIGZvciB3aGljaCBJIGNhbiBnZXQgYW5vdGhlciBBUEkga2V5XHJcbiAgICBjb25zdCBhcGkgPSBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT10dCR7aWR9JmFwaWtleT0yYjNhMzM1ZGBcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0UmF0aW5nKGlkLCByYXRpbmcpIHtcclxuICAgIGNvbnN0IGFwaSA9ICgnYXBpL3YxL3JhdGluZ3MnKVxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBtb3ZpZUlkOiBpZCxcclxuICAgICAgICAgICAgcmF0aW5nVmFsdWU6IHJhdGluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGZldGNoKGFwaSwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHRocm93IGVcclxuICAgICAgICAgICAgfSlcclxuICAgIClcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSYXRpbmdzKCkge1xyXG4gICAgY29uc3QgYXBpID0gYGFwaS92MS9yYXRpbmdzYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVGcm9tREIoaWQpIHtcclxuICAgIGNvbnN0IGFwaSA9IGBhcGkvdjEvbW92aWVzYFxyXG4gICAgcmV0dXJuIGZldGNoKGFwaSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVCeVRpdGxlKHRpdGxlKSB7XHJcbiAgICBjb25zdCBhcGkgPSAnYXBpL3YxL21vdmllcz8nXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGZldGNoKGFwaSArIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGVcclxuICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9