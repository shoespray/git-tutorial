import React, { useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function SignUp() {
    const [address, setAddress] = useState('');
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("")

    const handleFirstName=(text)=>{
        setName(text)
    }
    const handleLastName=(text)=>{
        setLastName(text)
    }

    const  handleAddress =(text)=>{
        setAddress(text);
        
    }
    const handleSubmit=()=>{
        if(name==""){
            alert("fill the name")
        }
        if(lastName==""){
            alert("fill the family name")
        }
        if (address==""){
            console.log("dasdawd")
        }
        else{
            alert(address);
        }        
    }


  return (
    <View style={{flex:1,backgroundColor:"lightblue"}}>
        <View style={Styles.firstContainer}>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="First Name" onChangeText={(text)=>handleFirstName(text)} value={name}/></View>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="Last Name" onChangeText={(text)=>handleLastName(text) } value={lastName}/></View>
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
                <TextInput style={Styles.Addressfield} placeholder="Address" onChangeText={(text)=>handleAddress(text)} value={address}/>
            </View>
            <View style={Styles.SubmitContainer}>
                <TouchableOpacity style={Styles.Submit_btn} onPress={()=>handleSubmit()}>
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
