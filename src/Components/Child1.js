import { Component } from "react";

export default class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      secret: "You are The One",
      showSecret: false
    };
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.name, this.props.name);

    if (prevProps.name !== this.props.name) {
      this.setState({ showSecret: !this.state.showSecret });
    }
  }

  componentWillUnmount() {
    alert("Fair enough");
  }

  render() {
    return (
      <section className="child1">
        <input type='text' onChange={this.props.grabInput} placeholder="Alias..." />
        <button onClick={this.props.enter}>ENTER</button>
        <p>{this.props.name}</p>
        {this.state.showSecret ? (
          <p>{this.state.secret}</p>
        ) : (
          <p></p>
        )}
      </section>
    );
  }
}