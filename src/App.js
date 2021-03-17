import { Component } from "react";
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      siteTitle: "",
      name: "",
      page: 1,
      nameSaver: ''
    };
  }

  componentDidMount() {
    this.setState({ siteTitle: "WELCOME, PROGRAMS" });
  }

  changeView = (e) => {
    this.setState({ page: e.target.name });
  };

  grabInput = (e) => {
    this.setState({ nameSaver: e.target.value });
  };

  enter = () => {
    this.setState({ name: this.state.nameSaver })
  }

  render() {
    const pageView = {
      1: <Child1 name={this.state.name} grabInput={this.grabInput} enter={this.enter} />,
      2: <Child2 />
    };

    return (
      <div className="App">
        <h1>{this.state.siteTitle}</h1>
        {pageView[this.state.page]}
        <div className="button-container">
        <button name="1" onClick={this.changeView}>INJECT</button>
        <button name="2" onClick={this.changeView}>EJECT</button>
        </div>
      </div>
    );
  }
}
