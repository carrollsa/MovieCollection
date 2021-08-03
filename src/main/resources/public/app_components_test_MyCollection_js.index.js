(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_test_MyCollection_js"],{

/***/ "./app/components/test/MyCollection.js":
/*!*********************************************!*\
  !*** ./app/components/test/MyCollection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./app/components/test/Loading.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvdGVzdC9NeUNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiTXlDb2xsZWN0aW9uIiwiUmVhY3QiLCJmZXRjaFJlZHVjZXIiLCJtb3ZpZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsImFjdGlvbiIsIm1hcCIsIm1vdmllIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEIsMEJBQTBCQyw2Q0FBQSxDQUN0QkMsWUFEc0IsRUFFdEI7QUFDSUMsVUFBTSxFQUFFLElBRFo7QUFFSUMsV0FBTyxFQUFFLElBRmI7QUFHSUMsU0FBSyxFQUFFO0FBSFgsR0FGc0IsQ0FBMUI7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQVNBTiw4Q0FBQSxDQUFnQixZQUFNO0FBQ2xCTyxTQUFLLEdBQ0FDLElBREwsQ0FDVSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURWLEVBRUtGLElBRkwsQ0FFVSxVQUFDRyxJQUFEO0FBQUEsYUFBVUwsUUFBUSxDQUFDO0FBQUVNLFlBQUksRUFBRSxTQUFSO0FBQW1CRCxZQUFJLEVBQUpBO0FBQW5CLE9BQUQsQ0FBbEI7QUFBQSxLQUZWLFdBR1csVUFBQ0UsQ0FBRCxFQUFPO0FBQ1ZDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhRixDQUFDLENBQUNHLE9BQWY7QUFDQVYsY0FBUSxDQUFDO0FBQUVNLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBUjtBQUNILEtBTkw7QUFPRSxHQVJOLEVBUVEsRUFSUjs7QUFVQSxNQUFNWCxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSSxLQUFELEVBQVFZLE1BQVIsRUFBbUI7QUFDcEMsUUFBSUEsTUFBTSxDQUFDTCxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQ3pCLDZDQUNPUCxLQURQO0FBRUlGLGVBQU8sRUFBRTtBQUZiO0FBSUgsS0FMRCxNQUtPLElBQUljLE1BQU0sQ0FBQ0wsSUFBUCxLQUFnQixTQUFwQixFQUErQjtBQUNsQyxhQUFPO0FBQ0hQLGFBQUssRUFBRVksTUFBTSxDQUFDTixJQURYO0FBRUhSLGVBQU8sRUFBRSxLQUZOO0FBR0hDLGFBQUssRUFBRTtBQUhKLE9BQVA7QUFLSCxLQU5NLE1BTUEsSUFBSWEsTUFBTSxDQUFDTCxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQ2hDLDZDQUNPUCxLQURQO0FBRUlELGFBQUssRUFBRWEsTUFBTSxDQUFDYixLQUFQLENBQWFZLE9BRnhCO0FBR0liLGVBQU8sRUFBRTtBQUhiO0FBS0g7QUFDSixHQW5CRDs7QUFxQkEsc0JBQ0ksaURBQUMsMkNBQUQsUUFDS0UsS0FBSyxDQUFDRixPQUFOLGlCQUNHLGlEQUFDLDZDQUFEO0FBQVMsUUFBSSxFQUFDO0FBQWQsSUFGUixlQUlJLDhEQUNLRSxLQUFLLENBQUNILE1BQU4sQ0FBYWdCLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFXLENBRTVCLENBRkEsQ0FETCxDQUpKLENBREo7QUFZSDs7QUFHRCxpRUFBZXBCLFlBQWYsRSIsImZpbGUiOiJhcHBfY29tcG9uZW50c190ZXN0X015Q29sbGVjdGlvbl9qcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBNeUNvbGxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoXHJcbiAgICAgICAgZmV0Y2hSZWR1Y2VyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW92aWVzOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3N1Y2Nlc3MnLCBkYXRhIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICl9LCBbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ2ZldGNoJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge3N0YXRlLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIHRleHQ9J0xvYWRpbmcgeW91ciBjb2xsZWN0aW9uJyAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUubW92aWVzLm1hcCgobW92aWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDb2xsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==