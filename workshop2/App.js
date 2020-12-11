import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  image: {
    width: 200,
    height: 150
  },
  header: {
    backgroundColor: 'white',
    alignItems: "center",
    paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  headerText: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 42
  }
});

const App = () => {
  const [list, setListe] = useState([]);
  const [input, setInput] = useState('');
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TextInput
          style={styles.headerText}
          placeholder="Enter a destination"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={() => {
          if (input) {
            setListe([...list, { value: input, selected: false }]);
            setInput('');
          }
        }}><Text>Add</Text></TouchableOpacity>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {
          list.map(
            ({ value, selected }, index) => <Text
              style={[styles.text, { textDecorationLine: selected ? 'line-through' : 'none' }]}
              key={index}
              onPress={() => {
                const tmpList = [...list];
                tmpList[index].selected = !tmpList[index].selected;
                setListe(tmpList);
              }}
            >
              {value}
            </Text>
          )
        }

      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default App;
