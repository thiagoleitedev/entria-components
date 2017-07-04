'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Theme = require('./Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ThemeProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      snackbar: {
        message: '',
        action: 'OK',
        duration: 8000
      }
    }, _this.handleSnackbar = function (_ref2) {
      var message = _ref2.message,
          _ref2$action = _ref2.action,
          action = _ref2$action === undefined ? 'OK' : _ref2$action,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === undefined ? 4000 : _ref2$duration;

      _this.setState({
        snackbar: {
          message: message,
          action: action,
          duration: duration
        }
      });
    }, _this.handleSnackbarConfirm = function () {
      _this.setState({
        snackbar: _extends({}, _this.state.snackbar, {
          message: ''
        })
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        showSnackbar: this.handleSnackbar
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var snackbar = this.state.snackbar;
      var _props = this.props,
          theme = _props.theme,
          children = _props.children;


      var muiTheme = theme || _Theme2.default;

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: muiTheme },
        _react2.default.createElement(
          'div',
          null,
          children,
          _react2.default.createElement(_Snackbar2.default, {
            open: !!snackbar.message,
            message: snackbar.message,
            action: snackbar.action,
            autoHideDuration: snackbar.duration,
            onActionTouchTap: this.handleSnackbarConfirm,
            onRequestClose: this.handleSnackbarConfirm
          })
        )
      );
    }
  }]);

  return ThemeProvider;
}(_react.Component);

ThemeProvider.childContextTypes = {
  showSnackbar: _propTypes2.default.func
};
exports.default = ThemeProvider;