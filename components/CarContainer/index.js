import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import styles from './styles'
import OrderButtons from '../OrderButtons'
/* The CarContainer Element will display the car in the background as well as the title
and subtitles*/
const CarContainer = (props) => {
    const {name, tagline,taglineCTA,image} = props.car;
    return(
        <View style = {styles.carContainer}>

            <ImageBackground 
            source={image}
            style = {styles.image}
            />

            <View style = {styles.titles}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>
                    {tagline}{' '}
                    <Text style = {styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View> 
            <View style = {styles.buttonsContainer}>
                <OrderButtons 
                    type = "primary" 
                    content = {"Custom Order"}
                    onPress = {()=>{
                        console.warn("Custom order was pressed");
                    }} 
                    />

                <OrderButtons 
                    type = "secondary" 
                    content = {"Existing inventory"}
                    onPress = {()=>{
                        console.warn("Existing inventory was pressed");
                    }} 
                    />    
            </View>
            

        </View>
    );
};
export default CarContainer;
  