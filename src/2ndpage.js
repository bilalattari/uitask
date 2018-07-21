    import React, { Component } from 'react';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
    import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
    class Page extends Component {
        constructor(props) {
            super(props);
        }

        render() {
        
            return (
                <View style = {{flex : 1}} >
                    <View style={{ flex: .9, backgroundColor: '#cfd6d3',}} >
                    <View style={{
                            justifyContent: 'center', alignItems: 'center',
                            height: 60 , marginTop : '5%'
                        }} >
                            <Text style={{ color: '#1BBC9B', fontSize: 20, fontWeight: 'bold' }}>
                            DÉPOSER UN SIGNALEMENT </Text>
                        </View>
                        <View style={{
                            height: 163, backgroundColor: '#2c3e50',
                        marginVertical: 8 , marginTop : '8%'
                        }}>
                            <Text style = {{marginTop : "4%" ,paddingLeft : "4%" , color : "#fff"}}>Votre signalement a bien été enregistré et notifié à votre entreprise. </Text>
                            <Text style = {{marginTop : "9%" ,paddingLeft : "4%" , color : "#fff" }}>Il vous a par ailleurs été transmis par email.</Text>
                        </View>

                    </View>
                    <View style={{ flex: .1 }}>
                        <View style={{ backgroundColor: '#1BBC9B',  flex : 1 }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{
                                    flexDirection: "column",
                                    width: '50%', justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Icon
                                        name='wifi'
                                        type='wifi'
                                        size = {20}
                                        color='#fff'
                                        style = {{marginTop : 5}}
                                    />
                                    <Text style = {{ color: '#fff'}}>Sign aler </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    flexDirection: "column", 
                                    width: '50%', justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Icon
                                        name='folder-open-o'
                                        type='folder-open-o'
                                        size = {20}
                                        style = {{marginTop : 5}}
                                        color='#fff'
                                    />
                                    <Text style = {{ color: '#fff',}}>Mes Signelements </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
            )
        }

    }

    const styles = StyleSheet.create({

    })
    export default Page
