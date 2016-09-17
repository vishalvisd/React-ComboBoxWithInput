# React-ComboBoxWithInput

React component that lets you select from a listed option like in drop down list or combo box as well as by entering a value, like an input box.

- Modify look with custom styles using the different classnames (inspect dom for the classnames)
-  list options can be in either of the two forms
 

   

>  [{key: "Grade A", value: "10"}, {key: "Grade B", "value:"15"}]

or

  

>   [10, 15] / ['10', '15']



# Intallation

> npm i combobox-with-input --save


Props
-----

> <table><tbody><tr><th></th><th>PropType</th><th>Description</th></tr><tr><td>onChange</td><td>func</td><td>Entered
> Value as callback
> argument</td></tr><tr><td>onKeyUp</td><td>func</td><td>Key up event
> object as callback
> argument</td></tr><tr><td>onOptionSelected</td><td>func</td><td>Selected
> Option as callback
> argument</td></tr><tr><td>onLabelClick</td><td>func</td><td>click
> event as callback
> argument</td></tr><tr><td>options</td><td>array</td><td>drop down
> options array. Can be passed either as array of objects formatted -
> {key:'key1', value:'value1'} or array of string - ['option1',
> 'option2] </td></tr><tr><td>dispVal</td><td>string</td><td>displayed
> string when component is not
> focused</td></tr><tr><td>inputVal</td><td>string</td><td>displayed
> string inside the input
> box</td></tr><tr><td>selectedOptionStyle</td><td>object
> (optional)</td><td>valid style object to distinguish the selected
> option in the dropdown list</td></tr></tbody></table>

Demo
----
[Demo Link](https://vishalvisd.github.io/React-ComboBoxWithInput/) 

 
      


