import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton,
} from 'react-360';
import {connect, setCurrent} from '../../store'


items = [
    {
      name:'Mining Truck',
      asset: 'mining-dump-truck.png',
      asset3D: 'mining-dump-truck',
      description: 'Watch out when it backs up.'
    },
    {
      name:'Fire Extinguisher',
      asset: 'fire-extinguisher.png',
      asset3D: 'fire-extinguisher',
      description: 'Excellent propulsion device, also puts out fires.'
    },
    {
      name:'Fox',
      asset: 'fox.png',
      asset3D: 'fox',
      description: 'For those who cant decide if they like cats or dogs more.'
    },
    {
      name:'Super Nintendo',
      asset: 'super-nintendo.png',
      asset3D: 'super-nintendo',
      description: 'My score is the high score, your score is... not.'
    },
    
]

class Shop extends React.Component{
    state = {
        selectedRoom : this.props.selectedRoom,
        setSelectedRoom : this.props.setSelectedRoom,
        funds : this.props.funds
    }

    render() {
        return (
            <View style={styles.canvas}>
                <View style={styles.canvas}>
                    <View style={styles.headingBox}>
                        <Text style={styles.headingText}>
                            View Items
                        </Text>
                    </View>
                    <View style={styles.optionsBox}>
                        {
                            items.map((item, index) => {
                                return(
 
                                        <View key={index} style={{padding:5, margin:5, height: '100%', backgroundColor:'#fff', borderRadius:5, width: 173, borderWidth: 4, borderColor: this.state.selectedRoom === item.name ? 'rgba(0, 91, 181, 1)' : 'rgba(255, 255, 255,1)'}}>
                                             <VrButton onClick={()=>{
                                                 this.setState({selectedRoom : item.name})
                                                 setCurrent(item.asset3D)
                                             }}>
                                                 <Image style={{width: 155, height: 155, borderRadius:5}} source={asset(item.asset)} />
                                                 <View style={{paddingTop:10}}>
                                                     <Text style={{color:'rgba(19, 20, 20,1)', fontSize:20 }}>{item.name}</Text>
                                                     <Text style={{color:'rgba(19, 20, 20,1)', fontSize:18, marginTop:10 }}>{item.description}</Text>
                                                 </View>
                                             </VrButton>
                                         </View>
                                )
                            })
                        }
                    </View>
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
        height: 350,
        flexDirection: 'row'
    },
    headingText: {
        fontSize: 40,
        fontWeight: "400",
    },
});

export default connect(Shop);