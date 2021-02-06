import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';


class MenuItem extends React.Component{
    state = {
        currentSelected : this.props.currentSelected,
        isHovered : false,
        text : this.props.text,
        setSelected : this.props.setSelected,
    }

    
    componentDidUpdate(prevProps) {
        if (this.props.currentSelected !== prevProps.currentSelected) {
          this.setState({currentSelected:this.props.currentSelected})
        }
    }
   

    render() {
        return (
            <View style={{ 
                paddingLeft: 20, 
                marginBottom: 15,
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor : this.state.currentSelected === this.state.text ? 'rgba(0, 91, 181, 1)' : 'rgba(31, 33, 36, 1)' 
            }}
            onEnter={() => {
                this.setState({isHovered:true})
            }}
            onExit={() => {
                this.setState({isHovered:false})
            }}
            >
                <VrButton style={styles.vrButton} onClick={() => {this.state.setSelected(this.state.text)}}>
                    <Text style={{
                        fontSize : this.state.isHovered ? 21 : 20,
                    }}>
                        {this.state.text}
                    </Text>
                </VrButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vrButton: {
        width: '100%',
    },
});



export default MenuItem;