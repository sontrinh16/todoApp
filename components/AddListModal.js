import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button, TextInput } from 'react-native';
import colors from '../color';
import tempData from '../templateData';

class AddListModal extends React.Component {
    backgroundColor = ["#5CD859","#24A6D9","#595BD9","#8022D9","#D159D8","#D85963","#D88559"];

    state= {
        name: "",
        color: this.backgroundColor[0]
    }

    createTodo = () => {
        const {name, color} = this.state

        tempData.push({
            name,
            color,
            todos: []
        })

        this.setState({name: ""})
        this.props.closeModal()

        alert(tempData[tempData.length-1].color)
    }

    renderColor() {
        this.backgroundColor.map(color => {
            return <TouchableOpacity key={color} style={styles.colorSelect, {backgroundColor: color}} onPress={() => this.setState({color})}/>
        })
    }

    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {/* <TouchableOpacity style={{position: "absolute", top: 20, right: 20}} onPress={this.props.closeModal}>
                    <Button
                        title="close"
                        size={10}
                        color={colors.black}
                    />
                </TouchableOpacity> */}

                <View style={{alignSelf: "stretch", marginHorizontal: 10}}>
                    <TextInput style={styles.input} placeholder="List Name?" onChangeText={text => this.setState({name: text})}/>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>{this.renderColor}</View>

                    <TouchableOpacity style={styles.create, {backgroundColor: "blue"}} onPress={this.createTodo}>
                        <Text style={{ color: colors.white, fontWeight: "600"}}>Create!</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.black,
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 50,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    }
})

export default AddListModal;