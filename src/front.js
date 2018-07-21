import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Item  , Input} from 'native-base'
import { Actions } from 'react-native-router-flux';


import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
class Front extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView style={{ backgroundColor: '#EEEEEE', }}>
                <View >
                    <View style={{ marginTop: "14%", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('./logo.png')} style={{ height: 86, width: "90%", resizeMode: "stretch" }} />
                    </View>
                    <View style = {{justifyContent : "center" , alignItems : "center"}}>
                    <View style={{
                        height: 300, width: "85%",
                        marginTop: "13%", backgroundColor: "#1BBC9B"
                    }}>
                        <Text style={{
                            fontSize: 24, color: "#fff", fontWeight: "bold",
                            textAlign: "center", marginTop: "4%", paddingHorizontal: "4%"
                        }}>ACCÉDER À VOTRE ESPACE  </Text>
                        <Text style={{ fontSize: 14, marginTop: "4%", color: "#fff", textAlign: "center" }}>
                            Confidential et sécurrisé  </Text>
                        <Item  style={{
                                    borderWidth: 1, width: "66%", borderColor: "#fff", backgroundColor: "#fff",
                                    marginTop: "7%",marginLeft: "7%" , borderRadius : 2
                                }}>
                             <Icon
                                    name='email-outline'
                                    type='email-outline'
                                    size = {18}
                                    color='#b3b3b3'
                                    style = {{marginLeft : 5 , marginRight : 6}}
                                />
                            <TextInput
                                numberOfLines={1}
                                underlineColorAndroid='#fff'
                                placeholder="Adresse email"
                                placeholderStyle={{ fontSize: 15 , paddingTop : 2}}
                                placeholderTextColor="#b3b3b3"
                                style = {{width : "100%"}}
                                 />
                        </Item>

                        <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop : '14%' }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#15A186', width: '56%', height: 45,borderRadius : 5,
                            justifyContent: 'center', alignItems: 'center' , marginLeft : "24%"
                        }} onPress = {()=> { Actions.Main()}}>
                            <Text style = {{ color: '#fff', fontWeight : "bold" , fontSize : 16}}>Acceder  </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                  
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({

})
export default Front
