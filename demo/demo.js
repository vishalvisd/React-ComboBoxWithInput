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
      height2: "30px",

      info: {
        events: [
          "onChange","onKeyUp","onOptionSelected","onLabelClick", "options", "dispVal", "inputVal", "selectedOptionStyle"
        ],
        propType: [
          "func", "func", "func", "func", "array", "string", "string", "object (optional)"
        ],
        description: [
          "Entered Value as callback argument", "Key up event object as callback argument",
          "Selected Option as callback argument", "click event as callback argument",
          "drop down options array. Can be passed either as array of objects formatted - {key:'key1', value:'value1'} or " +
          "array of string - ['option1', 'option2] ", "displayed string when component is not focused",
          "displayed string inside the input box", "valid style object to distinguish the selected option in the dropdown list"
        ]
      }
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

  ddPropType(comp, compNum){
    // return  <table>
    //   <tr>
    //     <th>
    //       Prop
    //     </th>
    //     <th>
    //       Type
    //     </th>
    //     <th>
    //       Current Value
    //     </th>
    //   </tr>
    //
    //   <tr>
    //   </tr>
    //   <tr>
    //     <td>
    //       onChange
    //       onKeyUp: React.PropTypes.func,
    //       onOptionSelected: React.PropTypes.func,
    //       onLabelClick: React.PropTypes.func,
    //       options: React.PropTypes.array,
    //       dispVal: React.PropTypes.string,
    //       inputVal: React.PropTypes.string,
    //       selectedOptionStyle: React.PropTypes.object
    //     </td>
    //     <td>
    //       React.PropTypes.func
    //     </td>
    //     <td>
    //       {this.onChange}
    //     </td>
    //   </tr>
    // </table>
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
                (prop === "onChange" || prop === "onOptionSelected") ? "func()" :
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
                                   selectedOptionStyle = {this.state.selectedOptionStyle}/>


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
