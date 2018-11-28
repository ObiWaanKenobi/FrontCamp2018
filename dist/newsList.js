(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsList"],{

/***/ "./src/assets/template.js":
/*!********************************!*\
  !*** ./src/assets/template.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
(function () {
  var support = "content" in document.createElement("template"); // Set the content property if missing

  if (!support) {
    var
    /**
     * Prefer an array to a NodeList
     * Otherwise, updating the content property of a node
     * will update the NodeList and we'll loose the nested <template>
     */
    templates = Array.prototype.slice.call(document.getElementsByTagName("template")),
        template,
        content,
        fragment,
        node,
        i = 0,
        j; // For each <template> element get its content and wrap it in a document fragment

    while (template = templates[i++]) {
      content = template.children;
      fragment = document.createDocumentFragment();

      for (j = 0; node = content[j]; j++) {
        fragment.appendChild(node);
      }

      template.content = fragment;
    }
  } // Prepare a clone function to allow nested <template> elements


  function clone() {
    var templates = this.querySelectorAll("template"),
        fragments = [],
        template,
        i = 0; // If the support is OK simply clone and return

    if (support) {
      template = this.cloneNode(true);
      templates = template.content.querySelectorAll("template"); // Set the clone method for each nested <template> element

      for (; templates[i]; i++) {
        templates[i].clone = clone;
      }

      return template;
    } // Loop through nested <template> to retrieve the content property


    for (; templates[i]; i++) {
      fragments.push(templates[i].content);
    } // Now, clone the document fragment


    template = this.cloneNode(true); // Makes sure the clone have a "content" and "clone" properties

    template.content = this.content;
    template.clone = clone;
    /**
     * Retrieve the nested <template> once again
     * Since we just cloned the document fragment,
     * the content's property of the nested <template> might be undefined
     * We have to re-set it using the fragment array we previously got
     */

    templates = template.querySelectorAll("template"); // Loop to set the content property of each nested template

    for (i = 0; templates[i]; i++) {
      templates[i].content = fragments[i];
      templates[i].clone = clone; // Makes sure to set the clone method as well
    }

    return template;
  }

  var templates = document.querySelectorAll("template"),
      template,
      i = 0; // Pollute the DOM with a "clone" method on each <template> element

  while (template = templates[i++]) {
    template.clone = clone;
  }
})();

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _assets_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/template */ "./src/assets/template.js");
/* harmony import */ var _assets_template__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_template__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Enables IE11 support of template tag



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
      var newsElem = document.querySelector('#news-template').content;
      newsElem.querySelector('.news_title').innerHTML = title;
      newsElem.querySelector('.news_publishedAt').innerHTML = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].formatDate(publishedAt, 'ru');
      newsElem.querySelector('.news_description').innerHTML = description;
      newsElem.querySelector('.news_urlToImage').src = urlToImage || _utils_constants__WEBPACK_IMPORTED_MODULE_0__["default"].noImageUrl;
      newsElem.querySelector('.news_url').href = url;
      return newsElem;
    }
  }]);

  return News;
}();



/***/ }),

/***/ "./src/components/NewsList.js":
/*!************************************!*\
  !*** ./src/components/NewsList.js ***!
  \************************************/
