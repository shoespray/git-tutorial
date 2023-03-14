import  { useEffect, useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export const useHook=()=>{
    
const [name,setName]=useState("");
const [lastName,setLastName]=useState("")
const [email, setEmail]=useState("")
const [password, setPassword]=useState("")
const [checkValidEmail, setCheckValidEmail]= useState(false)
const [address, setAddress] = useState('');
const [addressFlag,setAddressFlag] = useState(false)
const [error,setError]=useState("")
const [checkValidPassword,setCheckValidPassword]=useState(false)

const handlecheckEmail=(text)=>{
    let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setEmail(text);
    if (regex.test(text)) {
    setCheckValidEmail(true);
    } else {
    setCheckValidEmail(false);
    }
}
//wix ui library
//custom hook

const handlePasswordInput = (text) => {
    setPassword(text);
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if( passwordRegex.test(password)){
        setCheckValidPassword(true)
    }
    else{
        setCheckValidPassword(false)
    }
  };


const handleFirstName=(text)=>{
    setName(text)
}
const handleLastName=(text)=>{
    setLastName(text)
}
// const handlePasswordInput = (text) => {
//     setPassword(text);
//   };

const handleAddress =(text)=>{
        setAddressFlag(false)
        setAddress(text);
        if (text.length>20 && text.length< 150) {
          setAddress(text);
          setAddressFlag(true)
        }
        
        
      };
const passwordNotValid=()=>{
    
    setError("Password must contain at least 8 characters including numbers and letters")
        
}
const emailNotValid=()=>
{
    
    setError("write your email in correct way")
        
}
useEffect(()=>{
    
    if (!checkValidPassword){
            passwordNotValid()
        }
    if (!checkValidEmail){
            emailNotValid()
        }
     if (checkValidPassword&&checkValidEmail){
            setError("")
        }
},[password,email])
const handleSubmit=()=>{

    if(name==""){
        alert("fill the name")
    }
    else if(lastName==""){
        alert("fill the family name")
    }

    else if (!addressFlag){
        alert("in your address you should enter at least 20 char")
    }
    else{
        alert("done")
    }
    
    
           
}
return {
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
    passwordNotValid,
    emailNotValid,
    error
  };}