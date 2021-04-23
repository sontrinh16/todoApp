import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../color'

class Todolist extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    }

    renderTodo = todo =>{
        return (
            <View>
                <Text>{todo.title}</Text>
            </View>
        )
    }
    
    render() {
        const taskCount = this.state.todos.length;
        const completedCount = this.state.todos.filter(todo => todo.completed).length
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position: "absolute", top: 20, right: 20}} onPress={this.props.closeModal}>
                    <Button
                        title="close"
                        size={10}
                        color={colors.black}
                    />
                </TouchableOpacity>

                <View style={[styles.section, styles.header, {borderBottomColor: this.state.color}]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                        </Text>
                    </View>
                </View>
                <View style={[styles.section], {flex: 3}}>
                    <FlatList
                        data={this.state.todos}
                        renderItem={({iem}) => this.renderTodo(item)}
                        keyExtractor={item => item.title}
                    ></FlatList>
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: "800",
      color: colors.black,
    },
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: color.gray,
        fontWeight: "600"
    }
  });
  