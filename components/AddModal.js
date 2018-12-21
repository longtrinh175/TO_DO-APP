import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import * as Icon from '@expo/vector-icons'
import Modal from 'react-native-modalbox'

export default class AddModal extends Component{
    constructor(props) {
        super(props)
        this.state={
            date: null,
            info: null,
            time: null
        }
    }
    showAddModal = () => {
        this.refs.myModal.open()
    }
    render() {
        return(
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: "center",
                    width: 300,
                    height: 500
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("Add todo closed")
                }}
            >
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Add Todo</Text>
                </View>
                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        margin: 10,
                        borderBottomWidth: 2
                    }}
                    onChangeText={text => this.setState({ info: text})}
                    placeholder="nhap ngay "
                    value={this.state.date}
                />
                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        margin: 10,
                        borderBottomWidth: 2
                    }}
                    onChangeText={text => this.setState({ info: text})}
                    placeholder="nhap cong viec can lam "
                    value={this.state.info}
                />
                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        margin: 10,
                        borderBottomWidth: 2
                    }}
                    onChangeText={text => this.setState({ time: text})}
                    placeholder="nhap thoi gian can hoan thanh"
                    value={this.state.time}
                />
                <TouchableHighlight>
                    <View style={{alignItems:'center'}}>
                        <Icon.MaterialIcons name="add-box" size={30} color="green" />
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }
}
