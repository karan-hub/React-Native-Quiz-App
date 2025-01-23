import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('window');

const QuestionItem = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <View style={{ width:width ,  paddingHorizontal:10 }}>
            <Text style={{fontSize:22 , padding:10  }}>{` Q ${currentIndex}: ${data.question} ` }</Text>
        </View>
    )
}

export default QuestionItem


const style = StyleSheet.create({
    border: {
        borderColor: "black",
        borderWidth: 2,
    }
})
