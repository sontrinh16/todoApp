import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, FlatList, Modal, Button } from 'react-native';
//import {AntDesign} from '@ant-design/react-native';
import colors from './color';
import tempData from './templateData';
import Todolist from './components/TodoList';
import AddListModal from './components/AddListModal';


export default class App extends React.Component {
  state = {
      addTodoVisible: true
  }

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }

  renderList = list => {
    return <Todolist list={list}/>
  }

  render(){
    return (
      <View style={styles.container}>
        {/* <Modal animationType="slide"
               style={{alignItems: "center", justifyContent: "center"}} 
               visible={this.state.addTodoVisible} 
               onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal closeModal={() => this.toggleAddTodoModal()}/>
        </Modal> */}
        <View style={{flexDirection: "row"}}>
          <View style={styles.divider}/>
            <Text style={styles.title}>
              Todo <Text style={{ fontWeight: "300", color: colors.blue}}>Lists</Text>
            </Text>
        </View>

        <AddListModal closeModal={() => this.toggleAddTodoModal()}/>

        <View style={{ marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()} >
            <Button/>
          </TouchableOpacity>

          <View style={styles.add}>Add List</View>
        </View>

        <View  style={{height: 275, paddingLeft: 32}}>
          <FlatList data={tempData} 
                    keyExtractor={item =>item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => this.renderList(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});
