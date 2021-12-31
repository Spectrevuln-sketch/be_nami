/******/ var __webpack_modules__ = ({

/***/ "./src/eventFunction.js":
/*!******************************!*\
  !*** ./src/eventFunction.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Message = {
  sendToContent: function sendToContent(_ref) {
    var method = _ref.method,
        data = _ref.data;
    return new Promise(function (res, rej) {
      var requestId = Math.random().toString(36).substr(2, 9);
      window.addEventListener('message', function responseHandler(e) {
        var response = e.data;
        if (_typeof(response) !== 'object' || response === null || !response.target) return;
        window.removeEventListener('message', responseHandler);
        if (response.error) rej(response.error);else res(response);
      });
      window.postMessage({
        method: method,
        data: data,
        sender: 'webpage',
        id: requestId
      }, window.origin);
    });
  }
};

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/Controllers.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCost": () => (/* binding */ SendCost)
/* harmony export */ });
/* harmony import */ var _eventFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventFunction */ "./src/eventFunction.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var SendCost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cost) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _eventFunction__WEBPACK_IMPORTED_MODULE_0__.Message.sendToContent({
              method: 'send_cost',
              data: cost
            });

          case 2:
            result = _context.sent;
            console.log(result);
            return _context.abrupt("return", result.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function SendCost(_x) {
    return _ref.apply(this, arguments);
  };
}();
})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPLEdBQUc7QUFDbkJDLEVBQUFBLGFBQWEsRUFBRSw2QkFBNEI7QUFBQSxRQUFoQkMsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQUEsUUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3ZDLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzdCLFVBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWxCO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsU0FBU0MsZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEI7QUFDM0QsWUFBTUMsUUFBUSxHQUFHRCxDQUFDLENBQUNaLElBQW5CO0FBQ0EsWUFDSSxRQUFPYSxRQUFQLE1BQW9CLFFBQXBCLElBQ0FBLFFBQVEsS0FBSyxJQURiLElBRUEsQ0FBQ0EsUUFBUSxDQUFDQyxNQUhkLEVBS0k7QUFDSkwsUUFBQUEsTUFBTSxDQUFDTSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ0osZUFBdEM7QUFDQSxZQUFJRSxRQUFRLENBQUNHLEtBQWIsRUFBb0JiLEdBQUcsQ0FBQ1UsUUFBUSxDQUFDRyxLQUFWLENBQUgsQ0FBcEIsS0FDS2QsR0FBRyxDQUFDVyxRQUFELENBQUg7QUFDUixPQVhEO0FBWUFKLE1BQUFBLE1BQU0sQ0FBQ1EsV0FBUCxDQUNJO0FBQ0lsQixRQUFBQSxNQUFNLEVBQU5BLE1BREo7QUFFSUMsUUFBQUEsSUFBSSxFQUFKQSxJQUZKO0FBR0lrQixRQUFBQSxNQUFNLEVBQUUsU0FIWjtBQUlJQyxRQUFBQSxFQUFFLEVBQUVmO0FBSlIsT0FESixFQU9JSyxNQUFNLENBQUNXLE1BUFg7QUFTSCxLQXZCTSxDQUFQO0FBd0JIO0FBMUJrQixDQUFoQjs7Ozs7O1NDQVA7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUdPLElBQU1DLFFBQVE7QUFBQSxxRUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDekIsaUVBQUEsQ0FBc0I7QUFBRUUsY0FBQUEsTUFBTSxFQUFFLFdBQVY7QUFBdUJDLGNBQUFBLElBQUksRUFBRXNCO0FBQTdCLGFBQXRCLENBREQ7O0FBQUE7QUFDZEMsWUFBQUEsTUFEYztBQUVwQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFGb0IsNkNBR2JBLE1BQU0sQ0FBQ3ZCLElBSE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUnFCLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2V2ZW50RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL0NvbnRyb2xsZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNZXNzYWdlID0ge1xyXG4gICAgc2VuZFRvQ29udGVudDogZnVuY3Rpb24gKHsgbWV0aG9kLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiByZXNwb25zZUhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlICE9PSAnb2JqZWN0JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXJlc3BvbnNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgcmVzcG9uc2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikgcmVqKHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXI6ICd3ZWJwYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcmlnaW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9ldmVudEZ1bmN0aW9uXCJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2VuZENvc3QgPSBhc3luYyAoY29zdCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTWVzc2FnZS5zZW5kVG9Db250ZW50KHsgbWV0aG9kOiAnc2VuZF9jb3N0JywgZGF0YTogY29zdCB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIHJldHVybiByZXN1bHQuZGF0YVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNZXNzYWdlIiwic2VuZFRvQ29udGVudCIsIm1ldGhvZCIsImRhdGEiLCJQcm9taXNlIiwicmVzIiwicmVqIiwicmVxdWVzdElkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3BvbnNlSGFuZGxlciIsImUiLCJyZXNwb25zZSIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlcnJvciIsInBvc3RNZXNzYWdlIiwic2VuZGVyIiwiaWQiLCJvcmlnaW4iLCJTZW5kQ29zdCIsImNvc3QiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==