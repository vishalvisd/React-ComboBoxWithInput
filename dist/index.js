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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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
	                typeof _this2.props.optionFormatter === "function" ? _this2.props.optionFormatter(el) : el.key === undefined ? el : el.value !== "" ? el.key + " - " + el.value : el.key
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
	  selectedOptionStyle: null,
	  optionFormatter: null
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
	  selectedOptionStyle: _react2.default.PropTypes.object,
	  optionFormatter: _react2.default.PropTypes.func
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