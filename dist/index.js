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
	              var _React$createElement;
	
	              var furtherDDCellStyle;
	              if ("" + el.key === "" + _this2.props.dispVal) {
	                furtherDDCellStyle = {
	                  background: "#3276B1",
	                  color: "white"
	                };
	              }
	              return _react2.default.createElement(
	                "div",
	                (_React$createElement = { className: "visd_cbwi_editContainerDDCell_" + i, key: i + "drd", style: furtherDDCellStyle, onClick: _this2.onOptionSelected.bind(_this2, el)
	                }, _defineProperty(_React$createElement, "style", _this2.styles.dropdownlevelcellval), _defineProperty(_React$createElement, "key", el.key + i), _React$createElement),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzN2JkZTU4NTM5M2JlNGE3NDY5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiQ29tYm9Cb3hXaXRoSW5wdXQiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsIm9wZW4iLCJsYXN0VmFsdWUiLCJ0ZXh0Qm94SWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHlsZXMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwicnRhSW5wdXQiLCJtYXJnaW4iLCJoZWlnaHQiLCJmb250U2l6ZSIsImJveFNpemluZyIsImRyb3Bkb3dubGV2ZWxjZWxsIiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsInRleHRBbGlnbiIsImRyb3Bkb3dubGV2ZWxjZWxsdmFsIiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJsaW5lSGVpZ2h0IiwibGFiZWx0ZXh0IiwibGFiZWx0ZXh0TGFiZWwiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZWRpdGFibGVDb250YWluZXIiLCJzeW50RXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZSIsIm9uS2V5VXAiLCJrZXlDb2RlIiwic2V0U3RhdGUiLCJvcHRpb24iLCJvbk9wdGlvblNlbGVjdGVkIiwiZGlzcFZhbCIsIm9uQ2xpY2siLCJyZWxhdGVkVGFyZ2V0Iiwic2V0VGltZW91dCIsIm9uQmx1cmVkIiwiYmluZCIsImlucHV0VmFsIiwib3B0aW9ucyIsIm1hcCIsImVsIiwiaSIsImZ1cnRoZXJERENlbGxTdHlsZSIsImtleSIsIm9uTGFiZWxDbGljayIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJhcnJheSIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLGlCOzs7QUFDSiw4QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSx1SUFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLEtBREs7QUFFWEMsa0JBQVcsRUFGQTtBQUdYQyxrQkFBV0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLFlBQTNCO0FBSEEsTUFBYjtBQUtBLFdBQUtDLE1BQUwsR0FBYztBQUNaQyxrQkFBVztBQUNUQyxtQkFBVSxVQUREO0FBRVRDLGdCQUFPLE1BQUtaLEtBQUwsQ0FBV1ksS0FBWCxHQUFtQixNQUFLWixLQUFMLENBQVdZLEtBQTlCLEdBQXNDO0FBRnBDLFFBREM7QUFLWkMsaUJBQVU7QUFDUkYsbUJBQVUsVUFERjtBQUVSRyxpQkFBUSxLQUZBO0FBR1JDLGlCQUFRLE1BQUtmLEtBQUwsQ0FBV2UsTUFBWCxHQUFvQixNQUFLZixLQUFMLENBQVdlLE1BQS9CLEdBQXdDLE1BSHhDO0FBSVJILGdCQUFPLE1BSkM7QUFLUkksbUJBQVUsTUFMRjtBQU1SQyxvQkFBVztBQU5ILFFBTEU7QUFhWkMsMEJBQW1CO0FBQ2pCUCxtQkFBVSxV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QyxJQUhOO0FBSTVCSixpQkFBYyxnQkFBTUcsU0FBTixDQUFnQkMsSUFKRjtBQUs1QlYsWUFBUyxnQkFBTVMsU0FBTixDQUFnQkUsS0FMRztBQU01QmxCLFlBQVMsZ0JBQU1nQixTQUFOLENBQWdCRyxNQU5HO0FBTzVCYixhQUFVLGdCQUFNVSxTQUFOLENBQWdCRztBQVBFLEVBQTlCOzttQkFVZWxFLGlCOzs7Ozs7QUN6TGYsZ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbmRleFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbmRleFwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzN2JkZTU4NTM5M2JlNGE3NDY5ZFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENvbWJvQm94V2l0aElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGFzdFZhbHVlOiBcIlwiLFxuICAgICAgdGV4dEJveElkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDApXG4gICAgfTtcbiAgICB0aGlzLnN0eWxlcyA9IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiBcIjcwMHB4XCJcbiAgICAgIH0sXG4gICAgICBydGFJbnB1dDoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxuICAgICAgfSxcbiAgICAgIGRyb3Bkb3dubGV2ZWxjZWxsOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICB0b3A6IHRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBcIjMwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICB6SW5kZXg6IFwiOTk5OFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgfSxcbiAgICAgIGRyb3Bkb3dubGV2ZWxjZWxsdmFsOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZhZmFmYVwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiXG4gICAgICB9LFxuICAgICAgbGFiZWx0ZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiXG4gICAgICB9LFxuICAgICAgbGFiZWx0ZXh0TGFiZWw6IHtcbiAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBjdXJzb3I6IFwiZ3JhYlwiLFxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBcIjMwcHhcIixcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxOHB4XCJcbiAgICAgIH0sXG4gICAgICBlZGl0YWJsZUNvbnRhaW5lcjoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShzeW50RXZlbnQpe1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN5bnRFdmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZSl7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uS2V5VXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleVVwKGUpO1xuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25TZWxlY3RlZChvcHRpb24pe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQob3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBvbkxhYmVsQ2xpY2soKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBsYXN0VmFsdWU6IHRoaXMucHJvcHMuZGlzcFZhbFxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cmVkKGUpe1xuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiA9PT0gdHJ1ZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGF0ZS50ZXh0Qm94SWQpLmZvY3VzKCk7XG4gICAgICB9LDApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2RfY2J3aV9jb250YWluZXJcIiBzdHlsZT17dGhpcy5zdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUub3BlbiA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2RfY2J3aV9lZGl0Q29udGFpbmVyXCIgY29udGVudEVkaXRhYmxlIG9uQmx1cj17dGhpcy5vbkJsdXJlZC5iaW5kKHRoaXMpfSBzdHlsZT17dGhpcy5zdGF0ZS5lZGl0YWJsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfZWRpdENvbnRhaW5lcklucHV0XCIgc3R5bGU9e3RoaXMuc3R5bGVzLnJ0YUlucHV0fSB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx9XG4gICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5zdGF0ZS50ZXh0Qm94SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzZF9jYndpX2VkaXRDb250YWluZXJERFwiIHN0eWxlPXt0aGlzLnN0eWxlcy5kcm9wZG93bmxldmVsY2VsbH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1cnRoZXJERENlbGxTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGAke2VsLmtleX1gID09PSBgJHt0aGlzLnByb3BzLmRpc3BWYWx9YCl7XG4gICAgICAgICAgICAgICAgICAgICAgZnVydGhlckREQ2VsbFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCA6IFwiIzMyNzZCMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHZpc2RfY2J3aV9lZGl0Q29udGFpbmVyRERDZWxsXyR7aX1gfSBrZXk9e2Ake2l9ZHJkYH0gc3R5bGU9e2Z1cnRoZXJERENlbGxTdHlsZX0gb25DbGljaz17dGhpcy5vbk9wdGlvblNlbGVjdGVkLmJpbmQodGhpcywgZWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5zdHlsZXMuZHJvcGRvd25sZXZlbGNlbGx2YWx9IGtleT17ZWwua2V5ICsgaX0+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudmFsdWUgIT09IFwiXCIgPyBgJHtlbC5rZXl9IC0gJHtlbC52YWx1ZX1gIDogIGVsLmtleVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzZF9jYndpX2xhYmVsQm94XCIgb25DbGljaz17dGhpcy5vbkxhYmVsQ2xpY2suYmluZCh0aGlzKX0gc3R5bGU9e3RoaXMuc3R5bGVzLmxhYmVsdGV4dH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfbGFiZWxcIiBzdHlsZT17dGhpcy5zdHlsZXMubGFiZWx0ZXh0TGFiZWx9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRpc3BWYWx9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db21ib0JveFdpdGhJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2hhbmdlOiBudWxsLFxuICBvbktleVVwOiBudWxsLFxuICBvbk9wdGlvblNlbGVjdGVkOiBudWxsLFxuICBvbkxhYmVsQ2xpY2s6IG51bGwsXG4gIG9wdGlvbnM6IG51bGwsXG4gIGRpc3BWYWw6IFwiXCIsXG4gIGlucHV0VmFsOiBcIlwiXG59O1xuXG5Db21ib0JveFdpdGhJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlVcDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3B0aW9uU2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkxhYmVsQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGRpc3BWYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0VmFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21ib0JveFdpdGhJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9