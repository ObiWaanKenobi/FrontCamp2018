(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsList"],{

/***/ "./src/components/news/News.js":
/*!*************************************!*\
  !*** ./src/components/news/News.js ***!
  \*************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _NewsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsUtil */ "./src/components/news/NewsUtil.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var News =
/*#__PURE__*/
function () {
  function News() {
    _classCallCheck(this, News);
  }

  _createClass(News, null, [{
    key: "renderNews",
    value: function renderNews(_ref) {
      var title = _ref.title,
          publishedAt = _ref.publishedAt,
          description = _ref.description,
          urlToImage = _ref.urlToImage,
          url = _ref.url;
      document.querySelector('.container_news').insertAdjacentHTML('beforeend', Object(_NewsUtil__WEBPACK_IMPORTED_MODULE_1__["getNewsHTML"])(title, _utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].formatDate(publishedAt), description, urlToImage || _utils__WEBPACK_IMPORTED_MODULE_0__["Constants"].noImageUrl, url));
    }
  }]);

  return News;
}();



/***/ }),

/***/ "./src/components/news/NewsList.js":
/*!*****************************************!*\
  !*** ./src/components/news/NewsList.js ***!
  \*****************************************/
/*! exports provided: NewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsList", function() { return NewsList; });
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News */ "./src/components/news/News.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/services/http-client.service.js");
/* harmony import */ var _error_popup_ErrorPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-popup/ErrorPopup */ "./src/components/error-popup/ErrorPopup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/news.scss */ "./src/styles/news.scss");
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_news_scss__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var NewsList =
/*#__PURE__*/
function () {
  function NewsList() {
    _classCallCheck(this, NewsList);

    this.newsContainer = document.querySelector('.container_news');
    this.newsUrl = new URL(_utils__WEBPACK_IMPORTED_MODULE_3__["Constants"].newsUrl);
  }

  _createClass(NewsList, [{
    key: "renderNewsList",
    value: function () {
      var _renderNewsList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(sourceId) {
        var urlParams, _ref, articles, errorPopup;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                while (this.newsContainer.firstChild) {
                  this.newsContainer.removeChild(this.newsContainer.firstChild);
                }

                urlParams = {
                  sources: sourceId,
                  apiKey: _utils__WEBPACK_IMPORTED_MODULE_3__["Constants"].apiKey
                };
                _context.prev = 2;
                _context.next = 5;
                return _services_http_client_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"].getData(this.newsUrl, urlParams);

              case 5:
                _ref = _context.sent;
                articles = _ref.articles;
                articles.forEach(function (article) {
                  return _News__WEBPACK_IMPORTED_MODULE_0__["News"].renderNews(article);
                });
                return _context.abrupt("return", articles);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                _context.next = 15;
                return _error_popup_ErrorPopup__WEBPACK_IMPORTED_MODULE_2__["ErrorPopup"].getInstance();

              case 15:
                errorPopup = _context.sent;
                errorPopup.show('News Error!', _context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function renderNewsList(_x) {
        return _renderNewsList.apply(this, arguments);
      }

      return renderNewsList;
    }()
  }]);

  return NewsList;
}();



/***/ }),

/***/ "./src/components/news/NewsUtil.js":
/*!*****************************************!*\
  !*** ./src/components/news/NewsUtil.js ***!
  \*****************************************/
/*! exports provided: getNewsHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsHTML", function() { return getNewsHTML; });
var getNewsHTML = function getNewsHTML(title, publishedAt, description, urlToImage, url) {
  return "\n    <div class=\"news\">\n        <h1 class=\"news_title\">".concat(title, "</h1>\n        <div class=\"news_publishedAt\">").concat(publishedAt, "</div>\n        <h3 class=\"news_description\">").concat(description, "</h3>\n        <img class=\"news_urlToImage\" src=\"").concat(urlToImage, "\">\n        <a class=\"news_url\" target=\"_blank\" rel=\"noopener\" href=\"").concat(url, "\">Read more</a>\n    </div>\n");
};



/***/ }),

