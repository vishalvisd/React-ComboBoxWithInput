import ComboBoxWithInput from "ComboBoxWithInput";
import React, {Component} from "react";

class ComboBoxWithInputDemo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      example1: {
        value: "Inline Edit box"
      },
      validation: {
        validationSuccess: true,
        errorMessage: "Invalid"
      }
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  displayFormatter(text){
    return <p><Icon icon="check"></Icon>{text}</p>;
  }

  handleChange1() {
    var newValue = this.refs.example1.value;

    //validation
    var valid = true;
    var minLength = 8;
    if (newValue.length < minLength){
      valid = false;
    }
    this.setState({
      example1: {
        value: newValue
      },
      validation: {
        validationSuccess: valid,
        errorMessage: "Minimum length should be 8"
      }
    });
  }

  handleSave() {
    return new Promise(function (resolve) {
      var timeOut = 3000;
      setTimeout(()=> {
        resolve("Done");
      }, timeOut);
    });
  }

  render() {
    var example1Props = {
      ref: "example1",
      value: this.state.example1.value,
      label: "Inline Input",
      validation: this.state.validation,
      onChange: this.handleChange1.bind(this),
      onSave: this.handleSave.bind(this),
      displayFormatter: this.displayFormatter.bind(this)
    };
    return (
      <span>
        <ComboBoxWithInput {...example1Props} />
      </span>
    );

  }
}

export default ComboBoxWithInput;
