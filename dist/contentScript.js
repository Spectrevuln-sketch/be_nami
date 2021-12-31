var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

chrome.runtime.sendMessage({
  name: 'send_cost',
  data: 'bla'
}, function (response) {
  console.log(response);
});
window.nami_sender = _objectSpread(_objectSpread({}, window.nami_sender || {}), {}, {
  SendCost: function (_SendCost) {
    function SendCost() {
      return _SendCost.apply(this, arguments);
    }

    SendCost.toString = function () {
      return _SendCost.toString();
    };

    return SendCost;
  }(function () {
    return SendCost();
  }),
  _events: {}
});
console.log('Content Script');

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQUVDLEVBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCQyxFQUFBQSxJQUFJLEVBQUU7QUFBM0IsQ0FBM0IsRUFBK0QsVUFBQ0MsUUFBRCxFQUFjO0FBQ3pFQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNILENBRkQ7QUFNQUcsTUFBTSxDQUFDQyxXQUFQLG1DQUNRRCxNQUFNLENBQUNDLFdBQVAsSUFBc0IsRUFEOUI7QUFFSUMsRUFBQUEsUUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFFO0FBQUEsV0FBTUEsUUFBUSxFQUFkO0FBQUEsR0FBRixDQUZaO0FBR0lDLEVBQUFBLE9BQU8sRUFBRTtBQUhiO0FBT0FMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvY29udGVudFNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgbmFtZTogJ3NlbmRfY29zdCcsIGRhdGE6ICdibGEnIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbn0pXHJcblxyXG5cclxuXHJcbndpbmRvdy5uYW1pX3NlbmRlciA9IHtcclxuICAgIC4uLih3aW5kb3cubmFtaV9zZW5kZXIgfHwge30pLFxyXG4gICAgU2VuZENvc3Q6ICgpID0+IFNlbmRDb3N0KCksXHJcbiAgICBfZXZlbnRzOiB7fSxcclxufVxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDb250ZW50IFNjcmlwdCcpIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsIm5hbWUiLCJkYXRhIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibmFtaV9zZW5kZXIiLCJTZW5kQ29zdCIsIl9ldmVudHMiXSwic291cmNlUm9vdCI6IiJ9