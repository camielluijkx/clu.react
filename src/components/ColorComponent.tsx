import React, { Component } from 'react';
import ColorAppStore from "../stores/ColorAppStore";
import State from "../models/State";

class ColorComponent extends Component {

  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
        color: ColorAppStore.getActiveColor()
    }
  }

  componentDidMount() {
      ColorAppStore.on("storeUpdated", this.updateBackgroundColor);
  }

  componentWillUnmount() {
      ColorAppStore.removeListener("storeUpdated", this.updateBackgroundColor);
  }

  updateBackgroundColor = () => {
      this.setState({color: ColorAppStore.getActiveColor()})
  };

  render() {
      return (
          <div className="color-container" style={{backgroundColor: this.state.color}}/>
      );
  }

}

export default ColorComponent;
