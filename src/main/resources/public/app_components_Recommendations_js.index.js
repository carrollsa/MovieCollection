(self["webpackChunkmovierecommenderweb"] = self["webpackChunkmovierecommenderweb"] || []).push([["app_components_Recommendations_js"],{

/***/ "./app/components/Recommendations.js":
/*!*******************************************!*\
  !*** ./app/components/Recommendations.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recommendations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");



function Recommendations() {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userRatings: userRatings
      })
    }; // console.log(typeof userRatings[0].id)
    // console.log(typeof userRatings[0].rating)

    fetch('recommendations', requestOptions).then(function (response) {
      return JSON.stringify(response);
    }).then(function (data) {
      return console.log(JSON.stringify(data));
    });
  }, []);
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var userRatings = location.state.userRatings;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Still working?"));
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXJlY29tbWVuZGVyd2ViLy4vYXBwL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25zLmpzIl0sIm5hbWVzIjpbIlJlY29tbWVuZGF0aW9ucyIsIlJlYWN0IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyUmF0aW5ncyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGVBQVQsR0FBMkI7QUFDdENDLDhDQUFBLENBQWdCLFlBQU07QUFDbEIsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxZQUFNLEVBQUUsTUFEVztBQUVuQkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BRlU7QUFHbkJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0MsbUJBQVcsRUFBWEE7QUFBRCxPQUFmO0FBSGEsS0FBdkIsQ0FEa0IsQ0FNbEI7QUFDQTs7QUFDQUMsU0FBSyxDQUFDLGlCQUFELEVBQW9CUCxjQUFwQixDQUFMLENBQ0tRLElBREwsQ0FDVSxVQUFBQyxRQUFRO0FBQUEsYUFBSUwsSUFBSSxDQUFDQyxTQUFMLENBQWVJLFFBQWYsQ0FBSjtBQUFBLEtBRGxCLEVBRUtELElBRkwsQ0FFVSxVQUFBRSxJQUFJO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQUksQ0FBQ0MsU0FBTCxDQUFlSyxJQUFmLENBQVosQ0FBSjtBQUFBLEtBRmQ7QUFHSCxHQVhELEVBV0UsRUFYRjtBQVlBLE1BQU1HLFFBQVEsR0FBR0MsNkRBQVcsRUFBNUI7QUFDQSxNQUFRUixXQUFSLEdBQXdCTyxRQUFRLENBQUNFLEtBQWpDLENBQVFULFdBQVI7QUFHQSxzQkFDSSwyRUFDSSw2RUFESixDQURKO0FBT0gsQyIsImZpbGUiOiJhcHBfY29tcG9uZW50c19SZWNvbW1lbmRhdGlvbnNfanMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFIb3NwaXRhbFN5bWJvbCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvbW1lbmRhdGlvbnMoKSB7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1c2VyUmF0aW5nc30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VyUmF0aW5nc1swXS5pZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdXNlclJhdGluZ3NbMF0ucmF0aW5nKVxyXG4gICAgICAgIGZldGNoKCdyZWNvbW1lbmRhdGlvbnMnLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICAgIGNvbnN0IHsgdXNlclJhdGluZ3MgfSA9IGxvY2F0aW9uLnN0YXRlXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBTdGlsbCB3b3JraW5nP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9