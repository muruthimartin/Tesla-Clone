import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import CarContainer from '../CarContainer'
import styles from './styles';
import cars from './cars'
/* The inventory listing container will loop through the cars array, 
and insert them into the CarContainer component. To loop through the
array, we use FlatList.*/
const InventoryListing = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data = {cars}
                renderItem = {({item})=><CarContainer car={item}/>}
                showsVerticalScrollIndicator = {false}
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('window').height}/>  
                          
        </View> 
    );
} 
export default InventoryListing;    