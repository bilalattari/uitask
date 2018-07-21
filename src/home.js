import React, { Component } from 'react';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { StyleSheet, View, Image, Text, AppRegistry, Alert, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var radio_props = [
            { label: 'personnel', value: 0 },
            { label: 'professionnel', value: 1 },
            { label: 'personnel et professionnel', value: 2 }
        ];
        var radio_props1 = [
            { label: 'non', value: 0 },
            { label: 'oui', value: 1 }
        ];
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: .9, backgroundColor: '#E0F0E8', paddingLeft: 5  , paddingRight : 5 ,  }} >
                <ScrollView>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center',
                        height: 60
                    }} >
                        <Text style={{ color: '#1BBC9B', fontSize: 18, fontWeight: 'bold' }}>DÉPOSER UN SIGNALEMENT </Text>
                    </View>
                    <View >
                        <Text>Vous êtes Alexandra GUENIER </Text>
                    </View>

                    <View style={{
                        height: 60, backgroundColor: '#fff',
                        justifyContent: 'center', alignItems: 'center', marginVertical: 8 
                    }}>
                        <Text style = {{paddingLeft : 2}}>  <Icon
                                    name='mobile'
                                    type='mobile'
                                    size = {20}
                                    color='#90DECE'
                                />  Je rencontre actuellement une situation difficile et je souhaite le signaler à mon entreprise.
                            Cette démarche est confidentielle. </Text>
                    </View>
                    <View style={{
                        height: "53%", backgroundColor: '#fff',
                        marginTop: 3 ,  paddingLeft : 2, paddingRight : 2 ,
                    }}>
                        <View>
                            <Text style = {{color : "#90DECE" , marginTop : "2%"  , fontSize: 14, fontWeight: 'bold'}}>
                            Explication de votre situation</Text>
                        </View>
                        <View>
                            <Text>La situation que je souhaite signaler est associée à un contexte :</Text>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                buttonSize = {4}
                                formHorizontal={true}
                                labelHorizontal={true}
                                buttonColor={'#90DECE'}
                                selectedButtonColor  = {'#90DECE'}
                                labelStyle={{fontSize: 14, color: '#000' , paddingLeft : 3 ,paddingRight : 3}}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </View>
                        <View > 
                            <Text>La situation que je souhaite signaler est associée à un risque immédiat pour ma santé physique :</Text>
                            <RadioForm
                                radio_props={radio_props1}
                                borderWidth={1}
                                initial={0}
                                buttonSize = {4}
                                formHorizontal={true}
                                labelHorizontal={true}
                                labelStyle={{fontSize: 14, color: '#000' , paddingLeft : 5 ,paddingRight : 3 }}
                                buttonColor={'#90DECE'}
                                selectedButtonColor  = {'#90DECE'}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </View>
                        <View>
                            <Text style = {{color : '#8bc8bc' , marginBottom : 2}}>Explication de votre situation</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={3}
                                editable={true}
                                underlineColorAndroid = '#fff'
                                style = {{borderWidth : 1 , borderColor : '#9BDBCE' , 
                                paddingRight : 2 ,}}
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' , flex : .16 , marginTop : "8%" }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#16A086', width: '60%', height: 45,
                            justifyContent: 'center', alignItems: 'center' , borderRadius : 5
                        }} onPress = {()=> {Actions.Page()}}>
                            <Text style = {{ color: '#fff'}}>Transmettre  </Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
                <View style={{ flex: .10  , backgroundColor: '#E0F0E8' }}>
                    <View style={{ backgroundColor: '#1BBC9B', marginTop: '8%', height: 60, }}>
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
                                    style = {{marginTop : 3}}
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
                                    style = {{marginTop : 3}}
                                    color='#fff'
                                />
                                <Text style = {{ color: '#fff'}}>Mes signalements </Text>
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
export default Main
