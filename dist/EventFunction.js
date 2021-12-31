/******/ // The require scope
/******/ var __webpack_require__ = {};
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
/*!******************************!*\
  !*** ./src/eventFunction.js ***!
  \******************************/
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRGdW5jdGlvbi5qcyIsIm1hcHBpbmdzIjoiU0FBQTtTQUNBOzs7OztVQ0RBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05PLElBQU1BLE9BQU8sR0FBRztBQUNuQkMsRUFBQUEsYUFBYSxFQUFFLDZCQUE0QjtBQUFBLFFBQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxRQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdkMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0IsVUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBbEI7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxTQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMzRCxZQUFNQyxRQUFRLEdBQUdELENBQUMsQ0FBQ1osSUFBbkI7QUFDQSxZQUNJLFFBQU9hLFFBQVAsTUFBb0IsUUFBcEIsSUFDQUEsUUFBUSxLQUFLLElBRGIsSUFFQSxDQUFDQSxRQUFRLENBQUNDLE1BSGQsRUFLSTtBQUNKTCxRQUFBQSxNQUFNLENBQUNNLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDSixlQUF0QztBQUNBLFlBQUlFLFFBQVEsQ0FBQ0csS0FBYixFQUFvQmIsR0FBRyxDQUFDVSxRQUFRLENBQUNHLEtBQVYsQ0FBSCxDQUFwQixLQUNLZCxHQUFHLENBQUNXLFFBQUQsQ0FBSDtBQUNSLE9BWEQ7QUFZQUosTUFBQUEsTUFBTSxDQUFDUSxXQUFQLENBQ0k7QUFDSWxCLFFBQUFBLE1BQU0sRUFBTkEsTUFESjtBQUVJQyxRQUFBQSxJQUFJLEVBQUpBLElBRko7QUFHSWtCLFFBQUFBLE1BQU0sRUFBRSxTQUhaO0FBSUlDLFFBQUFBLEVBQUUsRUFBRWY7QUFKUixPQURKLEVBT0lLLE1BQU0sQ0FBQ1csTUFQWDtBQVNILEtBdkJNLENBQVA7QUF3Qkg7QUExQmtCLENBQWhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvZXZlbnRGdW5jdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCBNZXNzYWdlID0ge1xyXG4gICAgc2VuZFRvQ29udGVudDogZnVuY3Rpb24gKHsgbWV0aG9kLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiByZXNwb25zZUhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlICE9PSAnb2JqZWN0JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXJlc3BvbnNlLnRhcmdldFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgcmVzcG9uc2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikgcmVqKHJlc3BvbnNlLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXI6ICd3ZWJwYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcmlnaW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0iXSwibmFtZXMiOlsiTWVzc2FnZSIsInNlbmRUb0NvbnRlbnQiLCJtZXRob2QiLCJkYXRhIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInJlcXVlc3RJZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZUhhbmRsZXIiLCJlIiwicmVzcG9uc2UiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXJyb3IiLCJwb3N0TWVzc2FnZSIsInNlbmRlciIsImlkIiwib3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==