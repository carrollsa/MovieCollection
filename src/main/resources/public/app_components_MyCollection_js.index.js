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
  }), Awards)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DisplayRatings__WEBPACK_IMPORTED_MODULE_4__.default, {
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
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ "./app/components/Tooltip.js");



function DisplayRatings(_ref) {
  var ratings = _ref.ratings;
  return ratings.map(function (rating) {
    switch (rating.Source) {
      case 'Internet Movie Database':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_1__.default, {
            text: "IMDB"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: rating.Source + rating.Value
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            className: "fab fa-imdb",
            color: "yellow"
          }), rating.Value));
        }

      case 'Rotten Tomatoes':
        {
          var index = rating.Value.indexOf('%');
          var value = rating.Value.substring(0, index);
          var icon = parseInt(value) < 60 ? '💩 ' : '🍅 ';
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_1__.default, {
            text: "Rotten Tomatoes"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: rating.Source + rating.Value
          }, icon, rating.Value));
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
    className: "popup-poster",
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
          value = ratingItem.value,
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
        userRating: value,
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
  var api = 'api/v1/rating';
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
  var api = "api/v1/rating";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0Rpc3BsYXlSYXRpbmdzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZVBvcHVwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9NeUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9ob29rcy91c2VIb3Zlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC91dGlscy9tb3ZpZUNsaWVudC5qcyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5nIiwic2V0UG9wdXAiLCJSZWFjdCIsImZldGNoUmVkdWNlciIsIm1vdmllRGV0YWlscyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInVwZGF0ZVBvcHVwIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJ0aGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUG9zdGVyIiwiY29udmVydFJ1bm5pbmdUaW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGlyZWN0b3IiLCJudW1iZXIiLCJEZXRhaWxzIiwibW92aWUiLCJZZWFyIiwiUnVudGltZSIsIkdlbnJlIiwiRGlyZWN0b3IiLCJXcml0ZXIiLCJBY3RvcnMiLCJBd2FyZHMiLCJSYXRpbmdzIiwiQm94T2ZmaWNlIiwiZmFGaWxtIiwiZmFDbG9jayIsInBhcnNlSW50IiwiZmFTdGFyIiwiZmFVc2VyRWRpdCIsImZhVGhlYXRlck1hc2tzIiwiZmFBd2FyZCIsImZhRG9sbGFyU2lnbiIsImlzUmVxdWlyZWQiLCJEaXNwbGF5UmF0aW5ncyIsInJhdGluZ3MiLCJtYXAiLCJyYXRpbmciLCJTb3VyY2UiLCJWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInZhbHVlIiwiaWNvbiIsIk1vdmllUG9wdXAiLCJ0aGVtZSIsIlRoZW1lQ29udGV4dCIsInNob3dOZXdSYXRpbmciLCJzZXRTaG93TmV3UmF0aW5nIiwiVGl0bGUiLCJQbG90IiwicmF0aW5nQ2xpY2siLCJ2YWwiLCJwb3N0UmF0aW5nIiwiTXlDb2xsZWN0aW9uIiwicG9wdXAiLCJmZXRjaFJhdGluZ3MiLCJlIiwiRGlzcGxheUNvbGxlY3Rpb24iLCJyYXRpbmdJdGVtIiwibW92aWVJZCIsIlN0YXJSYXRpbmciLCJjb3VudCIsImNvbG9yIiwib25SYXRpbmciLCJob3ZlclZhbHVlIiwic2V0SG92ZXJWYWx1ZSIsImdldENvbG9yIiwiZmlsbGVkIiwidW5maWxsZWQiLCJzdGFyUmF0aW5nIiwiQXJyYXkiLCJmaWxsIiwiXyIsImkiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ0b29sdGlwIiwiYm94U2l6aW5nIiwid2lkdGgiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIlRvb2x0aXAiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJ1c2VIb3ZlciIsImhvdmVyaW5nIiwiYXR0cnMiLCJzZXRIb3ZlcmluZyIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImNvbnZlcnRJZCIsImNvbnZlcnRlZElkIiwidG9TdHJpbmciLCJtaW5zIiwiTWF0aCIsImZsb29yIiwiYXBpIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiY29uc29sZSIsIndhcm4iLCJtZXNzYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXRpbmdWYWx1ZSIsImZldGNoTW92aWVGcm9tREIiLCJmZXRjaE1vdmllQnlUaXRsZSIsIlVSTFNlYXJjaFBhcmFtcyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLGNBQVQsT0FBZ0Y7QUFBQSxNQUF0REMsRUFBc0QsUUFBdERBLEVBQXNEO0FBQUEsTUFBbERDLEtBQWtELFFBQWxEQSxLQUFrRDtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsV0FBcUMsUUFBckNBLFdBQXFDO0FBQUEsTUFBeEJDLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFM0YsMEJBQTBCQyw2Q0FBQSxDQUN0QkMsWUFEc0IsRUFFdEI7QUFDSUMsZ0JBQVksRUFBRSxJQURsQjtBQUVJQyxXQUFPLEVBQUUsS0FGYjtBQUdJQyxTQUFLLEVBQUU7QUFIWCxHQUZzQixDQUExQjtBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBU0EsV0FBU0wsWUFBVCxDQUFzQkksS0FBdEIsRUFBNkJFLE1BQTdCLEVBQXFDO0FBQ2pDLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUssT0FBTDtBQUNJLCtDQUNP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QVAsQ0FBTCxDQUdLaUIsSUFITCxDQUdVLFVBQUF3SCxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDZCxJQUFULEVBQUo7QUFBQSxHQUhsQixXQUlXLFVBQUN0RCxDQUFELEVBQU87QUFDVnVELFdBQU8sQ0FBQ0MsSUFBUixDQUFheEQsQ0FBQyxDQUFDeUQsT0FBZjtBQUNBLFVBQU16RCxDQUFOO0FBQ0gsR0FQTCxDQURKO0FBVUgsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19NeUNvbGxlY3Rpb25fanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFDbG9jaywgRmFGaWxtLCBGYVN0YXIsIEZhQ2hlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgZmV0Y2hNb3ZpZURldGFpbHMgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbkNhcmQoeyBpZCwgdGl0bGUsIHllYXIsIHJ1bm5pbmdUaW1lLCB1c2VyUmF0aW5nLCBzZXRQb3B1cCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQb3B1cCAoKSB7XHJcbiAgICAgICAgc3RhdGUubW92aWVEZXRhaWxzLnVzZXJSYXRpbmcgPSB1c2VyUmF0aW5nO1xyXG4gICAgICAgIHN0YXRlLm1vdmllRGV0YWlscy5pZCA9IGlkO1xyXG4gICAgICAgIHNldFBvcHVwKHN0YXRlLm1vdmllRGV0YWlscylcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT5cclxuICAgICAgICBmZXRjaE1vdmllRGV0YWlscyhpZClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBkYXRhIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yIH0pKVxyXG4gICAgICAgICwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgYmctbGlnaHQgbWVkaXVtLXRleHQnIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVBvcHVwKCl9ID5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgdGV4dD0nRmV0Y2hpbmcgbW92aWUgZGV0YWlscycgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRpdGxlLWNvbnRhaW5lciBmbGV4LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyLXNtIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rJyBocmVmPXtgaHR0cHM6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQke2lkfS9gfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGUubGVuZ3RoID4gNDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aXRsZS5zdWJzdHJpbmcoMCwgNDIpICsgJy4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nY2VudGVyLXRleHQgYm9sZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyUmF0aW5nfSA8RmFTdGFyIHN0cm9rZT0nYmxhY2snIHN0cm9rZVdpZHRoPXsyMH0gY29sb3I9XCJnb2xkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5tb3ZpZURldGFpbHMgJiYgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vdmllLXBvc3RlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdGF0ZS5tb3ZpZURldGFpbHMuUG9zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Bwb3N0ZXIgZm9yICR7dGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduby1idWxsZXRzIGNhcmQtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZmxleC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRmlsbSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsZWZ0MTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xlZnQ1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNsb2NrIGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShydW5uaW5nVGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Db2xsZWN0aW9uQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHllYXI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBkaXJlY3RvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHJ1bm5pbmdUaW1lOiBQcm9wVHlwZXMubnVtYmVyXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29udmVydFJ1bm5pbmdUaW1lIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIsIGZhVXNlckVkaXQsIGZhVGhlYXRlck1hc2tzLCBmYUF3YXJkLCBmYUNsb2NrLCBmYUZpbG0sIGZhRG9sbGFyU2lnbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgVnNjTWVnYXBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCBEaXNwbGF5UmF0aW5ncyBmcm9tICcuL0Rpc3BsYXlSYXRpbmdzJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzKHsgbW92aWUgfSkge1xyXG4gICAgY29uc3QgeyBZZWFyLCBSdW50aW1lLCBHZW5yZSwgRGlyZWN0b3IsIFdyaXRlcixcclxuICAgICAgICBBY3RvcnMsIEF3YXJkcywgUmF0aW5ncywgQm94T2ZmaWNlIH0gPSBtb3ZpZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduby1idWxsZXRzIGNhcmQtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICB7RGlyZWN0b3IgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiRGlyZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZzY01lZ2FwaG9uZSBjb2xvcj0ncmdiKDIyMiwzMCwyMzYpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0RpcmVjdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtZZWFyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlJlbGVhc2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGaWxtfSBjb2xvcj0ncmdiKDEyOSwgMTk1LCAyNDUpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1J1bnRpbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUnVudGltZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsb2NrfSBjb2xvcj0ncmdiKDIxOSwxNTUsNTkpJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnZlcnRSdW5uaW5nVGltZShwYXJzZUludChSdW50aW1lKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0FjdG9ycyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJTdGFycmluZ1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IGNvbG9yPScjMjFBREE4JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FjdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7V3JpdGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIldyaXR0ZW4gYnlcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyRWRpdH0gY29sb3I9JyM2MDYwNjAnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7V3JpdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtHZW5yZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJHZW5yZShzKVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRoZWF0ZXJNYXNrc30gY29sb3I9J3JlZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHZW5yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QXdhcmRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkF3YXJkc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUF3YXJkfSBjb2xvcj0nYmx1ZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBd2FyZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPERpc3BsYXlSYXRpbmdzIHJhdGluZ3M9e1JhdGluZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICB7Qm94T2ZmaWNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkJveCBvZmZpY2VcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEb2xsYXJTaWdufSBjb2xvcj0nIzg1YmI2NScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtCb3hPZmZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkRldGFpbHMucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcblxyXG5mdW5jdGlvbiBEaXNwbGF5UmF0aW5ncyh7IHJhdGluZ3MgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICByYXRpbmdzLm1hcCgocmF0aW5nID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChyYXRpbmcuU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdJbnRlcm5ldCBNb3ZpZSBEYXRhYmFzZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PSdJTURCJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JhdGluZy5Tb3VyY2UgKyByYXRpbmcuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWltZGInIGNvbG9yPSd5ZWxsb3cnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JhdGluZy5WYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdSb3R0ZW4gVG9tYXRvZXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcmF0aW5nLlZhbHVlLmluZGV4T2YoJyUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHJhdGluZy5WYWx1ZS5zdWJzdHJpbmcoMCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGljb24gPSBwYXJzZUludCh2YWx1ZSkgPCA2MCA/ICfwn5KpICcgOiAn8J+NhSAnXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD0nUm90dGVuIFRvbWF0b2VzJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyYXRpbmcuU291cmNlICsgcmF0aW5nLlZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0aW5nLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5UmF0aW5nc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscydcclxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy90aGVtZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4vU3RhclJhdGluZydcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9Ub29sdGlwJ1xyXG5pbXBvcnQgeyBwb3N0UmF0aW5nIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmZ1bmN0aW9uIE1vdmllUG9wdXAoeyBtb3ZpZSwgc2V0UG9wdXAgfSkge1xyXG4gICAgY29uc3QgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBbc2hvd05ld1JhdGluZywgc2V0U2hvd05ld1JhdGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB7IFRpdGxlLCBQb3N0ZXIsIFllYXIsIFBsb3QgfSA9IG1vdmllXHJcblxyXG4gICAgY29uc3QgcmF0aW5nQ2xpY2sgPSAodmFsKSA9PiB7XHJcbiAgICAgICAgbW92aWUudXNlclJhdGluZyA9IHZhbFxyXG4gICAgICAgIHBvc3RSYXRpbmcobW92aWUuaWQsIHZhbClcclxuICAgICAgICBzZXRTaG93TmV3UmF0aW5nKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwb3B1cCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICB7VGl0bGV9PHNwYW4+ICh7WWVhcn0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFzaG93TmV3UmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFRvb2x0aXAgdGV4dD0nQ2hhbmdlIHJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmV3UmF0aW5nKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bW92aWUudXNlclJhdGluZ30gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IGNvbG9yPSd5ZWxsb3cnIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0ncmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXttb3ZpZS51c2VyUmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0aW5nPXtyYXRpbmdDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwb3B1cC1wb3N0ZXInIHNyYz17UG9zdGVyfSBhbHQ9e2Bwb3N0ZXIgZm9yICR7VGl0bGV9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxzIG1vdmllPXttb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Bsb3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntQbG90fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UG9wdXAoe30pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5Nb3ZpZVBvcHVwLnByb3BUeXBlcyA9IHtcclxuICAgIG1vdmllOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBzZXRQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVBvcHVwXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCB7IGZldGNoUmF0aW5ncyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgQ29sbGVjdGlvbkNhcmQgZnJvbSAnLi9Db2xsZWN0aW9uQ2FyZCdcclxuaW1wb3J0IE1vdmllUG9wdXAgZnJvbSAnLi9Nb3ZpZVBvcHVwJ1xyXG5cclxuZnVuY3Rpb24gTXlDb2xsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZSh7fSlcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmF0aW5nczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hSYXRpbmdzKClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBkYXRhIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ZldGNoIGZhaWxlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpc3BsYXlDb2xsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsZWN0aW9uIHNwYWNlLWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUucmF0aW5ncy5tYXAoKHJhdGluZ0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCB2YWx1ZSwgbW92aWUgfSA9IHJhdGluZ0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCB5ZWFyIH0gPSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5pZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxlY3Rpb25DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e21vdmllLnJ1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmc9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwPXtzZXRQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIHRleHQ9J0xvYWRpbmcgeW91ciBjb2xsZWN0aW9uJyAvPlxyXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5yYXRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ1lvdXIgY29sbGVjdGlvbiBpcyBlbXB0eSEnXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlb2YgcG9wdXAuVGl0bGUgIT0gJ3VuZGVmaW5lZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPE1vdmllUG9wdXAgbW92aWU9e3BvcHVwfSBzZXRQb3B1cD17c2V0UG9wdXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPERpc3BsYXlDb2xsZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbGxlY3Rpb24iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFyLXJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuU3RhclJhdGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjoge1xyXG4gICAgICAgIGZpbGxlZDogJyNmNWViM2InLFxyXG4gICAgICAgIHVuZmlsbGVkOiBcIiNEQ0RDRENcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuLi9ob29rcy91c2VIb3ZlcidcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMTAwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJy04MHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDIwJSwgMC45KScsXHJcbiAgICAgICAgcGFkZGluZzogJzdweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVG9vbHRpcCh7IHRleHQsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlcmluZywgYXR0cnNdID0gdXNlSG92ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gey4uLmF0dHJzfT5cclxuICAgICAgICAgICAge2hvdmVyaW5nID09PSB0cnVlICYmIDxkaXYgc3R5bGU9e3N0eWxlcy50b29sdGlwfT57dGV4dH08L2Rpdj59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvdmVyKCkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlT3ZlciA9ICgpID0+IHNldEhvdmVyaW5nKHRydWUpXHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gKCkgPT4gc2V0SG92ZXJpbmcoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIFtob3ZlcmluZywge1xyXG4gICAgICAgIG9uTW91c2VPdmVyLFxyXG4gICAgICAgIG9uTW91c2VPdXRcclxuICAgIH1dXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0SWQgKGlkKSB7XHJcbiAgICBsZXQgY29udmVydGVkSWQgPSBpZC50b1N0cmluZygpXHJcbiAgICB3aGlsZSAoY29udmVydGVkSWQubGVuZ3RoIDwgNykge1xyXG4gICAgICAgIGNvbnZlcnRlZElkID0gJzAnICsgY29udmVydGVkSWRcclxuICAgIH1cclxuICAgIHJldHVybiAgY29udmVydGVkSWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRSdW5uaW5nVGltZSAobWlucykge1xyXG4gICAgaWYgKG1pbnMgPT09IDYwKSB7XHJcbiAgICAgICAgcmV0dXJuICcxaHInO1xyXG4gICAgfSBlbHNlIGlmIChtaW5zIDwgNjApIHtcclxuICAgICAgICByZXR1cm4gbWlucyArICdtaW4nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHtNYXRoLmZsb29yKG1pbnMgLyA2MCl9aHIgJHttaW5zICUgNjB9bWluYFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW92aWVEZXRhaWxzKGlkKSB7XHJcbiAgICAvL0Fja25vd2xlZGdlZCB0aGlzIGlzIG5vIGdvb2QsIGJ1dCBpdCdzIGEgZnJlZSBzZXJ2aWNlIGZvciB3aGljaCBJIGNhbiBnZXQgYW5vdGhlciBBUEkga2V5XHJcbiAgICBjb25zdCBhcGkgPSBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/aT10dCR7aWR9JmFwaWtleT0yYjNhMzM1ZGBcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0UmF0aW5nKGlkLCByYXRpbmcpIHtcclxuICAgIGNvbnN0IGFwaSA9ICgnYXBpL3YxL3JhdGluZycpXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG1vdmllSWQ6IGlkLFxyXG4gICAgICAgICAgICByYXRpbmdWYWx1ZTogcmF0aW5nXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZmV0Y2goYXBpLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFJhdGluZ3MoKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL3JhdGluZ2BcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllRnJvbURCKGlkKSB7XHJcbiAgICBjb25zdCBhcGkgPSBgYXBpL3YxL21vdmllc2BcclxuICAgIHJldHVybiBmZXRjaChhcGkpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vdmllQnlUaXRsZSh0aXRsZSkge1xyXG4gICAgY29uc3QgYXBpID0gJ2FwaS92MS9tb3ZpZXM/J1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBmZXRjaChhcGkgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==