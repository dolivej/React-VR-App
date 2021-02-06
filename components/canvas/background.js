import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  Environment
} from 'react-360';

backgrounds = [
    {
      name:'White Room',
      asset: 'whiteRoom.jpg'
    },
    {
      name:'Modern Room',
      asset: 'grayRoom.jpg'
    },
    {
      name:'Virtual World',
      asset: 'world.jpg'
    }
]

class Background extends React.Component{
    state = {
        selectedRoom : this.props.selectedRoom,
        setSelectedRoom : this.props.setSelectedRoom
    }

    render() {
        return (
            <View style={styles.canvas}>
                <View style={styles.headingBox}>
                    <Text style={styles.headingText}>
                        Select a Background:
                    </Text>
                </View>
                <View style={styles.optionsBox}>
                    {
                        backgrounds.map((item, index) => {
                            return(
                                <View style={{padding:5, margin:5, height: '80%', backgroundColor:'#fff', borderRadius:5, width: 235, borderWidth: 4, borderColor: this.state.selectedRoom === item.name ? 'rgba(0, 91, 181, 1)' : 'rgba(255, 255, 255,1)'}} key={index}>
                                    <VrButton onClick={()=>{
                                        Environment.setBackgroundImage(asset('360_' + item.asset))
                                        this.setState({selectedRoom : item.name})
                                        this.state.setSelectedRoom(item.name)
                                    }}>
                                        <Image style={{width: 217, height: 217, borderRadius:5}} source={asset(item.asset)} />
                                        <View style={{paddingTop:10}}>
                                            <Text style={{color:'rgba(19, 20, 20,1)', fontSize:30 }}>{item.name}</Text>
                                        </View>
                                    </VrButton>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    canvas: {
        // Fill the entire surface
        width: '100%',
        height: '100%',
    },
    headingBox: {
        padding: 20,
    },
    optionsBox: {
        padding: 20,
        width: '100%',
        height: '80%',
        flexDirection: 'row'
    },
    headingText: {
        fontSize: 40,
        fontWeight: "400",
    },
});

export default Background;