import React, {Component} from "react";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Rodrigo",
      todoItems: [
        { action: "Buy Milk", done: false },
        { action: "Dentist at 5pm", done: true },
        { action: "Go to Gym", done: false },
      ],
      newTodo: "",
    };
  }
  

  render = () => (
    <React.Fragment>

    </React.Fragment>
  );
  
}