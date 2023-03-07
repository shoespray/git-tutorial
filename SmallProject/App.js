import React, { useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function SignUp() {

    const [address, setAddress] = useState('');
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [checkValidEmail, setCheckValidEmail]= useState(false)

    const handlecheckEmail=(text)=>{
        let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        setEmail(text);
        if (regex.test(text)) {
        setCheckValidEmail(true);
        } else {
        setCheckValidEmail(false);
        }
    }

    const validatePassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(password);
      };


    const handleFirstName=(text)=>{
        setName(text)
    }
    const handleLastName=(text)=>{
        setLastName(text)
    }
    const handlePasswordInput = (text) => {
        setPassword(text);
      };

    const  handleAddress =(text)=>{
        setAddress(text);
        
    }
    const handleSubmit=()=>{
        if(name==""){
            alert("fill the name")
        }
        else if(lastName==""){
            alert("fill the family name")
        }
        if( checkValidEmail && checkValidPassword ){

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
                <TextInput style={Styles.field} placeholder="Email" onChangeText={(text)=>handlecheckEmail(text)}/>
                {!checkValidEmail ? (
                    <Text style={{ color: 'red',fontSize:15 ,margin:15,flex:1}}>
                        write your email in correct way
                    </Text>) : null}
            </View>
            <View style={Styles.Email_Input}>
                <TextInput style={Styles.field} placeholder="Password" onChangeText={(text)=>handlePasswordInput(text)}/>
                {!validatePassword() ? (
                    <Text style={{ color: 'red',fontSize:15 ,margin:15,flex:1}}>
                        Password must contain at least 8 characters including numbers and letters
                    </Text>) : null}
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
        flex:0.2,
        flexDirection:'row',
        marginTop:10,
        alignItems:'center'
    },
    SecondContainer:{
        flex:0.45,
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
        flex:0.6
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
