import React, {Component} from "react";
import styles from "./style.css";
import cssModules from "react-css-modules";
import uuid from 'node-uuid';

class ComboBoxWithInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      lastValue: "",
      textBoxId: uuid.v4()
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
        //document.getElementById(this.state.textBoxId).focus();
      },0)
    }
    return (
      this.state.open ? <div contentEditable onBlur={this.onBlured.bind(this)} className={styles.container}>
          <span>
              <input styleName='rta-input' type='text'
                     onChange={this.onChange.bind(this)}
                     onKeyUp={this.onKeyUp.bind(this)}
                     value={this.props.inputVal}
                     id={this.state.textBoxId}
              />
         </span>
        <div className={styles.dropdownlevelcell}>
          {
            this.props.options.map((el, i) => {
              var furtherDDCellStyle;
              if (`${el.key}` === `${this.props.dispVal}`){
                furtherDDCellStyle = {
                  background : "#3276B1",
                  color:"white",
                }
              }
              return <div key={`${i}drd`} style={furtherDDCellStyle} onClick={this.onOptionSelected.bind(this, el)}
                          className={styles.dropdownlevelcellval} key={el.key + i}>
                {
                  el.value !== "" ? `${el.key} - ${el.value}` :  el.key
                }
              </div>
            })
          }
        </div>
      </div> : <div onClick={this.onLabelClick.bind(this)} className={styles.labeltext}>
        <label>
          {this.props.dispVal}
        </label>
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
  inputVal: ""
};

ComboBoxWithInput.propTypes = {
  onChange: React.PropTypes.func,
  onKeyUp: React.PropTypes.func,
  onOptionSelected: React.PropTypes.func,
  onLabelClick: React.PropTypes.func,
  options: React.PropTypes.array,
  dispVal: React.PropTypes.string,
  inputVal: React.PropTypes.string
};

export default cssModules(ComboBoxWithInput, styles);
