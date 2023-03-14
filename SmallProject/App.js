import { Text, View , TextInput, TouchableOpacity, StyleSheet,span} from 'react-native';
import {useHook} from "./customhook"

export default function SignUp() {

    const { 
        handleSubmit,
        handleAddress,
        address,
        //validatePassword,
        handlePasswordInput,
        handlecheckEmail,
        checkValidEmail,
        handleLastName,
        handleFirstName,
        lastName,
        name,
        emailNotValid,
        passwordNotValid ,error} = useHook();
   
  return (
    <View style={{flex:1,backgroundColor:"lightblue"}}>
        <Text style={{color:"red"}}>{error}</Text>
        <View style={Styles.firstContainer}>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="First Name" onChangeText={(text)=>handleFirstName(text)} value={name}/></View>
            <View style={Styles.inputContainer}><TextInput style={Styles.field} placeholder="Last Name" onChangeText={(text)=>handleLastName(text) } value={lastName}/></View>
        </View>
        <View style={Styles.SecondContainer}>
            <View style={Styles.Email_Input}>
                <TextInput style={Styles.field} placeholder="Email" onChangeText={(text)=>handlecheckEmail(text)}/>
                {/* {!checkValidEmail ? emailNotValid() : null} */}
            </View>
            <View style={Styles.Email_Input}>
                <TextInput style={Styles.field} placeholder="Password" onChangeText={(text)=>handlePasswordInput(text)}/>
                {/* {!validatePassword() ? passwordNotValid() : null} */}
            </View>

        </View>
        <View style={Styles.ThirdContainer}>
            <View style={Styles.AddressContainer}>
                <TextInput style={Styles.Addressfield} placeholder="Address"  onChangeText={(text)=>handleAddress(text)} value={address}/>
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
