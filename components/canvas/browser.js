import React from 'react';
import {
  StyleSheet,
  View,

} from 'react-360';


class Browser extends React.Component{
    render() {
        return (
            <View style={styles.canvas}>
                <Form>
                    <Input type="text" id="fname" name="fname" value="John"></Input>
                </Form>
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
    
});

export default Browser;