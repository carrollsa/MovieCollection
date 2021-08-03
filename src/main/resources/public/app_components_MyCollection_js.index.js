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
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(fetchReducer, {
    movies: null,
    loading: true,
    error: null
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    fetch().then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: 'success',
        data: data
      });
    })["catch"](function (e) {
      console.warn(e.message);
      dispatch({
        type: 'error'
      });
    });
  }, []);

  var fetchReducer = function fetchReducer(state, action) {
    if (action.type === 'fetch') {
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    } else if (action.type === 'success') {
      return {
        state: action.data,
        loading: false,
        error: null
      };
    } else if (action.type === 'error') {
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error.message,
        loading: false
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__.default, {
    text: "Loading your collection"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, state.movies.map(function (movie) {})));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCollection);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvTXlDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk15Q29sbGVjdGlvbiIsIlJlYWN0IiwiZmV0Y2hSZWR1Y2VyIiwibW92aWVzIiwibG9hZGluZyIsImVycm9yIiwic3RhdGUiLCJkaXNwYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwidHlwZSIsImUiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJtYXAiLCJtb3ZpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQ3BCLDBCQUEwQkMsNkNBQUEsQ0FDdEJDLFlBRHNCLEVBRXRCO0FBQ0lDLFVBQU0sRUFBRSxJQURaO0FBRUlDLFdBQU8sRUFBRSxJQUZiO0FBR0lDLFNBQUssRUFBRTtBQUhYLEdBRnNCLENBQTFCO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFTQU4sOENBQUEsQ0FBZ0IsWUFBTTtBQUNsQk8sU0FBSyxHQUNBQyxJQURMLENBQ1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEVixFQUVLRixJQUZMLENBRVUsVUFBQ0csSUFBRDtBQUFBLGFBQVVMLFFBQVEsQ0FBQztBQUFFTSxZQUFJLEVBQUUsU0FBUjtBQUFtQkQsWUFBSSxFQUFKQTtBQUFuQixPQUFELENBQWxCO0FBQUEsS0FGVixXQUdXLFVBQUNFLENBQUQsRUFBTztBQUNWQyxhQUFPLENBQUNDLElBQVIsQ0FBYUYsQ0FBQyxDQUFDRyxPQUFmO0FBQ0FWLGNBQVEsQ0FBQztBQUFFTSxZQUFJLEVBQUU7QUFBUixPQUFELENBQVI7QUFDSCxLQU5MO0FBT0UsR0FSTixFQVFRLEVBUlI7O0FBVUEsTUFBTVgsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0ksS0FBRCxFQUFRWSxNQUFSLEVBQW1CO0FBQ3BDLFFBQUlBLE1BQU0sQ0FBQ0wsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUN6Qiw2Q0FDT1AsS0FEUDtBQUVJRixlQUFPLEVBQUU7QUFGYjtBQUlILEtBTEQsTUFLTyxJQUFJYyxNQUFNLENBQUNMLElBQVAsS0FBZ0IsU0FBcEIsRUFBK0I7QUFDbEMsYUFBTztBQUNIUCxhQUFLLEVBQUVZLE1BQU0sQ0FBQ04sSUFEWDtBQUVIUixlQUFPLEVBQUUsS0FGTjtBQUdIQyxhQUFLLEVBQUU7QUFISixPQUFQO0FBS0gsS0FOTSxNQU1BLElBQUlhLE1BQU0sQ0FBQ0wsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUNoQyw2Q0FDT1AsS0FEUDtBQUVJRCxhQUFLLEVBQUVhLE1BQU0sQ0FBQ2IsS0FBUCxDQUFhWSxPQUZ4QjtBQUdJYixlQUFPLEVBQUU7QUFIYjtBQUtIO0FBQ0osR0FuQkQ7O0FBcUJBLHNCQUNJLGlEQUFDLDJDQUFELFFBQ0tFLEtBQUssQ0FBQ0YsT0FBTixpQkFDRyxpREFBQyw2Q0FBRDtBQUFTLFFBQUksRUFBQztBQUFkLElBRlIsZUFJSSw4REFDS0UsS0FBSyxDQUFDSCxNQUFOLENBQWFnQixHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBVyxDQUU1QixDQUZBLENBREwsQ0FKSixDQURKO0FBWUg7O0FBR0QsaUVBQWVwQixZQUFmLEUiLCJmaWxlIjoiYXBwX2NvbXBvbmVudHNfTXlDb2xsZWN0aW9uX2pzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcclxuXHJcbmZ1bmN0aW9uIE15Q29sbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihcclxuICAgICAgICBmZXRjaFJlZHVjZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb3ZpZXM6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGEgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJyB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKX0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAnZmV0Y2gnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7c3RhdGUubG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgdGV4dD0nTG9hZGluZyB5b3VyIGNvbGxlY3Rpb24nIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5tb3ZpZXMubWFwKChtb3ZpZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbGxlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9