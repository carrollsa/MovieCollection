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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvQ29sbGVjdGlvbkNhcmQuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL0Rpc3BsYXlSYXRpbmdzLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9Nb3ZpZVBvcHVwLmpzIiwid2VicGFjazovL21vdmllcmVjb21tZW5kZXJ3ZWIvLi9hcHAvY29tcG9uZW50cy9NeUNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1N0YXJSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9jb21wb25lbnRzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVyZWNvbW1lbmRlcndlYi8uL2FwcC9ob29rcy91c2VIb3Zlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL3V0aWxzL21hdGguanMiXSwibmFtZXMiOlsiQ29sbGVjdGlvbkNhcmQiLCJpZCIsInRpdGxlIiwieWVhciIsInJ1bm5pbmdUaW1lIiwidXNlclJhdGluZyIsInNldFBvcHVwIiwiUmVhY3QiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZURldGFpbHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJ1cGRhdGVQb3B1cCIsImZldGNoTW92aWVEZXRhaWxzIiwidGhlbiIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBvc3RlciIsImNvbnZlcnRSdW5uaW5nVGltZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImRpcmVjdG9yIiwibnVtYmVyIiwiRGV0YWlscyIsIm1vdmllIiwiWWVhciIsIlJ1bnRpbWUiLCJHZW5yZSIsIkRpcmVjdG9yIiwiV3JpdGVyIiwiQWN0b3JzIiwiQXdhcmRzIiwiUmF0aW5ncyIsIkJveE9mZmljZSIsImZhRmlsbSIsImZhQ2xvY2siLCJwYXJzZUludCIsImZhU3RhciIsImZhVXNlckVkaXQiLCJmYVRoZWF0ZXJNYXNrcyIsImZhQXdhcmQiLCJmYURvbGxhclNpZ24iLCJpc1JlcXVpcmVkIiwiRGlzcGxheVJhdGluZ3MiLCJyYXRpbmdzIiwibWFwIiwicmF0aW5nIiwiU291cmNlIiwiVmFsdWUiLCJpbmRleCIsImluZGV4T2YiLCJ2YWx1ZSIsImljb24iLCJNb3ZpZVBvcHVwIiwidGhlbWUiLCJUaGVtZUNvbnRleHQiLCJzaG93TmV3UmF0aW5nIiwic2V0U2hvd05ld1JhdGluZyIsIlRpdGxlIiwiUGxvdCIsInJhdGluZ0NsaWNrIiwidmFsIiwicG9zdFJhdGluZyIsIk15Q29sbGVjdGlvbiIsInBvcHVwIiwiZmV0Y2hSYXRpbmdzIiwiZSIsIkRpc3BsYXlDb2xsZWN0aW9uIiwicmF0aW5nSXRlbSIsIm1vdmllSWQiLCJTdGFyUmF0aW5nIiwiY291bnQiLCJjb2xvciIsIm9uUmF0aW5nIiwiaG92ZXJWYWx1ZSIsInNldEhvdmVyVmFsdWUiLCJnZXRDb2xvciIsImZpbGxlZCIsInVuZmlsbGVkIiwic3RhclJhdGluZyIsIkFycmF5IiwiZmlsbCIsIl8iLCJpIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwic3R5bGVzIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJkaXNwbGF5IiwidG9vbHRpcCIsImJveFNpemluZyIsIndpZHRoIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJUb29sdGlwIiwidGV4dCIsImNoaWxkcmVuIiwidXNlSG92ZXIiLCJob3ZlcmluZyIsImF0dHJzIiwic2V0SG92ZXJpbmciLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJjb252ZXJ0SWQiLCJjb252ZXJ0ZWRJZCIsInRvU3RyaW5nIiwibWlucyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxjQUFULE9BQWdGO0FBQUEsTUFBdERDLEVBQXNELFFBQXREQSxFQUFzRDtBQUFBLE1BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLFdBQXFDLFFBQXJDQSxXQUFxQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBRTNGLDBCQUEwQkMsNkNBQUEsQ0FDdEJDLFlBRHNCLEVBRXRCO0FBQ0lDLGdCQUFZLEVBQUUsSUFEbEI7QUFFSUMsV0FBTyxFQUFFLEtBRmI7QUFHSUMsU0FBSyxFQUFFO0FBSFgsR0FGc0IsQ0FBMUI7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQVNBLFdBQVNMLFlBQVQsQ0FBc0JJLEtBQXRCLEVBQTZCRSxNQUE3QixFQUFxQztBQUNqQyxZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxXQUFLLE9BQUw7QUFDSSwrQ0FDT0gsS0FEUDtBQUVJRixpQkFBTyxFQUFFO0FBRmI7O0FBSUosV0FBSyxTQUFMO0FBQ0ksZUFBTztBQUNIRCxzQkFBWSxFQUFFSyxNQUFNLENBQUNFLElBRGxCO0FBRUhOLGlCQUFPLEVBQUUsS0FGTjtBQUdIQyxlQUFLLEVBQUU7QUFISixTQUFQOztBQUtKLFdBQUssT0FBTDtBQUNJLCtDQUNPQyxLQURQO0FBRUlELGVBQUssRUFBRUcsTUFBTSxDQUFDRSxJQUFQLENBQVlMLEtBRnZCO0FBR0lELGlCQUFPLEVBQUU7QUFIYjtBQWJSO0FBbUJIOztBQUVELFdB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LEVBQWU7QUFDbEIsV0FBT0EsSUFBSSxHQUFHLEtBQWQ7QUFDSCxHQUZNLE1BRUE7QUFDSCxxQkFBVUMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLElBQUksR0FBRyxFQUFsQixDQUFWLGdCQUFxQ0EsSUFBSSxHQUFHLEVBQTVDO0FBQ0g7QUFDSixDIiwiZmlsZSI6ImFwcF9jb21wb25lbnRzX015Q29sbGVjdGlvbl9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYUNsb2NrLCBGYUZpbG0sIEZhU3RhciwgRmFDaGVjayB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscyB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5pbXBvcnQgeyBjb252ZXJ0UnVubmluZ1RpbWUgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsZWN0aW9uQ2FyZCh7IGlkLCB0aXRsZSwgeWVhciwgcnVubmluZ1RpbWUsIHVzZXJSYXRpbmcsIHNldFBvcHVwIH0pIHtcclxuICAgICAgICBcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZURldGFpbHM6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5kYXRhLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvcHVwICgpIHtcclxuICAgICAgICBzdGF0ZS5tb3ZpZURldGFpbHMudXNlclJhdGluZyA9IHVzZXJSYXRpbmc7XHJcbiAgICAgICAgc3RhdGUubW92aWVEZXRhaWxzLmlkID0gaWQ7XHJcbiAgICAgICAgc2V0UG9wdXAoc3RhdGUubW92aWVEZXRhaWxzKVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PlxyXG4gICAgICAgIGZldGNoTW92aWVEZXRhaWxzKGlkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3IgfSkpXHJcbiAgICAgICAgLCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBiZy1saWdodCBtZWRpdW0tdGV4dCcgb25DbGljaz17KCkgPT4gdXBkYXRlUG9wdXAoKX0gPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyB0ZXh0PSdGZXRjaGluZyBtb3ZpZSBkZXRhaWxzJyAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGl0bGUtY29udGFpbmVyIGZsZXgtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdoZWFkZXItc20gY2VudGVyLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmsnIGhyZWY9e2BodHRwczovL3d3dy5pbWRiLmNvbS90aXRsZS90dCR7aWR9L2B9IHRhcmdldD1cIl9ibGFua1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZS5sZW5ndGggPiA0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRpdGxlLnN1YnN0cmluZygwLCA0MikgKyAnLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdjZW50ZXItdGV4dCBib2xkJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJSYXRpbmd9IDxGYVN0YXIgc3Ryb2tlPSdibGFjaycgc3Ryb2tlV2lkdGg9ezIwfSBjb2xvcj1cImdvbGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLm1vdmllRGV0YWlscyAmJiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW92aWUtcG9zdGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N0YXRlLm1vdmllRGV0YWlscy5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHBvc3RlciBmb3IgJHt0aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGV4LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGaWxtIGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xlZnQxMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGVmdDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQ2xvY2sgY29sb3I9J3JnYigyMTksMTU1LDU5KScgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHJ1bm5pbmdUaW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbkNvbGxlY3Rpb25DYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGRpcmVjdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcnVubmluZ1RpbWU6IFByb3BUeXBlcy5udW1iZXJcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb252ZXJ0UnVubmluZ1RpbWUgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RhciwgZmFVc2VyRWRpdCwgZmFUaGVhdGVyTWFza3MsIGZhQXdhcmQsIGZhQ2xvY2ssIGZhRmlsbSwgZmFEb2xsYXJTaWduIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBWc2NNZWdhcGhvbmUgfSBmcm9tICdyZWFjdC1pY29ucy92c2MnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuaW1wb3J0IERpc3BsYXlSYXRpbmdzIGZyb20gJy4vRGlzcGxheVJhdGluZ3MnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbHMoeyBtb3ZpZSB9KSB7XHJcbiAgICBjb25zdCB7IFllYXIsIFJ1bnRpbWUsIEdlbnJlLCBEaXJlY3RvciwgV3JpdGVyLFxyXG4gICAgICAgIEFjdG9ycywgQXdhcmRzLCBSYXRpbmdzLCBCb3hPZmZpY2UgfSA9IG1vdmllXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25vLWJ1bGxldHMgY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgIHtEaXJlY3RvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJEaXJlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VnNjTWVnYXBob25lIGNvbG9yPSdyZ2IoMjIyLDMwLDIzNiknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1llYXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiUmVsZWFzZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbG19IGNvbG9yPSdyZ2IoMTI5LCAxOTUsIDI0NSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7WWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7UnVudGltZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9XCJSdW50aW1lXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvY2t9IGNvbG9yPSdyZ2IoMjE5LDE1NSw1OSknIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udmVydFJ1bm5pbmdUaW1lKHBhcnNlSW50KFJ1bnRpbWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7QWN0b3JzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIlN0YXJyaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9JyMyMUFEQTgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWN0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtXcml0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiV3JpdHRlbiBieVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJFZGl0fSBjb2xvcj0nIzYwNjA2MCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtXcml0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge0dlbnJlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD1cIkdlbnJlKHMpXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGhlYXRlck1hc2tzfSBjb2xvcj0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0dlbnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtBd2FyZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQXdhcmRzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXdhcmR9IGNvbG9yPSdibHVlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0F3YXJkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RGlzcGxheVJhdGluZ3MgcmF0aW5ncz17UmF0aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIHtCb3hPZmZpY2UgJiZcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PVwiQm94IG9mZmljZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYURvbGxhclNpZ259IGNvbG9yPScjODViYjY1JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0JveE9mZmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRGV0YWlscy5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb3ZpZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCdcclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlSYXRpbmdzKHsgcmF0aW5ncyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHJhdGluZ3MubWFwKChyYXRpbmcgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJhdGluZy5Tb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0ludGVybmV0IE1vdmllIERhdGFiYXNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9J0lNREInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmF0aW5nLlNvdXJjZSArIHJhdGluZy5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtaW1kYicgY29sb3I9J3llbGxvdycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0aW5nLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ1JvdHRlbiBUb21hdG9lcyc6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByYXRpbmcuVmFsdWUuaW5kZXhPZignJScpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcmF0aW5nLlZhbHVlLnN1YnN0cmluZygwLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IHBhcnNlSW50KHZhbHVlKSA8IDYwID8gJ/CfkqkgJyA6ICfwn42FICdcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PSdSb3R0ZW4gVG9tYXRvZXMnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JhdGluZy5Tb3VyY2UgKyByYXRpbmcuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyYXRpbmcuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlSYXRpbmdzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9EZXRhaWxzJ1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi9TdGFyUmF0aW5nJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnXHJcbmltcG9ydCB7IHBvc3RSYXRpbmcgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVQb3B1cCh7IG1vdmllLCBzZXRQb3B1cCB9KSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IFtzaG93TmV3UmF0aW5nLCBzZXRTaG93TmV3UmF0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHsgVGl0bGUsIFBvc3RlciwgWWVhciwgUGxvdCB9ID0gbW92aWVcclxuXHJcbiAgICBjb25zdCByYXRpbmdDbGljayA9ICh2YWwpID0+IHtcclxuICAgICAgICBtb3ZpZS51c2VyUmF0aW5nID0gdmFsXHJcbiAgICAgICAgcG9zdFJhdGluZyhtb3ZpZS5pZCwgdmFsKVxyXG4gICAgICAgIHNldFNob3dOZXdSYXRpbmcoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtUaXRsZX08c3Bhbj4gKHtZZWFyfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IXNob3dOZXdSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8VG9vbHRpcCB0ZXh0PSdDaGFuZ2UgcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnIG9uQ2xpY2s9eygpID0+IHNldFNob3dOZXdSYXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS51c2VyUmF0aW5nfSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gY29sb3I9J3llbGxvdycgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdyYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJSYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e21vdmllLnVzZXJSYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3JhdGluZ0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3BvcHVwLXBvc3Rlcicgc3JjPXtQb3N0ZXJ9IGFsdD17YHBvc3RlciBmb3IgJHtUaXRsZX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbHMgbW92aWU9e21vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxvdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e1Bsb3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZSdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cCh7fSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbk1vdmllUG9wdXAucHJvcFR5cGVzID0ge1xyXG4gICAgbW92aWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllUG9wdXBcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IHsgZmV0Y2hSYXRpbmdzIH0gZnJvbSAnLi4vdXRpbHMvbW92aWVDbGllbnQnXHJcbmltcG9ydCBDb2xsZWN0aW9uQ2FyZCBmcm9tICcuL0NvbGxlY3Rpb25DYXJkJ1xyXG5pbXBvcnQgTW92aWVQb3B1cCBmcm9tICcuL01vdmllUG9wdXAnXHJcblxyXG5mdW5jdGlvbiBNeUNvbGxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByYXRpbmdzOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFJhdGluZ3MoKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmV0Y2gnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICByYXRpbmdzOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnRmV0Y2ggZmFpbGVkLicsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGlzcGxheUNvbGxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbGxlY3Rpb24gc3BhY2UtYXJvdW5kJz5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5yYXRpbmdzLm1hcCgocmF0aW5nSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIHZhbHVlLCBtb3ZpZSB9ID0gcmF0aW5nSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIHllYXIgfSA9IG1vdmllXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aWVJZCA9IG1vdmllLmlkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGVjdGlvbkNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bW92aWVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17eWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGltZT17bW92aWUucnVubmluZ1RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJhdGluZz17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXA9e3NldFBvcHVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gPExvYWRpbmcgdGV4dD0nTG9hZGluZyB5b3VyIGNvbGxlY3Rpb24nIC8+XHJcbiAgICAgICAgICAgICAgICA6IHN0YXRlLnJhdGluZ3MubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnWW91ciBjb2xsZWN0aW9uIGlzIGVtcHR5ISdcclxuICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiBwb3B1cC5UaXRsZSAhPSAndW5kZWZpbmVkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8TW92aWVQb3B1cCBtb3ZpZT17cG9wdXB9IHNldFBvcHVwPXtzZXRQb3B1cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8RGlzcGxheUNvbGxlY3Rpb24gLz5cclxuICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29sbGVjdGlvbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhclJhdGluZyh7IGNvdW50ID0gMTAsIHJhdGluZyA9IDAsIGNvbG9yLCBvblJhdGluZyB9KSB7XHJcbiAgICBjb25zdCBbaG92ZXJWYWx1ZSwgc2V0SG92ZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGlmIChob3ZlclZhbHVlID49IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5maWxsZWRcclxuICAgICAgICB9IGVsc2UgaWYgKCFob3ZlclZhbHVlICYmIHJhdGluZyA+PSBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuZmlsbGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci51bmZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFyUmF0aW5nID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5KGNvdW50KVxyXG4gICAgICAgICAgICAuZmlsbCgwKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiBpICsgMSlcclxuICAgICAgICAgICAgLm1hcChpbmRleCA9PlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYS1zdGFyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvci51bmZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJhdGluZyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGdldENvbG9yKGluZGV4KSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlclZhbHVlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRIb3ZlclZhbHVlKDApfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW2NvdW50LCByYXRpbmcsIGhvdmVyVmFsdWVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXItcmF0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhclJhdGluZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvblJhdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5TdGFyUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgICAgZmlsbGVkOiAnI2Y1ZWIzYicsXHJcbiAgICAgICAgdW5maWxsZWQ6IFwiI0RDRENEQ1wiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4uL2hvb2tzL3VzZUhvdmVyJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzE2MHB4JyxcclxuICAgICAgICBib3R0b206ICcxMDAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnLTgwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnaHNsYSgwLCAwJSwgMjAlLCAwLjkpJyxcclxuICAgICAgICBwYWRkaW5nOiAnN3B4JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sdGlwKHsgdGV4dCwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2hvdmVyaW5nLCBhdHRyc10gPSB1c2VIb3ZlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfSB7Li4uYXR0cnN9PlxyXG4gICAgICAgICAgICB7aG92ZXJpbmcgPT09IHRydWUgJiYgPGRpdiBzdHlsZT17c3R5bGVzLnRvb2x0aXB9Pnt0ZXh0fTwvZGl2Pn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG92ZXIoKSB7XHJcbiAgICBjb25zdCBbaG92ZXJpbmcsIHNldEhvdmVyaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG9uTW91c2VPdmVyID0gKCkgPT4gc2V0SG92ZXJpbmcodHJ1ZSlcclxuICAgIGNvbnN0IG9uTW91c2VPdXQgPSAoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gW2hvdmVyaW5nLCB7XHJcbiAgICAgICAgb25Nb3VzZU92ZXIsXHJcbiAgICAgICAgb25Nb3VzZU91dFxyXG4gICAgfV1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZCAoaWQpIHtcclxuICAgIGxldCBjb252ZXJ0ZWRJZCA9IGlkLnRvU3RyaW5nKClcclxuICAgIHdoaWxlIChjb252ZXJ0ZWRJZC5sZW5ndGggPCA3KSB7XHJcbiAgICAgICAgY29udmVydGVkSWQgPSAnMCcgKyBjb252ZXJ0ZWRJZFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICBjb252ZXJ0ZWRJZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJ1bm5pbmdUaW1lIChtaW5zKSB7XHJcbiAgICBpZiAobWlucyA9PT0gNjApIHtcclxuICAgICAgICByZXR1cm4gJzFocic7XHJcbiAgICB9IGVsc2UgaWYgKG1pbnMgPCA2MCkge1xyXG4gICAgICAgIHJldHVybiBtaW5zICsgJ21pbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGAke01hdGguZmxvb3IobWlucyAvIDYwKX1ociAke21pbnMgJSA2MH1taW5gXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9