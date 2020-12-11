import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useListData from './hooks';


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
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 42
  }
});

const List = ({ navigation }) => {
  const {
    trueList,
    submitInput,
    input,
    setInput,
    toogleSelected
  } = useListData();

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TextInput
          style={styles.headerText}
          placeholder="Enter a destination"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={submitInput}
        />
        <TouchableOpacity onPress={submitInput}><Text>Add</Text></TouchableOpacity>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {
          trueList.map(
            ({ value, selected, id }) => <Text
              style={[styles.text, { textDecorationLine: selected ? 'line-through' : 'none' }]}
              key={id}
              onPress={toogleSelected(id)}
            >
              {value}
            </Text>
          )
        }

      </ScrollView>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.toggleDrawer()}>
        <Text>Footer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default List;
