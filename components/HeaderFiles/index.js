import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles'
/* The header component will render the logo and the menu items*/
const HeaderFiles = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    );
};
export default HeaderFiles;