/***/ "./src/styles/news.scss":
/*!******************************!*\
  !*** ./src/styles/news.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uZXdzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmV3cy9OZXdzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uZXdzL05ld3NVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbmV3cy5zY3NzPzUwNDkiXSwibmFtZXMiOlsiTmV3cyIsInRpdGxlIiwicHVibGlzaGVkQXQiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJ1cmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJnZXROZXdzSFRNTCIsIlV0aWxzIiwiZm9ybWF0RGF0ZSIsIkNvbnN0YW50cyIsIm5vSW1hZ2VVcmwiLCJOZXdzTGlzdCIsIm5ld3NDb250YWluZXIiLCJuZXdzVXJsIiwiVVJMIiwic291cmNlSWQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ1cmxQYXJhbXMiLCJzb3VyY2VzIiwiYXBpS2V5IiwiSHR0cENsaWVudFNlcnZpY2UiLCJnZXREYXRhIiwiYXJ0aWNsZXMiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsInJlbmRlck5ld3MiLCJFcnJvclBvcHVwIiwiZ2V0SW5zdGFuY2UiLCJlcnJvclBvcHVwIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxJOzs7Ozs7Ozs7cUNBT0M7QUFBQSxVQUxDQyxLQUtELFFBTENBLEtBS0Q7QUFBQSxVQUpDQyxXQUlELFFBSkNBLFdBSUQ7QUFBQSxVQUhDQyxXQUdELFFBSENBLFdBR0Q7QUFBQSxVQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxVQURDQyxHQUNELFFBRENBLEdBQ0Q7QUFDQ0MsY0FBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0Msa0JBQTFDLENBQTZELFdBQTdELEVBQ0lDLDZEQUFXLENBQ1BSLEtBRE8sRUFFUFMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQlQsV0FBakIsQ0FGTyxFQUdQQyxXQUhPLEVBSVBDLFVBQVUsSUFBSVEsZ0RBQVMsQ0FBQ0MsVUFKakIsRUFLUFIsR0FMTyxDQURmO0FBUUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNUyxROzs7QUFDRixzQkFBYztBQUFBOztBQUNWLFNBQUtDLGFBQUwsR0FBcUJULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBckI7QUFDQSxTQUFLUyxPQUFMLEdBQWUsSUFBSUMsR0FBSixDQUFRTCxnREFBUyxDQUFDSSxPQUFsQixDQUFmO0FBQ0g7Ozs7Ozs7K0NBRW9CRSxROzs7Ozs7O0FBQ2pCLHVCQUFPLEtBQUtILGFBQUwsQ0FBbUJJLFVBQTFCLEVBQXNDO0FBQ2xDLHVCQUFLSixhQUFMLENBQW1CSyxXQUFuQixDQUErQixLQUFLTCxhQUFMLENBQW1CSSxVQUFsRDtBQUNIOztBQUVLRSx5QixHQUFZO0FBQUNDLHlCQUFPLEVBQUVKLFFBQVY7QUFBb0JLLHdCQUFNLEVBQUVYLGdEQUFTLENBQUNXO0FBQXRDLGlCOzs7dUJBRVdDLCtFQUFpQixDQUFDQyxPQUFsQixDQUEwQixLQUFLVCxPQUEvQixFQUF3Q0ssU0FBeEMsQzs7OztBQUFsQkssd0IsUUFBQUEsUTtBQUNQQSx3QkFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUFDLE9BQU87QUFBQSx5QkFBSTVCLDBDQUFJLENBQUM2QixVQUFMLENBQWdCRCxPQUFoQixDQUFKO0FBQUEsaUJBQXhCO2lEQUNPRixROzs7Ozs7dUJBRWtCSSxrRUFBVSxDQUFDQyxXQUFYLEU7OztBQUFuQkMsMEI7QUFDTkEsMEJBQVUsQ0FBQ0MsSUFBWCxDQUFnQixhQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJaO0FBQUE7QUFBQSxJQUFNeEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1IsS0FBRCxFQUFRQyxXQUFSLEVBQXFCQyxXQUFyQixFQUFrQ0MsVUFBbEMsRUFBOENDLEdBQTlDO0FBQUEsZ0ZBRWFKLEtBRmIsNERBR29CQyxXQUhwQiw0REFJbUJDLFdBSm5CLGlFQUt3QkMsVUFMeEIsMEZBTStDQyxHQU4vQztBQUFBLENBQXBCOzs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibmV3c0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnN0YW50cywgVXRpbHN9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHtnZXROZXdzSFRNTH0gZnJvbSAnLi9OZXdzVXRpbCc7XHJcblxyXG5jbGFzcyBOZXdzIHtcclxuICAgIHN0YXRpYyByZW5kZXJOZXdzKHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwdWJsaXNoZWRBdCxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICB1cmxUb0ltYWdlLFxyXG4gICAgICAgIHVybCxcclxuICAgIH0pIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX25ld3MnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgICAgIGdldE5ld3NIVE1MKFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBVdGlscy5mb3JtYXREYXRlKHB1Ymxpc2hlZEF0KSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgdXJsVG9JbWFnZSB8fCBDb25zdGFudHMubm9JbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TmV3c307XHJcbiIsImltcG9ydCB7TmV3c30gZnJvbSAnLi9OZXdzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvaHR0cC1jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RXJyb3JQb3B1cH0gZnJvbSAnLi4vZXJyb3ItcG9wdXAvRXJyb3JQb3B1cCc7XHJcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL25ld3Muc2Nzcyc7XHJcblxyXG5jbGFzcyBOZXdzTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5ld3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX25ld3MnKTtcclxuICAgICAgICB0aGlzLm5ld3NVcmwgPSBuZXcgVVJMKENvbnN0YW50cy5uZXdzVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZW5kZXJOZXdzTGlzdChzb3VyY2VJZCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5ld3NDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld3NDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5uZXdzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0ge3NvdXJjZXM6IHNvdXJjZUlkLCBhcGlLZXk6IENvbnN0YW50cy5hcGlLZXl9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHthcnRpY2xlc30gPSBhd2FpdCBIdHRwQ2xpZW50U2VydmljZS5nZXREYXRhKHRoaXMubmV3c1VybCwgdXJsUGFyYW1zKTtcclxuICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IE5ld3MucmVuZGVyTmV3cyhhcnRpY2xlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnRpY2xlcztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yUG9wdXAgPSBhd2FpdCBFcnJvclBvcHVwLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGVycm9yUG9wdXAuc2hvdygnTmV3cyBFcnJvciEnLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TmV3c0xpc3R9O1xyXG4iLCJjb25zdCBnZXROZXdzSFRNTCA9ICh0aXRsZSwgcHVibGlzaGVkQXQsIGRlc2NyaXB0aW9uLCB1cmxUb0ltYWdlLCB1cmwpID0+IGBcclxuICAgIDxkaXYgY2xhc3M9XCJuZXdzXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwibmV3c190aXRsZVwiPiR7dGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3c19wdWJsaXNoZWRBdFwiPiR7cHVibGlzaGVkQXR9PC9kaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmV3c19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9oMz5cclxuICAgICAgICA8aW1nIGNsYXNzPVwibmV3c191cmxUb0ltYWdlXCIgc3JjPVwiJHt1cmxUb0ltYWdlfVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmV3c191cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCIke3VybH1cIj5SZWFkIG1vcmU8L2E+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCB7Z2V0TmV3c0hUTUx9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9