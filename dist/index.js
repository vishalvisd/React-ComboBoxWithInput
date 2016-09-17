(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("react"));
	else
		root["index"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ComboBoxWithInput = function (_Component) {
	  _inherits(ComboBoxWithInput, _Component);
	
	  function ComboBoxWithInput(props, context) {
	    _classCallCheck(this, ComboBoxWithInput);
	
	    var _this = _possibleConstructorReturn(this, (ComboBoxWithInput.__proto__ || Object.getPrototypeOf(ComboBoxWithInput)).call(this, props, context));
	
	    _this.state = {
	      open: false,
	      lastValue: "",
	      textBoxId: Math.floor(Math.random() * 100000000000)
	    };
	    _this.styles = {
	      container: {
	        position: "absolute",
	        width: _this.props.width ? _this.props.width : "700px"
	      },
	      rtaInput: {
	        position: "relative",
	        margin: "0px",
	        height: _this.props.height ? _this.props.height : "30px",
	        width: "100%",
	        fontSize: "18px",
	        boxSizing: "border-box"
	      },
	      dropdownlevelcell: {
	        position: "absolute",
	        left: "0",
	        top: _this.props.height ? _this.props.height : "30px",
	        background: "white",
	        zIndex: "9998",
	        overflow: "scroll",
	        overflowX: "hidden",
	        textAlign: "center",
	        width: "100%"
	      },
	      dropdownlevelcellval: {
	        background: "#fafafa",
	        border: "1px solid transparent",
	        color: "black",
	        cursor: "pointer",
	        textAlign: "center",
	        fontSize: "12px",
	        overflow: "hidden",
	        lineHeight: _this.props.height ? _this.props.height : "30px"
	      },
	      labeltext: {
	        textAlign: "center",
	        cursor: "pointer",
	        width: "100%",
	        border: "1px solid",
	        height: _this.props.height ? _this.props.height : "30px"
	      },
	      labeltextLabel: {
	        left: "0px",
	        marginBottom: "0px",
	        cursor: "grab",
	        display: "inline-block",
	        height: _this.props.height ? _this.props.height : "30px",
	        lineHeight: _this.props.height ? _this.props.height : "30px",
	        fontSize: "18px"
	      },
	      editableContainer: {
	        width: "100%"
	      }
	    };
	    return _this;
	  }
	
	  _createClass(ComboBoxWithInput, [{
	    key: "onChange",
	    value: function onChange(syntEvent) {
	      if (typeof this.props.onChange === "function") {
	        this.props.onChange(syntEvent.target.value);
	      }
	    }
	  }, {
	    key: "onKeyUp",
	    value: function onKeyUp(e) {
	      if (typeof this.props.onKeyUp === "function") {
	        this.props.onKeyUp(e);
	      }
	      if (e.keyCode === 13) {
	        this.setState({
	          open: false
	        });
	      }
	
	      if (e.keyCode === 27) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: "onOptionSelected",
	    value: function onOptionSelected(option) {
	      this.setState({
	        open: false
	      });
	      if (typeof this.props.onOptionSelected === "function") {
	        this.props.onOptionSelected(option);
	      }
	    }
	  }, {
	    key: "onLabelClick",
	    value: function onLabelClick() {
	      this.setState({
	        open: true,
	        lastValue: this.props.dispVal
	      });
	      if (typeof this.props.onClick === "function") {
	        this.props.onClick();
	      }
	    }
	  }, {
	    key: "onBlured",
	    value: function onBlured(e) {
	      if (e.relatedTarget === null) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      if (this.state.open === true) {
	        setTimeout(function () {
	          //document.getElementById(this.state.textBoxId).focus();
	        }, 0);
	      }
	      return _react2.default.createElement(
	        "div",
	        { className: "visd_cbwi_container", style: this.styles.container },
	        this.state.open ? _react2.default.createElement(
	          "div",
	          { className: "visd_cbwi_editContainer", contentEditable: true, onBlur: this.onBlured.bind(this), style: this.state.editableContainer },
	          _react2.default.createElement("input", { className: "visd_cbwi_editContainerInput", style: this.styles.rtaInput, type: "text",
	            onChange: this.onChange.bind(this),
	            onKeyUp: this.onKeyUp.bind(this),
	            value: this.props.inputVal,
	            id: this.state.textBoxId
	          }),
	          _react2.default.createElement(
	            "div",
	            { className: "visd_cbwi_editContainerDD", style: this.styles.dropdownlevelcell },
	            this.props.options.map(function (el, i) {
	              if ("" + el.key === "" + _this2.props.dispVal) {
	                _this2.styles.dropdownlevelcellval.background = "#3276B1";
	                _this2.styles.dropdownlevelcellval.color = "#ffffff";
	              }
	              return _react2.default.createElement(
	                "div",
	                _defineProperty({ className: "visd_cbwi_editContainerDDCell_" + i, key: i + "drd", onClick: _this2.onOptionSelected.bind(_this2, el),
	                  style: _this2.styles.dropdownlevelcellval }, "key", el.key + i),
	                el.value !== "" ? el.key + " - " + el.value : el.key
	              );
	            })
	          )
	        ) : _react2.default.createElement(
	          "div",
	          { className: "visd_cbwi_labelBox", onClick: this.onLabelClick.bind(this), style: this.styles.labeltext },
	          _react2.default.createElement(
	            "label",
	            { className: "visd_cbwi_label", style: this.styles.labeltextLabel },
	            this.props.dispVal
	          )
	        )
	      );
	    }
	  }]);
	
	  return ComboBoxWithInput;
	}(_react.Component);
	
	ComboBoxWithInput.defaultProps = {
	  onChange: null,
	  onKeyUp: null,
	  onOptionSelected: null,
	  onLabelClick: null,
	  options: null,
	  dispVal: "",
	  inputVal: ""
	};
	
	ComboBoxWithInput.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  onKeyUp: _react2.default.PropTypes.func,
	  onOptionSelected: _react2.default.PropTypes.func,
	  onLabelClick: _react2.default.PropTypes.func,
	  options: _react2.default.PropTypes.array,
	  dispVal: _react2.default.PropTypes.string,
	  inputVal: _react2.default.PropTypes.string
	};
	
	exports.default = ComboBoxWithInput;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNmI5YzViYzZhMzJkNTg4Mjg3MiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiQ29tYm9Cb3hXaXRoSW5wdXQiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsIm9wZW4iLCJsYXN0VmFsdWUiLCJ0ZXh0Qm94SWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHlsZXMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwicnRhSW5wdXQiLCJtYXJnaW4iLCJoZWlnaHQiLCJmb250U2l6ZSIsImJveFNpemluZyIsImRyb3Bkb3dubGV2ZWxjZWxsIiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsInRleHRBbGlnbiIsImRyb3Bkb3dubGV2ZWxjZWxsdmFsIiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJsaW5lSGVpZ2h0IiwibGFiZWx0ZXh0IiwibGFiZWx0ZXh0TGFiZWwiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZWRpdGFibGVDb250YWluZXIiLCJzeW50RXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZSIsIm9uS2V5VXAiLCJrZXlDb2RlIiwic2V0U3RhdGUiLCJvcHRpb24iLCJvbk9wdGlvblNlbGVjdGVkIiwiZGlzcFZhbCIsIm9uQ2xpY2siLCJyZWxhdGVkVGFyZ2V0Iiwic2V0VGltZW91dCIsIm9uQmx1cmVkIiwiYmluZCIsImlucHV0VmFsIiwib3B0aW9ucyIsIm1hcCIsImVsIiwiaSIsImtleSIsIm9uTGFiZWxDbGljayIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLGlCOzs7QUFDSiw4QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSx1SUFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLEtBREs7QUFFWEMsa0JBQVcsRUFGQTtBQUdYQyxrQkFBV0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLFlBQTNCO0FBSEEsTUFBYjtBQUtBLFdBQUtDLE1BQUwsR0FBYztBQUNaQyxrQkFBVztBQUNUQyxtQkFBVSxVQUREO0FBRVRDLGdCQUFPLE1BQUtaLEtBQUwsQ0FBV1ksS0FBWCxHQUFtQixNQUFLWixLQUFMLENBQVdZLEtBQTlCLEdBQXNDO0FBRnBDLFFBREM7QUFLWkMsaUJBQVU7QUFDUkYsbUJBQVUsVUFERjtBQUVSRyxpQkFBUSxLQUZBO0FBR1JDLGlCQUFRLE1BQUtmLEtBQUwsQ0FBV2UsTUFBWCxHQUFvQixNQUFLZixLQUFMLENBQVdlLE1BQS9CLEdBQXdDLE1BSHhDO0FBSVJILGdCQUFPLE1BSkM7QUFLUkksbUJBQVUsTUFMRjtBQU1SQyxvQkFBVztBQU5ILFFBTEU7QUFhWkMsMEJBQW1CO0FBQ2pCUCxtQkFBVSxVQURPO0FBRWpCUSxlQUFNLEdBRlc7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O0FBSTVCSixpQkFBYyxnQkFBTUcsU0FBTixDQUFnQkMsSUFKRjtBQUs1QlQsWUFBUyxnQkFBTVEsU0FBTixDQUFnQkUsS0FMRztBQU01QmpCLFlBQVMsZ0JBQU1lLFNBQU4sQ0FBZ0JHLE1BTkc7QUFPNUJaLGFBQVUsZ0JBQU1TLFNBQU4sQ0FBZ0JHO0FBUEUsRUFBOUI7O21CQVVlakUsaUI7Ozs7OztBQ3RMZixnRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImluZGV4XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImluZGV4XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDE2YjljNWJjNmEzMmQ1ODgyODcyXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQ29tYm9Cb3hXaXRoSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBsYXN0VmFsdWU6IFwiXCIsXG4gICAgICB0ZXh0Qm94SWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMClcbiAgICB9O1xuICAgIHRoaXMuc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IFwiNzAwcHhcIlxuICAgICAgfSxcbiAgICAgIHJ0YUlucHV0OiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogXCIzMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG4gICAgICB9LFxuICAgICAgZHJvcGRvd25sZXZlbGNlbGw6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIHRvcDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgIHpJbmRleDogXCI5OTk4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxuICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9LFxuICAgICAgZHJvcGRvd25sZXZlbGNlbGx2YWw6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCIjZmFmYWZhXCIsXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIixcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogXCIzMHB4XCJcbiAgICAgIH0sXG4gICAgICBsYWJlbHRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogXCIzMHB4XCJcbiAgICAgIH0sXG4gICAgICBsYWJlbHRleHRMYWJlbDoge1xuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMHB4XCIsXG4gICAgICAgIGN1cnNvcjogXCJncmFiXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCA/IHRoaXMucHJvcHMuaGVpZ2h0IDogXCIzMHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIlxuICAgICAgfSxcbiAgICAgIGVkaXRhYmxlQ29udGFpbmVyOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHN5bnRFdmVudCl7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3ludEV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChlKXtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25LZXlVcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5VXAoZSk7XG4gICAgfVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbk9wdGlvblNlbGVjdGVkKG9wdGlvbil7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk9wdGlvblNlbGVjdGVkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZChvcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG9uTGFiZWxDbGljaygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGxhc3RWYWx1ZTogdGhpcy5wcm9wcy5kaXNwVmFsXG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyZWQoZSl7XG4gICAgaWYgKGUucmVsYXRlZFRhcmdldCA9PT0gbnVsbCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuID09PSB0cnVlKXtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXRlLnRleHRCb3hJZCkuZm9jdXMoKTtcbiAgICAgIH0sMClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzZF9jYndpX2NvbnRhaW5lclwiIHN0eWxlPXt0aGlzLnN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzZF9jYndpX2VkaXRDb250YWluZXJcIiBjb250ZW50RWRpdGFibGUgb25CbHVyPXt0aGlzLm9uQmx1cmVkLmJpbmQodGhpcyl9IHN0eWxlPXt0aGlzLnN0YXRlLmVkaXRhYmxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInZpc2RfY2J3aV9lZGl0Q29udGFpbmVySW5wdXRcIiBzdHlsZT17dGhpcy5zdHlsZXMucnRhSW5wdXR9IHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dFZhbH1cbiAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLnRleHRCb3hJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfZWRpdENvbnRhaW5lckREXCIgc3R5bGU9e3RoaXMuc3R5bGVzLmRyb3Bkb3dubGV2ZWxjZWxsfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYCR7ZWwua2V5fWAgPT09IGAke3RoaXMucHJvcHMuZGlzcFZhbH1gKXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlcy5kcm9wZG93bmxldmVsY2VsbHZhbC5iYWNrZ3JvdW5kID0gXCIjMzI3NkIxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZXMuZHJvcGRvd25sZXZlbGNlbGx2YWwuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2B2aXNkX2Nid2lfZWRpdENvbnRhaW5lckREQ2VsbF8ke2l9YH0ga2V5PXtgJHtpfWRyZGB9IG9uQ2xpY2s9e3RoaXMub25PcHRpb25TZWxlY3RlZC5iaW5kKHRoaXMsIGVsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMuc3R5bGVzLmRyb3Bkb3dubGV2ZWxjZWxsdmFsfSBrZXk9e2VsLmtleSArIGl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnZhbHVlICE9PSBcIlwiID8gYCR7ZWwua2V5fSAtICR7ZWwudmFsdWV9YCA6ICBlbC5rZXlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2RfY2J3aV9sYWJlbEJveFwiIG9uQ2xpY2s9e3RoaXMub25MYWJlbENsaWNrLmJpbmQodGhpcyl9IHN0eWxlPXt0aGlzLnN0eWxlcy5sYWJlbHRleHR9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidmlzZF9jYndpX2xhYmVsXCIgc3R5bGU9e3RoaXMuc3R5bGVzLmxhYmVsdGV4dExhYmVsfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwVmFsfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ29tYm9Cb3hXaXRoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBvbkNoYW5nZTogbnVsbCxcbiAgb25LZXlVcDogbnVsbCxcbiAgb25PcHRpb25TZWxlY3RlZDogbnVsbCxcbiAgb25MYWJlbENsaWNrOiBudWxsLFxuICBvcHRpb25zOiBudWxsLFxuICBkaXNwVmFsOiBcIlwiLFxuICBpbnB1dFZhbDogXCJcIlxufTtcblxuQ29tYm9Cb3hXaXRoSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5VXA6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbk9wdGlvblNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25MYWJlbENsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBkaXNwVmFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFZhbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tYm9Cb3hXaXRoSW5wdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwiUmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==