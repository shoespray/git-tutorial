import React, { useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function SignUp() {
 
  return (
    <View style={{flex:1,backgroundColor:"lightblue"}}>
        <View style={Styles.firstContainer}>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="First Name"/></View>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="Last Name"/></View>
        </View>
        <View style={Styles.SecondContainer}>
            <View style={Styles.Email_Input}>
                <TextInput style={Styles.field} placeholder="Email"/>
            </View>
            <View style={Styles.Email_Input}>
                <TextInput style={Styles.field} placeholder="Confirm your email"/>
            </View>
        </View>
        <View style={Styles.ThirdContainer}>
            <View style={Styles.AddressContainer}>
                <TextInput style={Styles.Addressfield} placeholder="Address"/>
            </View>
            <View style={Styles.SubmitContainer}>
                <TouchableOpacity style={Styles.Submit_btn}>
                    <Text style={{color:"black"}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const Styles = StyleSheet.create({
    firstContainer:{
        flex:0.3,
        flexDirection:'row',
        marginTop:10,
        alignItems:'center'
    },
    SecondContainer:{
        flex:0.3,
    },
    ThirdContainer:{
        flex:0.35
    },
    field:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:20,
        paddingLeft:10,
        margin:10,
      },
      Addressfield:{
        height:"80%",
        borderWidth:1,
        borderColor:"black",
        borderRadius:20,
        paddingLeft:10,
        margin:10,
      },

      inputContainer:{
        flex:0.5
      },
      Email_Input:{
        flex:0.5,

      },
      AddressContainer:{
        flex:0.8
      },
      SubmitContainer:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
      },
      Submit_btn:{
        backgroundColor:"gray",
        height:"100%",width:"40%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,}
  })