/*! exports provided: NewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsList", function() { return NewsList; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ "./src/components/News.js");
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/news.scss */ "./src/styles/news.scss");
/* harmony import */ var _styles_news_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_news_scss__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var NewsList =
/*#__PURE__*/
function () {
  function NewsList(newsContainer) {
    _classCallCheck(this, NewsList);

    this.newsContainer = newsContainer;
  }

  _createClass(NewsList, [{
    key: "getNews",
    value: function () {
      var _getNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(newsUrl) {
        var _this = this;

        var _ref, articles;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.newsContainer.innerHTML = '';
                _context.next = 3;
                return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].getData(newsUrl);

              case 3:
                _ref = _context.sent;
                articles = _ref.articles;
                articles.forEach(function (article) {
                  var news = _News__WEBPACK_IMPORTED_MODULE_1__["News"].renderNews(article);

                  _this.newsContainer.appendChild(document.importNode(news, true));
                });
                return _context.abrupt("return", articles);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getNews(_x) {
        return _getNews.apply(this, arguments);
      };
    }()
  }]);

  return NewsList;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9uZXdzLnNjc3M/NTA0OSJdLCJuYW1lcyI6WyJzdXBwb3J0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGVtcGxhdGVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRlbXBsYXRlIiwiY29udGVudCIsImZyYWdtZW50Iiwibm9kZSIsImkiLCJqIiwiY2hpbGRyZW4iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbG9uZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmcmFnbWVudHMiLCJjbG9uZU5vZGUiLCJwdXNoIiwiTmV3cyIsInRpdGxlIiwicHVibGlzaGVkQXQiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJ1cmwiLCJuZXdzRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJVdGlscyIsImZvcm1hdERhdGUiLCJzcmMiLCJDb25zdGFudHMiLCJub0ltYWdlVXJsIiwiaHJlZiIsIk5ld3NMaXN0IiwibmV3c0NvbnRhaW5lciIsIm5ld3NVcmwiLCJnZXREYXRhIiwiYXJ0aWNsZXMiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsIm5ld3MiLCJyZW5kZXJOZXdzIiwiaW1wb3J0Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQyxhQUFXO0FBQ1gsTUFBSUEsT0FBTyxHQUFJLGFBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUE1QixDQURXLENBR1g7O0FBQ0EsTUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDYjtBQUNDOzs7OztBQUtBRyxhQUFTLEdBQUdDLEtBQUssQ0FB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LENBQUNDLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzFCLHNCQUFNQyxJQUFJLEdBQUd0QiwwQ0FBSSxDQUFDdUIsVUFBTCxDQUFnQkYsT0FBaEIsQ0FBYjs7QUFDQSx1QkFBSSxDQUFDTCxhQUFMLENBQW1CdEIsV0FBbkIsQ0FBK0JoQixRQUFRLENBQUM4QyxVQUFULENBQW9CRixJQUFwQixFQUEwQixJQUExQixDQUEvQjtBQUNILGlCQUhEO2lEQUlPSCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmYsdUMiLCJmaWxlIjoibmV3c0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcblx0dmFyIHN1cHBvcnQgPSAoXCJjb250ZW50XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpKTtcclxuXHJcblx0Ly8gU2V0IHRoZSBjb250ZW50IHByb3BlcnR5IGlmIG1pc3NpbmdcclxuXHRpZiAoIXN1cHBvcnQpIHtcclxuXHRcdHZhclxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogUHJlZmVyIGFuIGFycmF5IHRvIGEgTm9kZUxpc3RcclxuXHRcdFx0ICogT3RoZXJ3aXNlLCB1cGRhdGluZyB0aGUgY29udGVudCBwcm9wZXJ0eSBvZiBhIG5vZGVcclxuXHRcdFx0ICogd2lsbCB1cGRhdGUgdGhlIE5vZGVMaXN0IGFuZCB3ZSdsbCBsb29zZSB0aGUgbmVzdGVkIDx0ZW1wbGF0ZT5cclxuXHRcdFx0ICovXHJcblx0XHRcdHRlbXBsYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGVtcGxhdGVcIikpLFxyXG5cdFx0XHR0ZW1wbGF0ZSwgY29udGVudCwgZnJhZ21lbnQsIG5vZGUsIGkgPSAwLCBqO1xyXG5cclxuXHRcdC8vIEZvciBlYWNoIDx0ZW1wbGF0ZT4gZWxlbWVudCBnZXQgaXRzIGNvbnRlbnQgYW5kIHdyYXAgaXQgaW4gYSBkb2N1bWVudCBmcmFnbWVudFxyXG5cdFx0d2hpbGUgKCh0ZW1wbGF0ZSA9IHRlbXBsYXRlc1tpKytdKSkge1xyXG5cdFx0XHRjb250ZW50ICA9IHRlbXBsYXRlLmNoaWxkcmVuO1xyXG5cdFx0XHRmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcblx0XHRcdGZvciAoaiA9IDA7IG5vZGUgPSBjb250ZW50W2pdOyBqKyspIHtcclxuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGVtcGxhdGUuY29udGVudCA9IGZyYWdtZW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gUHJlcGFyZSBhIGNsb25lIGZ1bmN0aW9uIHRvIGFsbG93IG5lc3RlZCA8dGVtcGxhdGU+IGVsZW1lbnRzXHJcblx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHR2YXJcclxuXHRcdFx0dGVtcGxhdGVzID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKFwidGVtcGxhdGVcIiksXHJcblx0XHRcdGZyYWdtZW50cyA9IFtdLFxyXG5cdFx0XHR0ZW1wbGF0ZSxcclxuXHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHN1cHBvcnQgaXMgT0sgc2ltcGx5IGNsb25lIGFuZCByZXR1cm5cclxuXHRcdGlmIChzdXBwb3J0KSB7XHJcblx0XHRcdHRlbXBsYXRlICA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHR0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZW1wbGF0ZVwiKTtcclxuXHJcblx0XHRcdC8vIFNldCB0aGUgY2xvbmUgbWV0aG9kIGZvciBlYWNoIG5lc3RlZCA8dGVtcGxhdGU+IGVsZW1lbnRcclxuXHRcdFx0Zm9yICg7IHRlbXBsYXRlc1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0dGVtcGxhdGVzW2ldLmNsb25lID0gY2xvbmU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBMb29wIHRocm91Z2ggbmVzdGVkIDx0ZW1wbGF0ZT4gdG8gcmV0cmlldmUgdGhlIGNvbnRlbnQgcHJvcGVydHlcclxuXHRcdGZvciAoOyB0ZW1wbGF0ZXNbaV07IGkrKykge1xyXG5cdFx0XHRmcmFnbWVudHMucHVzaCh0ZW1wbGF0ZXNbaV0uY29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTm93LCBjbG9uZSB0aGUgZG9jdW1lbnQgZnJhZ21lbnRcclxuXHRcdHRlbXBsYXRlID0gdGhpcy5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdFx0Ly8gTWFrZXMgc3VyZSB0aGUgY2xvbmUgaGF2ZSBhIFwiY29udGVudFwiIGFuZCBcImNsb25lXCIgcHJvcGVydGllc1xyXG5cdFx0dGVtcGxhdGUuY29udGVudCA9IHRoaXMuY29udGVudDtcclxuXHRcdHRlbXBsYXRlLmNsb25lICAgPSBjbG9uZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHJpZXZlIHRoZSBuZXN0ZWQgPHRlbXBsYXRlPiBvbmNlIGFnYWluXHJcblx0XHQgKiBTaW5jZSB3ZSBqdXN0IGNsb25lZCB0aGUgZG9jdW1lbnQgZnJhZ21lbnQsXHJcblx0XHQgKiB0aGUgY29udGVudCdzIHByb3BlcnR5IG9mIHRoZSBuZXN0ZWQgPHRlbXBsYXRlPiBtaWdodCBiZSB1bmRlZmluZWRcclxuXHRcdCAqIFdlIGhhdmUgdG8gcmUtc2V0IGl0IHVzaW5nIHRoZSBmcmFnbWVudCBhcnJheSB3ZSBwcmV2aW91c2x5IGdvdFxyXG5cdFx0ICovXHJcblx0XHR0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKFwidGVtcGxhdGVcIik7XHJcblxyXG5cdFx0Ly8gTG9vcCB0byBzZXQgdGhlIGNvbnRlbnQgcHJvcGVydHkgb2YgZWFjaCBuZXN0ZWQgdGVtcGxhdGVcclxuXHRcdGZvciAoaSA9IDA7IHRlbXBsYXRlc1tpXTsgaSsrKSB7XHJcblx0XHRcdHRlbXBsYXRlc1tpXS5jb250ZW50ID0gZnJhZ21lbnRzW2ldO1xyXG5cdFx0XHR0ZW1wbGF0ZXNbaV0uY2xvbmUgICA9IGNsb25lOyAvLyBNYWtlcyBzdXJlIHRvIHNldCB0aGUgY2xvbmUgbWV0aG9kIGFzIHdlbGxcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGVtcGxhdGU7XHJcblx0fVxyXG5cclxuXHR2YXJcclxuXHRcdHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZW1wbGF0ZVwiKSxcclxuXHRcdHRlbXBsYXRlLCBpID0gMDtcclxuXHJcblx0Ly8gUG9sbHV0ZSB0aGUgRE9NIHdpdGggYSBcImNsb25lXCIgbWV0aG9kIG9uIGVhY2ggPHRlbXBsYXRlPiBlbGVtZW50XHJcblx0d2hpbGUgKCh0ZW1wbGF0ZSA9IHRlbXBsYXRlc1tpKytdKSkge1xyXG5cdFx0dGVtcGxhdGUuY2xvbmUgPSBjbG9uZTtcclxuXHR9XHJcbn0oKSk7XHJcbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG4vLyBFbmFibGVzIElFMTEgc3VwcG9ydCBvZiB0ZW1wbGF0ZSB0YWdcclxuaW1wb3J0ICcuLi9hc3NldHMvdGVtcGxhdGUnO1xyXG5cclxuY2xhc3MgTmV3cyB7XHJcbiAgICBzdGF0aWMgcmVuZGVyTmV3cyh7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgcHVibGlzaGVkQXQsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdXJsVG9JbWFnZSxcclxuICAgICAgICB1cmwsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgY29uc3QgbmV3c0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy10ZW1wbGF0ZScpLmNvbnRlbnQ7XHJcbiAgICAgICAgbmV3c0VsZW0ucXVlcnlTZWxlY3RvcignLm5ld3NfdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgICAgICBuZXdzRWxlbS5xdWVyeVNlbGVjdG9yKCcubmV3c19wdWJsaXNoZWRBdCcpLmlubmVySFRNTCA9IFV0aWxzLmZvcm1hdERhdGUocHVibGlzaGVkQXQsICdydScpO1xyXG4gICAgICAgIG5ld3NFbGVtLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX2Rlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgbmV3c0VsZW0ucXVlcnlTZWxlY3RvcignLm5ld3NfdXJsVG9JbWFnZScpLnNyYyA9IHVybFRvSW1hZ2UgfHwgQ29uc3RhbnRzLm5vSW1hZ2VVcmw7XHJcbiAgICAgICAgbmV3c0VsZW0ucXVlcnlTZWxlY3RvcignLm5ld3NfdXJsJykuaHJlZiA9IHVybDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld3NFbGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge05ld3N9O1xyXG4iLCJpbXBvcnQge1V0aWxzfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7TmV3c30gZnJvbSAnLi9OZXdzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvbmV3cy5zY3NzJztcclxuXHJcbmNsYXNzIE5ld3NMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld3NDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLm5ld3NDb250YWluZXIgPSBuZXdzQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE5ld3MobmV3c1VybCkge1xyXG4gICAgICAgIHRoaXMubmV3c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCB7YXJ0aWNsZXN9ID0gYXdhaXQgVXRpbHMuZ2V0RGF0YShuZXdzVXJsKTtcclxuICAgICAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3MgPSBOZXdzLnJlbmRlck5ld3MoYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5pbXBvcnROb2RlKG5ld3MsIHRydWUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXJ0aWNsZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TmV3c0xpc3R9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9