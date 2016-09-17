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
	        position: "relative",
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
	          document.getElementById(_this2.state.textBoxId).focus();
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
	              var dropDownLevelCellValClone = JSON.parse(JSON.stringify(_this2.styles.dropdownlevelcellval));
	              var topass;
	              if (el.key === undefined) {
	                topass = "" + el === "" + _this2.props.dispVal;
	              } else {
	                topass = "" + el.key === "" + _this2.props.dispVal || "" + el.value === "" + _this2.props.dispVal;
	              }
	              if (topass) {
	                if (_this2.props.selectedOptionStyle !== null) {
	                  Object.keys(_this2.props.selectedOptionStyle).map(function (styleKey) {
	                    dropDownLevelCellValClone[styleKey] = _this2.props.selectedOptionStyle[styleKey];
	                  });
	                } else {
	                  //default styles
	                  dropDownLevelCellValClone.background = "#3276B1";
	                  dropDownLevelCellValClone.color = "#ffffff";
	                }
	              }
	              return _react2.default.createElement(
	                "div",
	                { className: "visd_cbwi_editContainerDDCell_" + i, key: "" + i + _this2.state.textBoxId + "drd", onClick: _this2.onOptionSelected.bind(_this2, el),
	                  style: dropDownLevelCellValClone },
	                el.key === undefined ? el : el.value !== "" ? el.key + " - " + el.value : el.key
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
	  inputVal: "",
	  selectedOptionStyle: null
	};
	
	//todo (visd) make optional as applicable
	ComboBoxWithInput.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  onKeyUp: _react2.default.PropTypes.func,
	  onOptionSelected: _react2.default.PropTypes.func,
	  onLabelClick: _react2.default.PropTypes.func,
	  options: _react2.default.PropTypes.array,
	  dispVal: _react2.default.PropTypes.string,
	  inputVal: _react2.default.PropTypes.string,
	  selectedOptionStyle: _react2.default.PropTypes.object
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYzhhNGM3ZmEzMzc3YTYzZTMzZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiQ29tYm9Cb3hXaXRoSW5wdXQiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsIm9wZW4iLCJsYXN0VmFsdWUiLCJ0ZXh0Qm94SWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdHlsZXMiLCJjb250YWluZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwicnRhSW5wdXQiLCJtYXJnaW4iLCJoZWlnaHQiLCJmb250U2l6ZSIsImJveFNpemluZyIsImRyb3Bkb3dubGV2ZWxjZWxsIiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsInRleHRBbGlnbiIsImRyb3Bkb3dubGV2ZWxjZWxsdmFsIiwiYm9yZGVyIiwiY29sb3IiLCJjdXJzb3IiLCJsaW5lSGVpZ2h0IiwibGFiZWx0ZXh0IiwibGFiZWx0ZXh0TGFiZWwiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZWRpdGFibGVDb250YWluZXIiLCJzeW50RXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZSIsIm9uS2V5VXAiLCJrZXlDb2RlIiwic2V0U3RhdGUiLCJvcHRpb24iLCJvbk9wdGlvblNlbGVjdGVkIiwiZGlzcFZhbCIsIm9uQ2xpY2siLCJyZWxhdGVkVGFyZ2V0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsIm9uQmx1cmVkIiwiYmluZCIsImlucHV0VmFsIiwib3B0aW9ucyIsIm1hcCIsImVsIiwiaSIsImRyb3BEb3duTGV2ZWxDZWxsVmFsQ2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b3Bhc3MiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZE9wdGlvblN0eWxlIiwiT2JqZWN0Iiwia2V5cyIsInN0eWxlS2V5Iiwib25MYWJlbENsaWNrIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImFycmF5Iiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7O0tBRU1BLGlCOzs7QUFDSiw4QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSx1SUFDcEJELEtBRG9CLEVBQ2JDLE9BRGE7O0FBRTFCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNLEtBREs7QUFFWEMsa0JBQVcsRUFGQTtBQUdYQyxrQkFBV0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLFlBQTNCO0FBSEEsTUFBYjtBQUtBLFdBQUtDLE1BQUwsR0FBYztBQUNaQyxrQkFBVztBQUNUQyxtQkFBVSxVQUREO0FBRVRDLGdCQUFPLE1BQUtaLEtBQUwsQ0FBV1ksS0FBWCxHQUFtQixNQUFLWixLQUFMLENBQVdZLEtBQTlCLEdBQXNDO0FBRnBDLFFBREM7QUFLWkMsaUJBQVU7QUFDUkYsbUJBQVUsVUFERjtBQUVSRyxpQkFBUSxLQUZBO0FBR1JDLGlCQUFR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LGdCQUFNbUIsU0FBTixDQUFnQkcsTUFQRTtBQVE1QlYsd0JBQXFCLGdCQUFNTyxTQUFOLENBQWdCSTtBQVJULEVBQTlCOzttQkFXZS9FLGlCOzs7Ozs7QUN2TWYsZ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJpbmRleFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbmRleFwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzhhNGM3ZmEzMzc3YTYzZTMzZlxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENvbWJvQm94V2l0aElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgbGFzdFZhbHVlOiBcIlwiLFxuICAgICAgdGV4dEJveElkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDApXG4gICAgfTtcbiAgICB0aGlzLnN0eWxlcyA9IHtcbiAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiBcIjcwMHB4XCJcbiAgICAgIH0sXG4gICAgICBydGFJbnB1dDoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxuICAgICAgfSxcbiAgICAgIGRyb3Bkb3dubGV2ZWxjZWxsOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICB0b3A6IHRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBcIjMwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICB6SW5kZXg6IFwiOTk5OFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgfSxcbiAgICAgIGRyb3Bkb3dubGV2ZWxjZWxsdmFsOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZhZmFmYVwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiXG4gICAgICB9LFxuICAgICAgbGFiZWx0ZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiXG4gICAgICB9LFxuICAgICAgbGFiZWx0ZXh0TGFiZWw6IHtcbiAgICAgICAgbGVmdDogXCIwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBjdXJzb3I6IFwiZ3JhYlwiLFxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0ID8gdGhpcy5wcm9wcy5oZWlnaHQgOiBcIjMwcHhcIixcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgPyB0aGlzLnByb3BzLmhlaWdodCA6IFwiMzBweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxOHB4XCJcbiAgICAgIH0sXG4gICAgICBlZGl0YWJsZUNvbnRhaW5lcjoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShzeW50RXZlbnQpe1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN5bnRFdmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZSl7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uS2V5VXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleVVwKGUpO1xuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25TZWxlY3RlZChvcHRpb24pe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQob3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBvbkxhYmVsQ2xpY2soKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBsYXN0VmFsdWU6IHRoaXMucHJvcHMuZGlzcFZhbFxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cmVkKGUpe1xuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgPT09IG51bGwpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiA9PT0gdHJ1ZSl7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhdGUudGV4dEJveElkKS5mb2N1cygpO1xuICAgICAgfSwwKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfY29udGFpbmVyXCIgc3R5bGU9e3RoaXMuc3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wZW4gP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfZWRpdENvbnRhaW5lclwiIGNvbnRlbnRFZGl0YWJsZSBvbkJsdXI9e3RoaXMub25CbHVyZWQuYmluZCh0aGlzKX0gc3R5bGU9e3RoaXMuc3RhdGUuZWRpdGFibGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidmlzZF9jYndpX2VkaXRDb250YWluZXJJbnB1dFwiIHN0eWxlPXt0aGlzLnN0eWxlcy5ydGFJbnB1dH0gdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsfVxuICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMuc3RhdGUudGV4dEJveElkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc2RfY2J3aV9lZGl0Q29udGFpbmVyRERcIiBzdHlsZT17dGhpcy5zdHlsZXMuZHJvcGRvd25sZXZlbGNlbGx9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wRG93bkxldmVsQ2VsbFZhbENsb25lID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0eWxlcy5kcm9wZG93bmxldmVsY2VsbHZhbCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9wYXNzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWwua2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3Bhc3MgPSBgJHtlbH1gID09PSBgJHt0aGlzLnByb3BzLmRpc3BWYWx9YDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3Bhc3MgPSBgJHtlbC5rZXl9YCA9PT0gYCR7dGhpcy5wcm9wcy5kaXNwVmFsfWAgfHwgYCR7ZWwudmFsdWV9YCA9PT0gYCR7dGhpcy5wcm9wcy5kaXNwVmFsfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9wYXNzKXtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZE9wdGlvblN0eWxlICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRPcHRpb25TdHlsZSkubWFwKChzdHlsZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bkxldmVsQ2VsbFZhbENsb25lW3N0eWxlS2V5XSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRPcHRpb25TdHlsZVtzdHlsZUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25MZXZlbENlbGxWYWxDbG9uZS5iYWNrZ3JvdW5kID0gXCIjMzI3NkIxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bkxldmVsQ2VsbFZhbENsb25lLmNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHZpc2RfY2J3aV9lZGl0Q29udGFpbmVyRERDZWxsXyR7aX1gfSBrZXk9e2Ake2l9JHt0aGlzLnN0YXRlLnRleHRCb3hJZH1kcmRgfSBvbkNsaWNrPXt0aGlzLm9uT3B0aW9uU2VsZWN0ZWQuYmluZCh0aGlzLCBlbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtkcm9wRG93bkxldmVsQ2VsbFZhbENsb25lfT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5rZXkgPT09IHVuZGVmaW5lZCA/IGVsIDogKGVsLnZhbHVlICE9PSBcIlwiID8gYCR7ZWwua2V5fSAtICR7ZWwudmFsdWV9YCA6ICBlbC5rZXkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXNkX2Nid2lfbGFiZWxCb3hcIiBvbkNsaWNrPXt0aGlzLm9uTGFiZWxDbGljay5iaW5kKHRoaXMpfSBzdHlsZT17dGhpcy5zdHlsZXMubGFiZWx0ZXh0fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInZpc2RfY2J3aV9sYWJlbFwiIHN0eWxlPXt0aGlzLnN0eWxlcy5sYWJlbHRleHRMYWJlbH0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGlzcFZhbH1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvbWJvQm94V2l0aElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DaGFuZ2U6IG51bGwsXG4gIG9uS2V5VXA6IG51bGwsXG4gIG9uT3B0aW9uU2VsZWN0ZWQ6IG51bGwsXG4gIG9uTGFiZWxDbGljazogbnVsbCxcbiAgb3B0aW9uczogbnVsbCxcbiAgZGlzcFZhbDogXCJcIixcbiAgaW5wdXRWYWw6IFwiXCIsXG4gIHNlbGVjdGVkT3B0aW9uU3R5bGU6IG51bGxcbn07XG5cbi8vdG9kbyAodmlzZCkgbWFrZSBvcHRpb25hbCBhcyBhcHBsaWNhYmxlXG5Db21ib0JveFdpdGhJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlVcDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3B0aW9uU2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvbkxhYmVsQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGRpc3BWYWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0VmFsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZE9wdGlvblN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21ib0JveFdpdGhJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9