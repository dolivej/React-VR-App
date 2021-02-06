import React from 'react';
import {
    StyleSheet,
    View,
    asset,
    Animated,
} from 'react-360';

import Entity from 'Entity';
import {connect} from '../store'

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class ItemView extends React.Component{
   
    rotation = new Animated.Value(0)
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.current !== this.props.current) {
          this.rotation.setValue(0);
          Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
        }
    }

    render() {
        return (
            <View>
                {/* <AnimatedEntity
                    source={{
                        obj: asset('Plane.obj'),
                        mtl: asset('Plane.mtl'),
                    }}
                    style={{
                        transform: [
                        {scale: 1},
                        {rotateX: 300},
                        {rotateZ: this.rotation},
                        {rotateY: 20},
                        ]
                    }}
                >
                </AnimatedEntity> */}
            </View>
           
        );
    }
}


const styles = StyleSheet.create({
});

export default connect(ItemView);
