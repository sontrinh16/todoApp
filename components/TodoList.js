import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../color'

class Todolist extends React.Component {
    state = {
        showListVisible: false
    }

    toggleListVisible() {
        this.setState({showListVisible: !this.state.showListVisible})
    }
    render(){
        const list =  this.props.list
        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;

        return (
            <View>
                <Modal animationType="slide" visible={this.state.showListVisible} onRequestClose={()=>this.toggleListVisible()}>

                </Modal>
                <TouchableOpacity style={[styles.listContainer, {backgroundColor: list.color}]}>
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>

                    <View>
                        <View Style={{ alignItems: "center"}}>
                            <Text style={styles.count}>{remainingCount}</Text>
                            <Text style={styles.subtitle}>Remaining</Text>
                        </View>
                        <View Style={{ alignItems: "center"}}>
                            <Text style={styles.count}>{completedCount}</Text>
                            <Text style={styles.subtitle}>completed</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: colors.white,
        paddingLeft: 20
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.white
    }
})

export default Todolist