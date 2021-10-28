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
/* harmony import */ var _hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useKeyPress */ "./app/hooks/useKeyPress.js");
/* harmony import */ var _CollectionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollectionCard */ "./app/components/CollectionCard.js");
/* harmony import */ var _MoviePopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MoviePopup */ "./app/components/MoviePopup.js");
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
  (0,_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_3__.default)('Escape', function () {
    return setPopup({});
  });

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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollectionCard__WEBPACK_IMPORTED_MODULE_4__.default, {
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
  }) : state.ratings.length === 0 ? 'Your collection is empty!' : typeof popup.Title != 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoviePopup__WEBPACK_IMPORTED_MODULE_5__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0Rpc3BsYXlSYXRpbmdzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZVBvcHVwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9NeUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9ob29rcy91c2VIb3Zlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2hvb2tzL3VzZUtleVByZXNzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvdXRpbHMvbWF0aC5qcyJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uQ2FyZCIsImlkIiwidGl0bGUiLCJ5ZWFyIiwicnVubmluZ1RpbWUiLCJ1c2VyUmF0aW5nIiwic2V0UG9wdXAiLCJSZWFjdCIsImZldGNoUmVkdWNlciIsIm1vdmllRGV0YWlscyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsInVwZGF0ZVBvcHVwIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJ0aGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiUG9zdGVyIiwiY29udmVydFJ1bm5pbmdUaW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGlyZWN0b3IiLCJudW1iZXIiLCJEZXRhaWxzIiwibW92aWUiLCJZZWFyIiwiUnVudGltZSIsIkdlbnJlIiwiRGlyZWN0b3IiLCJXcml0ZXIiLCJBY3RvcnMiLCJBd2FyZHMiLCJSYXRpbmdzIiwiQm94T2ZmaWNlIiwiZmFGaWxtIiwiZmFDbG9jayIsInBhcnNlSW50IiwiZmFTdGFyIiwiZmFVc2VyRWRpdCIsImZhVGhlYXRlck1hc2tzIiwiZmFBd2FyZCIsImZhRG9sbGFyU2lnbiIsImlzUmVxdWlyZWQiLCJEaXNwbGF5UmF0aW5ncyIsInJhdGluZ3MiLCJtYXAiLCJyYXRpbmciLCJTb3VyY2UiLCJWYWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInZhbHVlIiwiaWNvbiIsIk1vdmllUG9wdXAiLCJ0aGVtZSIsIlRoZW1lQ29udGV4dCIsInNob3dOZXdSYXRpbmciLCJzZXRTaG93TmV3UmF0aW5nIiwiVGl0bGUiLCJQbG90IiwicmF0aW5nQ2xpY2siLCJ2YWwiLCJwb3N0UmF0aW5nIiwiTXlDb2xsZWN0aW9uIiwicG9wdXAiLCJmZXRjaFJhdGluZ3MiLCJlIiwidXNlS2V5UHJlc3MiLCJEaXNwbGF5Q29sbGVjdGlvbiIsInJhdGluZ0l0ZW0iLCJtb3ZpZUlkIiwiU3RhclJhdGluZyIsImNvdW50IiwiY29sb3IiLCJvblJhdGluZyIsImhvdmVyVmFsdWUiLCJzZXRIb3ZlclZhbHVlIiwiZ2V0Q29sb3IiLCJmaWxsZWQiLCJ1bmZpbGxlZCIsInN0YXJSYXRpbmciLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsInN0eWxlcyIsImNvbnRhaW5lciIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRvb2x0aXAiLCJib3hTaXppbmciLCJ3aWR0aCIsImJvdHRvbSIsImxlZnQiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiVG9vbHRpcCIsInRleHQiLCJjaGlsZHJlbiIsInVzZUhvdmVyIiwiaG92ZXJpbmciLCJhdHRycyIsInNldEhvdmVyaW5nIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwia2V5Iiwib25LZXlVcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udmVydElkIiwiY29udmVydGVkSWQiLCJ0b1N0cmluZyIsIm1pbnMiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsY0FBVCxPQUFnRjtBQUFBLE1BQXREQyxFQUFzRCxRQUF0REEsRUFBc0Q7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxXQUFxQyxRQUFyQ0EsV0FBcUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUUzRiwwQkFBMEJDLDZDQUFBLENBQ3RCQyxZQURzQixFQUV0QjtBQUNJQyxnQkFBWSxFQUFFLElBRGxCO0FBRUlDLFdBQU8sRUFBRSxLQUZiO0FBR0lDLFNBQUssRUFBRTtBQUhYLEdBRnNCLENBQTFCO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFTQSxXQUFTTCxZQUFULENBQXNCSSxLQUF0QixFQUE2QkUsTUFBN0IsRUFBcUM7QUFDakMsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBSyxPQUFMO0FBQ0ksK0NBQ09ILEtBRFA7QUFFSUYsaUJBQU8sRUFBRTtBQUZiOztBQUlKLFdBQUssU0FBTDtBQUNJLGVBQU87QUFDSEQsc0JBQVksRUFBRUssTUFBTSxDQUFDRSxJQURsQjtBQUVITixpQkFBTyxFQUFFLEtBRk47QUFHSEMs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QVQsQ0FBaUIvQyxDQUFqQixFQUFvQjtBQUNoQixVQUFJQSxDQUFDLENBQUM4QyxHQUFGLEtBQVVBLEdBQWQsRUFBbUI7QUFDZnZHLGNBQU07QUFDVDtBQUNKOztBQUNEeUcsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0YsT0FBakM7QUFDQSxXQUFPO0FBQUEsYUFBTUMsTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ0gsT0FBcEMsQ0FBTjtBQUFBLEtBQVA7QUFDSCxHQVJELEVBUUcsRUFSSDtBQVNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFFTyxTQUFTSSxTQUFULENBQW9CekgsRUFBcEIsRUFBd0I7QUFDM0IsTUFBSTBILFdBQVcsR0FBRzFILEVBQUUsQ0FBQzJILFFBQUgsRUFBbEI7O0FBQ0EsU0FBT0QsV0FBVyxDQUFDdkcsTUFBWixHQUFxQixDQUE1QixFQUErQjtBQUMzQnVHLGVBQVcsR0FBRyxNQUFNQSxXQUFwQjtBQUNIOztBQUNELFNBQVFBLFdBQVI7QUFDSDtBQUVNLFNBQVNwRyxrQkFBVCxDQUE2QnNHLElBQTdCLEVBQW1DO0FBQ3RDLE1BQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2IsV0FBTyxLQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlBLElBQUksR0FBRyxFQUFYLEVBQWU7QUFDbEIsV0FBT0EsSUFBSSxHQUFHLEtBQWQ7QUFDSCxHQUZNLE1BRUE7QUFDSCxxQkFBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLElBQUksR0FBRyxFQUFsQixDQUFWLGdCQUFxQ0EsSUFBSSxHQUFHLEVBQTVDO0FBQ0g7QUFDSixDIiwiZmlsZSI6ImFwcF9jb21wb25lbnRzX015Q29sbGVjdGlvbl9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNsb2NrLCBGYUZpbG0sIEZhU3RhciwgRmFDaGVjayB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgeyBjb252ZXJ0UnVubmluZ1RpbWUgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsZWN0aW9uQ2FyZCh7IGlkLCB0aXRsZSwgeWVhciwgcnVubmluZ1RpbWUsIHVzZXJSYXRpbmcsIHNldFBvcHVwIH0pIHtcclxuICAgICAgICBcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZURldGFpbHM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5kYXRhLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvcHVwICgpIHtcclxuICAgICAgICBzdGF0ZS5tb3ZpZURldGFpbHMudXNlclJhdGluZyA9IHVzZXJSYXRpbmc7XHJcbiAgICAgICAgc3RhdGUubW92aWVEZXRhaWxzLmlkID0gaWQ7XHJcbiAgICAgICAgc2V0UG9wdXAoc3RhdGUubW92aWVEZXRhaWxzKVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PlxyXG4gICAgICAgIGZldGNoTW92aWVEZXRhaWxzKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3IgfSkpXHJcbiAgICAgICAgLCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBiZy1saWdodCBtZWRpdW0tdGV4dCcgb25DbGljaz17KCkgPT4gdXBkYXRlUG9wdXAoKX0gPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0ZXh0PSdGZXRjaGluZyBtb3ZpZSBkZXRhaWxzJyAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGl0bGUtY29udGFpbmVyIGZsZXgtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdoZWFkZXItc20gY2VudGVyLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7aWR9L2B9IHRhcmdldD1cIl9ibGFua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZS5sZW5ndGggPiA0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpdGxlLnN1YnN0cmluZygwLCA0MikgKyAnLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdjZW50ZXItdGV4dCBib2xkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJSYXRpbmd9IDxGYVN0YXIgc3Ryb2tlPSdibGFjaycgc3Ryb2tlV2lkdGg9ezIwfSBjb2xvcj1cImdvbGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLm1vdmllRGV0YWlscyAmJiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW92aWUtcG9zdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N0YXRlLm1vdmllRGV0YWlscy5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBvc3RlciBmb3IgJHt0aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGV4LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGaWxtIGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xlZnQxMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGVmdDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHJ1bm5pbmdUaW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkNvbGxlY3Rpb25DYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGRpcmVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcnVubmluZ1RpbWU6IFByb3BUeXBlcy5udW1iZXJcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb252ZXJ0UnVubmluZ1RpbWUgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RhciwgZmFVc2VyRWRpdCwgZmFUaGVhdGVyTWFza3MsIGZhQXdhcmQsIGZhQ2xvY2ssIGZhRmlsbSwgZmFEb2xsYXJTaWduIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBWc2NNZWdhcGhvbmUgfSBmcm9tICdyZWFjdC1pY29ucy92c2MnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuaW1wb3J0IERpc3BsYXlSYXRpbmdzIGZyb20gJy4vRGlzcGxheVJhdGluZ3MnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbHMoeyBtb3ZpZSB9KSB7XHJcbiAgICBjb25zdCB7IFllYXIsIFJ1bnRpbWUsIEdlbnJlLCBEaXJlY3RvciwgV3JpdGVyLFxyXG4gICAgICAgIEFjdG9ycywgQXdhcmRzLCBSYXRpbmdzLCBCb3hPZmZpY2UgfSA9IG1vdmllXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgIHtEaXJlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJEaXJlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnNjTWVnYXBob25lIGNvbG9yPSdyZ2IoMjIyLDMwLDIzNiknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1llYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUmVsZWFzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbG19IGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UnVudGltZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSdW50aW1lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KFJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QWN0b3JzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlN0YXJyaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9JyMyMUFEQTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtXcml0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiV3JpdHRlbiBieVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJFZGl0fSBjb2xvcj0nIzYwNjA2MCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXcml0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0dlbnJlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkdlbnJlKHMpXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGhlYXRlck1hc2tzfSBjb2xvcj0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0dlbnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtBd2FyZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQXdhcmRzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXdhcmR9IGNvbG9yPSdibHVlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0F3YXJkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheVJhdGluZ3MgcmF0aW5ncz17UmF0aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIHtCb3hPZmZpY2UgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQm94IG9mZmljZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvbGxhclNpZ259IGNvbG9yPScjODViYjY1JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0JveE9mZmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlSYXRpbmdzKHsgcmF0aW5ncyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHJhdGluZ3MubWFwKChyYXRpbmcgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJhdGluZy5Tb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0ludGVybmV0IE1vdmllIERhdGFiYXNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9J0lNREInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmF0aW5nLlNvdXJjZSArIHJhdGluZy5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW1kYicgY29sb3I9J3llbGxvdycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0aW5nLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ1JvdHRlbiBUb21hdG9lcyc6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByYXRpbmcuVmFsdWUuaW5kZXhPZignJScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF0aW5nLlZhbHVlLnN1YnN0cmluZygwLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IHBhcnNlSW50KHZhbHVlKSA8IDYwID8gJ/CfkqkgJyA6ICfwn42FICdcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PSdSb3R0ZW4gVG9tYXRvZXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JhdGluZy5Tb3VyY2UgKyByYXRpbmcuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyYXRpbmcuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlSYXRpbmdzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9EZXRhaWxzJ1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi9TdGFyUmF0aW5nJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCB7IHBvc3RSYXRpbmcgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVQb3B1cCh7IG1vdmllLCBzZXRQb3B1cCB9KSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFtzaG93TmV3UmF0aW5nLCBzZXRTaG93TmV3UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHsgVGl0bGUsIFBvc3RlciwgWWVhciwgUGxvdCB9ID0gbW92aWVcclxuXHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBtb3ZpZS51c2VyUmF0aW5nID0gdmFsXHJcbiAgICAgICAgcG9zdFJhdGluZyhtb3ZpZS5pZCwgdmFsKVxyXG4gICAgICAgIHNldFNob3dOZXdSYXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtUaXRsZX08c3Bhbj4gKHtZZWFyfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IXNob3dOZXdSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8VG9vbHRpcCB0ZXh0PSdDaGFuZ2UgcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdSYXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS51c2VyUmF0aW5nfSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9J3llbGxvdycgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e21vdmllLnVzZXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3JhdGluZ0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3BvcHVwLXBvc3Rlcicgc3JjPXtQb3N0ZXJ9IGFsdD17YHBvc3RlciBmb3IgJHtUaXRsZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbHMgbW92aWU9e21vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxvdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e1Bsb3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cCh7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbk1vdmllUG9wdXAucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllUG9wdXBcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IHsgZmV0Y2hSYXRpbmdzIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tICcuLi9ob29rcy91c2VLZXlQcmVzcydcclxuaW1wb3J0IENvbGxlY3Rpb25DYXJkIGZyb20gJy4vQ29sbGVjdGlvbkNhcmQnXHJcbmltcG9ydCBNb3ZpZVBvcHVwIGZyb20gJy4vTW92aWVQb3B1cCdcclxuXHJcbmZ1bmN0aW9uIE15Q29sbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoe30pXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJhdGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUmF0aW5ncygpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUtleVByZXNzKCdFc2NhcGUnLCAoKSA9PiBzZXRQb3B1cCh7fSkpXHJcblxyXG4gICAgZnVuY3Rpb24gZmV0Y2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZldGNoJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ0ZldGNoIGZhaWxlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpc3BsYXlDb2xsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xsZWN0aW9uIHNwYWNlLWFyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUucmF0aW5ncy5tYXAoKHJhdGluZ0l0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCB2YWx1ZSwgbW92aWUgfSA9IHJhdGluZ0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCB5ZWFyIH0gPSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5pZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxlY3Rpb25DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e21vdmllLnJ1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmc9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwPXtzZXRQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIHRleHQ9J0xvYWRpbmcgeW91ciBjb2xsZWN0aW9uJyAvPlxyXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5yYXRpbmdzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ1lvdXIgY29sbGVjdGlvbiBpcyBlbXB0eSEnXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlb2YgcG9wdXAuVGl0bGUgIT0gJ3VuZGVmaW5lZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPE1vdmllUG9wdXAgbW92aWU9e3BvcHVwfSBzZXRQb3B1cD17c2V0UG9wdXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPERpc3BsYXlDb2xsZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbGxlY3Rpb24iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJSYXRpbmcoeyBjb3VudCA9IDEwLCByYXRpbmcgPSAwLCBjb2xvciwgb25SYXRpbmcgfSkge1xyXG4gICAgY29uc3QgW2hvdmVyVmFsdWUsIHNldEhvdmVyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IGluZGV4ID0+IHtcclxuICAgICAgICBpZiAoaG92ZXJWYWx1ZSA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkXHJcbiAgICAgICAgfSBlbHNlIGlmICghaG92ZXJWYWx1ZSAmJiByYXRpbmcgPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmZpbGxlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IudW5maWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhclJhdGluZyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBBcnJheShjb3VudClcclxuICAgICAgICAgICAgLmZpbGwoMClcclxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgIC5tYXAoaW5kZXggPT5cclxuICAgICAgICAgICAgICAgIDxGYVN0YXJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmEtc3RhcidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3IudW5maWxsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SYXRpbmcoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRDb2xvcihpbmRleCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SG92ZXJWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SG92ZXJWYWx1ZSgwKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH0sIFtjb3VudCwgcmF0aW5nLCBob3ZlclZhbHVlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFyLXJhdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TdGFyUmF0aW5nLnByb3BUeXBlcyA9IHtcclxuICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25SYXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29sb3I6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuU3RhclJhdGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb2xvcjoge1xyXG4gICAgICAgIGZpbGxlZDogJyNmNWViM2InLFxyXG4gICAgICAgIHVuZmlsbGVkOiBcIiNEQ0RDRENcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuLi9ob29rcy91c2VIb3ZlcidcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxNjBweCcsXHJcbiAgICAgICAgYm90dG9tOiAnMTAwJScsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJy04MHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2hzbGEoMCwgMCUsIDIwJSwgMC45KScsXHJcbiAgICAgICAgcGFkZGluZzogJzdweCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVG9vbHRpcCh7IHRleHQsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtob3ZlcmluZywgYXR0cnNdID0gdXNlSG92ZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gey4uLmF0dHJzfT5cclxuICAgICAgICAgICAge2hvdmVyaW5nID09PSB0cnVlICYmIDxkaXYgc3R5bGU9e3N0eWxlcy50b29sdGlwfT57dGV4dH08L2Rpdj59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvdmVyKCkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlT3ZlciA9ICgpID0+IHNldEhvdmVyaW5nKHRydWUpXHJcbiAgICBjb25zdCBvbk1vdXNlT3V0ID0gKCkgPT4gc2V0SG92ZXJpbmcoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIFtob3ZlcmluZywge1xyXG4gICAgICAgIG9uTW91c2VPdmVyLFxyXG4gICAgICAgIG9uTW91c2VPdXRcclxuICAgIH1dXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VLZXlQcmVzcyhrZXksIGFjdGlvbikge1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBvbktleVVwKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgb25LZXlVcCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIG9uS2V5VXApO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9