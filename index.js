import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated,
  AmbientLight,
  PointLight,
  StyleSheet
} from 'react-360';

import Menu from "./panels/menu";
import Canvas from "./panels/canvas";
import {connect} from './store'

import {
  Easing
} from 'react-native';

class vrApp extends React.Component {
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

const AnimatedModel = Animated.createAnimatedComponent(Model);

class objectView extends React.Component {
  state = {
    rotation: new Animated.Value(0),
    currentObj: this.props.current
  }

  componentDidMount() {
    this.rotate();
    console.log('hello')
  }


  componentDidUpdate(previousProps, previousState) {
      if (previousState.currentObj !== this.props.current) {
          this.setState({currentObj: this.props.current})
          this.rotate();
      }
  }

  rotate = () => {
    this.state.rotation.setValue(0);
    Animated.timing(
      this.state.rotation,
      {
        toValue: 360,
        duration: 50000,
        easing: Easing.linear,
      }
    ).start(this.rotate);
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={0.5} />
        <AnimatedModel
          source={{
            obj: asset(this.state.currentObj + '.obj'),
            mtl: asset(this.state.currentObj + '.mtl')
          }}
          style={{
            transform: [
              {translate: [650, -60, -500]},
              {rotateY: this.state.rotation},
              {rotateX: 20},
              {scale: this.state.currentObj !== 'mining-dump-truck' ? 5: 1}
            ]
          }}
        />
      </View>
    );
  }
};

const ConnectedObject = connect(objectView);

AppRegistry.registerComponent("vrApp", () => vrApp);
AppRegistry.registerComponent("3DObject", () => ConnectedObject);
