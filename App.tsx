import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import data from './src/quizData';
import Question from './src/QuestionItem';
function App() {

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <View style={{ flex: 1  }}>
      <Text style={{ marginTop:20,   marginHorizontal:10, fontSize: 24  }}> {` Question : ${currentIndex} / ${data.length}`} </Text>

      <View style={{ marginTop: 14,  flex: 1  }}>
        <FlatList data={data} horizontal renderItem={({ item, index }) => { return (<Question data={item} />) }} />
      </View>
    </View>
  );
}


export default App;


const style = StyleSheet.create({
  border: {
    borderColor: "black",
    borderWidth: 2,
  }
})
