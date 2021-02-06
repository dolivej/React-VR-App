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
      name:'Pringles',
      asset: 'Pringles.jpg',
      asset3D: 'Pringles.obj',
      cost: 50
    },
    {
      name:'Pringless',
      asset: 'Pringles.jpg',
      asset3D: 'Pringles.obj',
      cost: 300
    },
    {
      name:'Pringless',
      asset: 'Pringles.jpg',
      asset3D: 'Pringles.obj',
      cost: 400
    },
    {
      name:'Pringless',
      asset: 'Pringles.jpg',
      asset3D: 'Pringles.obj',
      cost: 500
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
                            Shop (Click image to view model)               Funds: $999
                        </Text>
                    </View>
                    <View style={styles.optionsBox}>
                        {
                            items.map((item, index) => {
                                return(
 
                                        <View key={index} style={{padding:5, margin:5, height: '100%', backgroundColor:'#fff', borderRadius:5, width: 173, borderWidth: 4, borderColor: this.state.selectedRoom === item.name ? 'rgba(0, 91, 181, 1)' : 'rgba(255, 255, 255,1)'}}>
                                             <VrButton onClick={()=>{
                                                 this.setState({selectedRoom : item.name})
                                                 setCurrent(item.name)
                                             }}>
                                                 <Image style={{width: 155, height: 155, borderRadius:5}} source={asset(item.asset)} />
                                                 <View style={{paddingTop:10}}>
                                                     <Text style={{color:'rgba(19, 20, 20,1)', fontSize:25 }}>{item.name}</Text>
                                                     <Text style={{color:'rgba(19, 20, 20,1)', fontSize:25 }}>${item.cost}</Text>
                                                 </View>
                                                 
                                             </VrButton>
                                             <VrButton style={{width:70, marginTop:'30%', borderRadius:5, backgroundColor:'rgba(31, 33, 36, 1)'}}>
                                                 <Text style={{marginLeft:18}}>Buy</Text>
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
        height: '50%',
        flexDirection: 'row'
    },
    optionsBox: {
        padding: 20,
        width: '100%',
        height: '65%',
        flexDirection: 'row'
    },
    headingText: {
        fontSize: 40,
        fontWeight: "400",
    },
});

export default connect(Shop);