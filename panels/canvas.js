import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Background from '../components/canvas/background'
import Shop from '../components/canvas/shop'

class Canvas extends React.Component{
    state = {
        currentSelected : this.props.currentSelected,
        selectedRoom : 'White Room'
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentSelected !== prevProps.currentSelected) {
          this.setState({currentSelected:this.props.currentSelected})
        }
    }

    setSelectedRoom = (background) => {
        this.setState({selectedRoom : background});
    }

    render() {
        return (
            <View style={styles.canvas}>
                {this.state.currentSelected === 'Background' && <Background selectedRoom={this.state.selectedRoom} setSelectedRoom={this.setSelectedRoom}/>}
                {this.state.currentSelected === 'Shop' && <Shop />}
                {this.state.currentSelected !== 'Background' &&  this.state.currentSelected !== 'Shop'
                && <View style={styles.headingBox}>
                        <Text style={styles.headingText}>
                            {this.props.currentSelected}
                        </Text>
                    </View>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    canvas: {
        // Fill the entire surface
        width:770,
        height: 560,
        backgroundColor: 'rgba(79, 81, 84, 1)',
        margin:10,
        borderRadius: 10
    },
    headingBox: {
        padding: 20,
    },
    headingText: {
        fontSize: 40,
        fontWeight: "400",
    },
});

export default Canvas;