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
/* harmony import */ var _PerformanceWarning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PerformanceWarning */ "./app/components/PerformanceWarning.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieCard */ "./app/components/MovieCard.js");
/* harmony import */ var _utils_movieClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/movieClient */ "./app/utils/movieClient.js");
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

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movieOptions: [],
    display: false,
    loading: false,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var fetchPosterDetails = function fetchPosterDetails() {
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_4__.fetchMovieDetails)(selectedId).then(function (data) {
      return setSelectedMovie(data);
    }) //TODO: handle error
    ["catch"](function (e) {});
  };

  var searchMovie = function searchMovie() {
    dispatch({
      type: 'fetch'
    });
    (0,_utils_movieClient__WEBPACK_IMPORTED_MODULE_4__.fetchMovieByTitle)(search).then(function (data) {
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
    if (action.type === 'fetch') {
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    } else if (action.type === 'success') {
      return {
        movieOptions: action.data,
        loading: false,
        display: true,
        error: null
      };
    } else if (action.type === 'error') {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error.message,
        loading: false
      });
    }
  }

  function updateSelection(_ref) {
    var movie = _ref.movie;
    setSearch(movie.title);
    state.display = false;
    setSelectedId(movie.id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, state.loading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "title-search",
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    },
    placeholder: "Title",
    value: search
  }), state.movieOptions.length > 500 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PerformanceWarning__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: "Over 500 results. Please refine search or risk performance degradation."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: searchMovie,
    disabled: !search
  }, "Search for movie"), state.display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "auto-container"
  }, state.movieOptions.filter(function (_ref2) {
    var title = _ref2.title;
    return title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  }).map(function (movie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onClick: function onClick() {
        return updateSelection({
          movie: movie
        });
      },
      className: "option",
      key: index,
      tabIndex: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, movie.title, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, movie.year));
  })), selectedId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: fetchPosterDetails
  }, "Fetch details")), selectedMovie && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: selectedId,
    title: selectedMovie.Title,
    director: selectedMovie.Director,
    year: parseInt(selectedMovie.Year),
    posterURL: selectedMovie.Poster,
    runningTime: parseInt(selectedMovie.Runtime)
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvUGVyZm9ybWFuY2VXYXJuaW5nLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwic2VsZWN0ZWRNb3ZpZSIsInNldFNlbGVjdGVkTW92aWUiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZU9wdGlvbnMiLCJkaXNwbGF5IiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJkaXNwYXRjaCIsImZldGNoUG9zdGVyRGV0YWlscyIsImZldGNoTW92aWVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlIiwic2VhcmNoTW92aWUiLCJ0eXBlIiwiZmV0Y2hNb3ZpZUJ5VGl0bGUiLCJhY3Rpb24iLCJtZXNzYWdlIiwidXBkYXRlU2VsZWN0aW9uIiwibW92aWUiLCJ0aXRsZSIsImlkIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIm1hcCIsImluZGV4IiwieWVhciIsIlRpdGxlIiwiRGlyZWN0b3IiLCJwYXJzZUludCIsIlllYXIiLCJQb3N0ZXIiLCJSdW50aW1lIiwiUGVyZm9ybWFuY2VXYXJuaW5nIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ1osd0JBQTRCQywyQ0FBQSxDQUFlLEVBQWYsQ0FBNUI7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLHlCQUFvQ0YsMkNBQUEsRUFBcEM7QUFBQTtBQUFBLE1BQU9HLFVBQVA7QUFBQSxNQUFtQkMsYUFB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Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBRWUsU0FBUzZDLGtCQUFULE9BQXVDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2xELHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBdUIsU0FBSyxFQUFDLEtBQTdCO0FBQW1DLFFBQUksRUFBRTtBQUF6QyxJQURKLEVBRUtBLElBRkwsQ0FESjtBQU1ILEMiLCJmaWxlIjoiYXBwX2NvbXBvbmVudHNfSG9tZV9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCBQZXJmb3JtYW5jZVdhcm5pbmcgZnJvbSAnLi9QZXJmb3JtYW5jZVdhcm5pbmcnXHJcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnXHJcbmltcG9ydCB7IGZldGNoTW92aWVEZXRhaWxzLCBmZXRjaE1vdmllQnlUaXRsZSB9IGZyb20gJy4uL3V0aWxzL21vdmllQ2xpZW50J1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtzZWxlY3RlZE1vdmllLCBzZXRTZWxlY3RlZE1vdmllXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vdmllT3B0aW9uczogW10sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgZmV0Y2hQb3N0ZXJEZXRhaWxzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaE1vdmllRGV0YWlscyhzZWxlY3RlZElkKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2VsZWN0ZWRNb3ZpZShkYXRhKSlcclxuICAgICAgICAgICAgLy9UT0RPOiBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7IH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNlYXJjaE1vdmllID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2ZldGNoJyB9KVxyXG4gICAgICAgIGZldGNoTW92aWVCeVRpdGxlKHNlYXJjaClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGF0Y2goeyB0eXBlOiAnZXJyb3InLCBlcnJvciB9KSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmZXRjaFJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ2ZldGNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vdmllT3B0aW9uczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbih7IG1vdmllIH0pIHtcclxuICAgICAgICBzZXRTZWFyY2gobW92aWUudGl0bGUpXHJcbiAgICAgICAgc3RhdGUuZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIHNldFNlbGVjdGVkSWQobW92aWUuaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICA6IDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ndGl0bGUtc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1RpdGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm1vdmllT3B0aW9ucy5sZW5ndGggPiA1MDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVyZm9ybWFuY2VXYXJuaW5nIHRleHQ9J092ZXIgNTAwIHJlc3VsdHMuIFBsZWFzZSByZWZpbmUgc2VhcmNoIG9yIHJpc2sgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NlYXJjaE1vdmllfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXJjaCBmb3IgbW92aWVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmRpc3BsYXkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXV0by1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRpdGxlIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVNlbGVjdGlvbih7IG1vdmllIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9JzAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS50aXRsZX0gLSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bW92aWUueWVhcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hQb3N0ZXJEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZXRjaCBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RlZElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0ZWRNb3ZpZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3I9e3NlbGVjdGVkTW92aWUuRGlyZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3BhcnNlSW50KHNlbGVjdGVkTW92aWUuWWVhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlclVSTD17c2VsZWN0ZWRNb3ZpZS5Qb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdUaW1lPXtwYXJzZUludChzZWxlY3RlZE1vdmllLlJ1bnRpbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFFeGNsYW1hdGlvblRyaWFuZ2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmb3JtYW5jZVdhcm5pbmcgKHsgdGV4dCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3YXJuaW5nIGNlbnRlci10ZXh0Jz5cclxuICAgICAgICAgICAgPEZhRXhjbGFtYXRpb25UcmlhbmdsZSBjb2xvcj0ncmVkJyBzaXplPXsyMn0gLz5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9