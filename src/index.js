import React, {Component} from "react";

class ComboBoxWithInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      lastValue: "",
      textBoxId: Math.floor(Math.random() * 100000000000)
    };
    this.styles = {
      container: {
        position: "relative",
        width: this.props.width ? this.props.width : "700px"
      },
      rtaInput: {
        position: "relative",
        margin: "0px",
        height: this.props.height ? this.props.height : "30px",
        width: "100%",
        fontSize: "18px",
        boxSizing: "border-box"
      },
      dropdownlevelcell: {
        position: "absolute",
        left: "0",
        top: this.props.height ? this.props.height : "30px",
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
        lineHeight: this.props.height ? this.props.height : "30px"
      },
      labeltext: {
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        border: "1px solid",
        height: this.props.height ? this.props.height : "30px"
      },
      labeltextLabel: {
        left: "0px",
        marginBottom: "0px",
        cursor: "grab",
        display: "inline-block",
        height: this.props.height ? this.props.height : "30px",
        lineHeight: this.props.height ? this.props.height : "30px",
        fontSize: "18px"
      },
      editableContainer: {
        width: "100%"
      }
    }
  }

  onChange(syntEvent){
    if (typeof this.props.onChange === "function") {
      this.props.onChange(syntEvent.target.value);
    }
  }

  onKeyUp(e){
    if (typeof this.props.onKeyUp === "function") {
      this.props.onKeyUp(e);
    }
    if (e.keyCode === 13){
      this.setState({
        open: false
      });
    }

    if (e.keyCode === 27){
      this.setState({
        open: false
      });
    }
  }

  onOptionSelected(option){
    this.setState({
      open: false
    });
    if (typeof this.props.onOptionSelected === "function") {
      this.props.onOptionSelected(option);
    }
  }

  onLabelClick(){
    this.setState({
      open: true,
      lastValue: this.props.dispVal
    });
    if (typeof this.props.onClick === "function") {
      this.props.onClick();
    }
  }

  onBlured(e){
    if (e.relatedTarget === null){
      this.setState({
        open: false
      });
    }
  }

  render() {
    if (this.state.open === true){
      setTimeout(()=>{
        document.getElementById(this.state.textBoxId).focus();
      },0)
    }
    return (
      <div className="visd_cbwi_container" style={this.styles.container}>
        {
          this.state.open ?
            <div className="visd_cbwi_editContainer" contentEditable onBlur={this.onBlured.bind(this)} style={this.state.editableContainer}>
              <input className="visd_cbwi_editContainerInput" style={this.styles.rtaInput} type='text'
                     onChange={this.onChange.bind(this)}
                     onKeyUp={this.onKeyUp.bind(this)}
                     value={this.props.inputVal}
                     id={this.state.textBoxId}
              />
              <div className="visd_cbwi_editContainerDD" style={this.styles.dropdownlevelcell}>
                {
                  this.props.options.map((el, i) => {
                    var dropDownLevelCellValClone = JSON.parse(JSON.stringify(this.styles.dropdownlevelcellval));
                    var topass;
                    if (el.key === undefined) {
                      topass = `${el}` === `${this.props.dispVal}`;
                    } else {
                      topass = `${el.key}` === `${this.props.dispVal}` || `${el.value}` === `${this.props.dispVal}`
                    }
                    if (topass){
                      if (this.props.selectedOptionStyle !== null){
                        Object.keys(this.props.selectedOptionStyle).map((styleKey) => {
                          dropDownLevelCellValClone[styleKey] = this.props.selectedOptionStyle[styleKey];
                        });
                      } else {
                        //default styles
                        dropDownLevelCellValClone.background = "#3276B1";
                        dropDownLevelCellValClone.color = "#ffffff";
                      }
                    }
                    return <div className={`visd_cbwi_editContainerDDCell_${i}`} key={`${i}${this.state.textBoxId}drd`} onClick={this.onOptionSelected.bind(this, el)}
                                style={dropDownLevelCellValClone}>
                      {
                        (typeof(this.props.optionFormatter) === "function") ? this.props.optionFormatter(el) :
                          el.key === undefined ? el : (el.value !== "" ? `${el.key} - ${el.value}` :  el.key)
                      }
                    </div>
                  })
                }
              </div>
            </div>
            :
            <div className="visd_cbwi_labelBox" onClick={this.onLabelClick.bind(this)} style={this.styles.labeltext}>
              <label className="visd_cbwi_label" style={this.styles.labeltextLabel}>
                {this.props.dispVal}
              </label>
            </div>
        }
      </div>
    );
  }
}

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
  onChange: React.PropTypes.func,
  onKeyUp: React.PropTypes.func,
  onOptionSelected: React.PropTypes.func,
  onLabelClick: React.PropTypes.func,
  options: React.PropTypes.array,
  dispVal: React.PropTypes.string,
  inputVal: React.PropTypes.string,
  selectedOptionStyle: React.PropTypes.object,
  optionFormatter: React.PropTypes.func
};

export default ComboBoxWithInput;
