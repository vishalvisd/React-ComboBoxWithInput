import ComboBoxWithInput from "../src/index";
import React, {Component} from "react";

class ComboBoxWithInputDemo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      dropDownOptions: [
        {
          key: "a",
          value: "a"
        }, {
          key: "b",
          value: "b"
        }, {
          key: "c",
          value: "c"
        }
      ],
      dispVal: "",
      inputVal: ""
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }
  
  //todo (vishal) improvement
  onOptionSelected(option){
    this.setState({
      dispVal: option.value
    })
  }

  onChange(newValue){
    this.setState({
      inputVal: newValue
    })
  }

  render() {
    return (
      <span>
       <ComboBoxWithInput onChange={this.onChange.bind(this)}
                          onOptionSelected={this.onOptionSelected.bind(this)}
                          options={this.state.dropDownOptions}
                          dispVal={this.state.dispVal}
                          inputVal={this.state.inputVal}/>
      </span>
    );

  }
}

export default ComboBoxWithInputDemo;
