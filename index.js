import React from "react";
import { AppRegistry, StyleSheet, View, asset } from "react-360";
import Menu from "./panels/menu";
import Canvas from "./panels/canvas";

export default class vrApp extends React.Component {
  state = {
    currentSelected: "Background",
    isHidden: false,
  };

  setSelected = (selected) => {
    this.setState({ currentSelected: selected });
  };

  setParentIsHidden = (hidden) => {
    this.setState({ isHidden: hidden });
  };

  render() {
    return (
      <View style={styles.full}>
        <Menu
          setParentSelected={this.setSelected}
          setParentIsHidden={this.setParentIsHidden}
        />
        <View style={{ display: this.state.isHidden ? "none" : "flex" }}>
          <Canvas currentSelected={this.state.currentSelected} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    width: 1000,
    height: 600,
    flexDirection: "row",
  },
});

AppRegistry.registerComponent("vrApp", () => vrApp);
