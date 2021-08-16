(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_MyCollection_js"],{

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
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieCard */ "./app/components/MovieCard.js");
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      movies = _React$useState2[0],
      setMovies = _React$useState2[1];

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
  }, []); // // Dropped in favor of lazier fetch of further details
  // React.useEffect(() => {
  //     ratings.map((rating) => {
  //         fetchMovieDetails(rating.movieId)
  //             .then((fullMovie) => setMovies((movies) => {
  //                 movies.push(fullMovie)
  //             }))
  //     })
  // }, [state.ratings])

  function fetchReducer(state, action) {
    if (action.type === 'fetch') {
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    } else if (action.type === 'success') {
      return {
        ratings: action.data,
        loading: false,
        error: null
      };
    } else if (action.type === 'error') {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: 'Fetch failed.',
        loading: false
      });
    }
  }

  function DisplayCollection() {
    console.log(state.ratings);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, state.ratings.map(function (ratingItem) {
      var id = ratingItem.id,
          ratingValue = ratingItem.ratingValue,
          time = ratingItem.time,
          movie = ratingItem.movie;
      var title = movie.title,
          year = movie.year,
          runningTime = movie.runningTime;
      var movieId = movie.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: movieId,
        title: title,
        year: year,
        runningTime: movie.runningTime,
        collectionView: true,
        userRating: ratingValue
      }));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, {
    text: "Loading your collection"
  }), state.ratings.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Your collection is empty!") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisplayCollection, {
    ratings: state.ratings
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCollection);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTXlDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk15Q29sbGVjdGlvbiIsIlJlYWN0IiwibW92aWVzIiwic2V0TW92aWVzIiwiZmV0Y2hSZWR1Y2VyIiwicmF0aW5ncyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJmZXRjaFJhdGluZ3MiLCJ0aGVuIiwiZGF0YSIsInR5cGUiLCJlIiwiYWN0aW9uIiwiRGlzcGxheUNvbGxlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibWFwIiwicmF0aW5nSXRlbSIsImlkIiwicmF0aW5nVmFsdWUiLCJ0aW1lIiwibW92aWUiLCJ0aXRsZSIsInllYXIiLCJydW5uaW5nVGltZSIsIm1vdmllSWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQix3QkFBNEJDLDJDQUFBLENBQWUsRUFBZixDQUE1QjtBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsMEJBQTBCRiw2Q0FBQSxDQUN0QkcsWUFEc0IsRUFFdEI7QUFDSUMsV0FBTyxFQUFFLEVBRGI7QUFFSUMsV0FBTyxFQUFFLElBRmI7QUFHSUMsU0FBSyxFQUFFO0FBSFgsR0FGc0IsQ0FBMUI7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQVNBUiw4Q0FBQSxDQUFnQixZQUFNO0FBQ2xCUyxvRUFBWSxHQUNQQyxJQURMLENBQ1UsVUFBQ0MsSUFBRDtBQUFBLGFBQVVILFFBQVEsQ0FBQztBQUFFSSxZQUFJLEVBQUUsU0FBUjtBQUFtQkQsWUFBSSxFQUFKQTtBQUFuQixPQUFELENBQWxCO0FBQUEsS0FEVixXQUVXLFVBQUNFLENBQUQsRUFBTztBQUNWTCxjQUFRLENBQUM7QUFBRUksWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFSO0FBQ0gsS0FKTDtBQUtILEdBTkQsRUFNRyxFQU5ILEVBWm9CLENBb0JwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBU1QsWUFBVCxDQUFzQkksS0FBdEIsRUFBNkJPLE1BQTdCLEVBQXFDO0FBQ2pDLFFBQUlBLE1BQU0sQ0FBQ0YsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUN6Qiw2Q0FDT0wsS0FEUDtBQUVJRixlQUFPLEVBQUU7QUFGYjtBQUlILEtBTEQsTUFLTyxJQUFJUyxNQUFNLENBQUNGLElBQVAsS0FBZ0IsU0FBcEIsRUFBK0I7QUFDbEMsYUFBTztBQUNIUixlQUFPLEVBQUVVLE1BQU0sQ0FBQ0gsSUFEYjtBQUVITixlQUFPLEVBQUUsS0FGTjtBQUdIQyxhQUFLLEVBQUU7QUFISixPQUFQO0FBS0gsS0FOTSxNQU1BLElBQUlRLE1BQU0sQ0FBQ0YsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUNoQyw2Q0FDT0wsS0FEUDtBQUVJRCxhQUFLLEVBQUUsZUFGWDtBQUdJRCxlQUFPLEVBQUU7QUFIYjtBQUtIO0FBQ0o7O0FBRUQsV0FBU1UsaUJBQVQsR0FBOEI7QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFLLENBQUNILE9BQWxCO0FBQ0Esd0JBQ0ksNkRBQ0tHLEtBQUssQ0FBQ0gsT0FBTixDQUFjYyxHQUFkLENBQWtCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDL0IsVUFBUUMsRUFBUixHQUF5Q0QsVUFBekMsQ0FBUUMsRUFBUjtBQUFBLFVBQVlDLFdBQVosR0FBeUNGLFVBQXpDLENBQVlFLFdBQVo7QUFBQSxVQUF5QkMsSUFBekIsR0FBeUNILFVBQXpDLENBQXlCRyxJQUF6QjtBQUFBLFVBQStCQyxLQUEvQixHQUF5Q0osVUFBekMsQ0FBK0JJLEtBQS9CO0FBQ0EsVUFBUUMsS0FBUixHQUFxQ0QsS0FBckMsQ0FBUUMsS0FBUjtBQUFBLFVBQWVDLElBQWYsR0FBcUNGLEtBQXJDLENBQWVFLElBQWY7QUFBQSxVQUFxQkMsV0FBckIsR0FBcUNILEtBQXJDLENBQXFCRyxXQUFyQjtBQUNBLFVBQU1DLE9BQU8sR0FBR0osS0FBSyxDQUFDSCxFQUF0QjtBQUVBLDBCQUNJO0FBQUksV0FBRyxFQUFFQTtBQUFULHNCQUNJLGlEQUFDLCtDQUFEO0FBQ0ksVUFBRSxFQUFFTyxPQURSO0FBRUksYUFBSyxFQUFFSCxLQUZYO0FBR0ksWUFBSSxFQUFFQyxJQUhWO0FBSUksbUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxXQUp2QjtBQUtJLHNCQUFjLEVBQUUsSUFMcEI7QUFNSSxrQkFBVSxFQUFFTDtBQU5oQixRQURKLENBREo7QUFZSCxLQWpCQSxDQURMLENBREo7QUF1Qkg7O0FBRUQsc0JBQ0ksaURBQUMsMkNBQUQsUUFDS2QsS0FBSyxDQUFDRixPQUFOLGlCQUNHLGlEQUFDLDZDQUFEO0FBQVMsUUFBSSxFQUFDO0FBQWQsSUFGUixFQUtLRSxLQUFLLENBQUNILE9BQU4sQ0FBY3dCLE1BQWQsSUFBd0IsQ0FBeEIsZ0JBQ0ssMEZBREwsZ0JBSUssMkVBQ0UsaURBQUMsaUJBQUQ7QUFBbUIsV0FBTyxFQUFFckIsS0FBSyxDQUFDSDtBQUFsQyxJQURGLENBVFYsQ0FESjtBQWdCSDs7QUFHRCxpRUFBZUwsWUFBZixFIiwiZmlsZSI6ImFwcF9jb21wb25lbnRzX015Q29sbGVjdGlvbl9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcbmltcG9ydCB7IGZldGNoUmF0aW5ncywgZmV0Y2hNb3ZpZURldGFpbHMgfSBmcm9tICcuLi91dGlscy9tb3ZpZUNsaWVudCdcclxuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCdcclxuXHJcbmZ1bmN0aW9uIE15Q29sbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKFxyXG4gICAgICAgIGZldGNoUmVkdWNlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJhdGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUmF0aW5ncygpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YSB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIC8vIERyb3BwZWQgaW4gZmF2b3Igb2YgbGF6aWVyIGZldGNoIG9mIGZ1cnRoZXIgZGV0YWlsc1xyXG4gICAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICByYXRpbmdzLm1hcCgocmF0aW5nKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGZldGNoTW92aWVEZXRhaWxzKHJhdGluZy5tb3ZpZUlkKVxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4oKGZ1bGxNb3ZpZSkgPT4gc2V0TW92aWVzKChtb3ZpZXMpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBtb3ZpZXMucHVzaChmdWxsTW92aWUpXHJcbiAgICAvLyAgICAgICAgICAgICB9KSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSwgW3N0YXRlLnJhdGluZ3NdKVxyXG5cclxuICAgIGZ1bmN0aW9uIGZldGNoUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAnZmV0Y2gnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmF0aW5nczogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnRmV0Y2ggZmFpbGVkLicsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpc3BsYXlDb2xsZWN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5yYXRpbmdzKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5yYXRpbmdzLm1hcCgocmF0aW5nSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIHJhdGluZ1ZhbHVlLCB0aW1lLCBtb3ZpZSB9ID0gcmF0aW5nSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIHllYXIsIHJ1bm5pbmdUaW1lIH0gPSBtb3ZpZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5pZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZ1RpbWU9e21vdmllLnJ1bm5pbmdUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25WaWV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmc9e3JhdGluZ1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7c3RhdGUubG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgdGV4dD0nTG9hZGluZyB5b3VyIGNvbGxlY3Rpb24nIC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtzdGF0ZS5yYXRpbmdzLmxlbmd0aCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBjb2xsZWN0aW9uIGlzIGVtcHR5IVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlDb2xsZWN0aW9uIHJhdGluZ3M9e3N0YXRlLnJhdGluZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbGxlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9