import ComboBoxWithInput from "combobox-with-input";
import React, {Component} from "react";
import JSONViewer from "react-json-viewer";

class ComboBoxWithInputDemo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      options1: [
        {
          key: "Level 1 Price",
          value: "300"
        }, {
          key: "Level 2 Price",
          value: "450"
        }, {
          key: "Level 3 Price",
          value: "550"
        }
      ],
      options2: [
       300, 450, 550
      ],
      dispVal1: "",
      inputVal1: "",
      dispVal2: "",
      inputVal2: "",
      selectedOptionStyle: {
        background: "gray",
        color: "#ffffff"
      },
      width1: "300px",
      height1: "50px",
      width2: "150px",
      height2: "30px"
    };
  }

  componentDidMount() {
    this.forceUpdate();
  }
  
  //todo (vishal) improvement
  onOptionSelected(option){
    this.setState({
      dispVal1: option.value
    })
  }

  onChange(newValue){
    if (this.firstDDlastValidValue === undefined){
      this.firstDDlastValidValue = "";
    }
    if (isNaN(Number(newValue)) === false){
      this.firstDDlastValidValue = newValue;
      this.setState({
        inputVal1: newValue,
        dispVal1: newValue
      })
    } else {
      this.setState({
        inputVal1: this.firstDDlastValidValue,
        dispVal1: this.firstDDlastValidValue
      })
    }

  }

  //todo (vishal) improvement
  onOptionSelected2(option){
    this.setState({
      dispVal2: option
    })

  }

  onChange2(newValue){
    this.setState({
      inputVal2: newValue,
      dispVal2: newValue
    })
  }

  optionFormatter(el){
    return el.key === undefined ? el : (el.value !== "" ? `${el.key} - ${el.value}` :  el.key)
  }

  ddPropType(comp, compNum){
    return <table style={{width: "100%"}}>
      <tbody>
      {
        Object.keys(comp.propTypes).map((prop, i)=>{
          return <tr key={i+compNum}>
            <td>
              {prop}
            </td>
            <td>
              {
                (prop === "onChange" || prop === "onOptionSelected" || prop === "optionFormatter") ? "func()" :
                    prop === "selectedOptionStyle" ? <JSONViewer json={this.state[`${prop}`]}></JSONViewer> :
                      <JSONViewer json={this.state[`${prop}${compNum}`]}></JSONViewer>}
            </td>
          </tr>
        })
      }
      </tbody>
      </table>
  }

  render() {
    return (
      <span>
        <div style={{width: "80%", margin: "0 auto"}}>
        <table style={{width: "100%"}}>
          <tbody>
          <tr>
            <th>

            </th>
            <th>
              Current Props
            </th>
          </tr>
          <tr>
            <td style={{width: "40%", verticalAlign:"top", align:"center"}}>
          <div style={{width:"50%", margin: "0% auto"}}>
                Please select a rate level or enter a rate :-
                <ComboBoxWithInput onChange={this.onChange.bind(this)}
                                   onOptionSelected={this.onOptionSelected.bind(this)}
                                   options={this.state.options1}
                                   dispVal={this.state.dispVal1}
                                   inputVal={this.state.inputVal1}
                                   width= {this.state.width1}
                                   height={this.state.height1}
                                   selectedOptionStyle = {this.state.selectedOptionStyle}
                                   optionFormatter = {this.optionFormatter.bind(this)}/>


</div>

            </td>
            <td style={{width: "40%"}}>
              <div style={{ margin: "0 auto"}}>
               {this.ddPropType.bind(this, ComboBoxWithInput, 1)()}
                </div>
            </td>

          </tr>
          </tbody>
          </table>
</div>

        </span>
    );

  }
}

export default ComboBoxWithInputDemo;
