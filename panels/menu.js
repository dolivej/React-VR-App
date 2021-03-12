import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import MenuItem from '../components/menu/menuItem'


const MenuItems = ['View Items', 'Background'];


class Menu extends React.Component{
    state = {
        currentSelected : 'Background',
        setParentSelected : this.props.setParentSelected,
        isHidden : false,
        setParentIsHidden : this.props.setParentIsHidden
    }

    setSelected = (selected) => {
        this.setState({currentSelected : selected});
        this.state.setParentSelected(selected);
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style={{
                    width:200,
                    height: 490,
                    backgroundColor: 'rgba(31, 33, 36, 1)',
                    borderRadius: 10,
                    display: this.state.isHidden ? 'none' : 'flex'
                }}>
                    <View style={styles.headingBox}>
                        <Text style={styles.headingText}>
                            Menu
                        </Text>
                    </View>
                    {
                    MenuItems.map((item, index) => {
                        return <MenuItem text={item} key={index} currentSelected={this.state.currentSelected} setSelected={this.setSelected}/>
                    })
                    }
                </View>
                <View style={styles.minimizeMenu}>
                    <View style={styles.minimizeBox}>
                        <VrButton style={styles.button}
                        onClick={()=>{
                            this.setState({isHidden : !this.state.isHidden}, () => {
                                this.state.setParentIsHidden(this.state.isHidden)
                            })
                        }}                                                   
                        >
                            <Text style={styles.headingText}>
                                {this.state.isHidden ? 'Show All' : 'Hide All'}
                            </Text>
                        </VrButton>
                    </View>
                </View>    
            </View>
        );
    }
}


const styles = StyleSheet.create({
    menu: {
        width:200,
        height: 560,
        margin:10,
    },
    minimizeMenu: {
        width:200,
        height: 60,
        backgroundColor: 'rgba(31, 33, 36, 1)',
        borderRadius: 10,
        marginTop:10
    },
    headingBox: {
      padding: 20,
    },
    minimizeBox: {
        paddingLeft: 20,
        paddingTop: 4,
    },
    headingText: {
      fontSize: 40,
      fontWeight: "400",
    },
    button: {
      width: '100%',
      height: "100%",
    },
});

export default Menu;