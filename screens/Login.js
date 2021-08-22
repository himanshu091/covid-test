import React, {useState} from 'react'
import {StyleSheet,
    TextInput,
    View,
    Text,
    SafeAreaView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button
     } from 'react-native'



const Login = () => {
    
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <SafeAreaView>
      
            <View style={styles.inputBoxView}>
            <Image style={{marginBottom:10}} source={require('../assets/logo.png')} />
            <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
               
              />
                <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
              <TouchableOpacity style={styles.btnView}>
              <Button
         
            title={"Login"}
            titleStyle={{ fontSize: 15 }}
            buttonStyle={styles.btn1}
            containerStyle={{ marginTop: 10 }}
            color="#0f4496" 
           
          />
          </TouchableOpacity>
            </View>
      
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({

    inputBoxView:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        marginTop:"60%"

    },
    inputStyle:{
        width:"80%",
        height: 50,
        marginVertical: 10,
        marginHorizontal: 40,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 15,
        borderColor: "#d4d4d4",
        paddingVertical:10,
        paddingHorizontal:30,
        textAlign:"left"

    },
    btnView:{
        width:"80%",
        backgroundColor:"#0f4496",
        marginVertical:10
    },
    btn1: {
        
        backgroundColor:"#0f4496",
        borderRadius: 50,
        marginHorizontal: 40,
        height: 50,
        shadowColor: "rgba(239, 54, 81, 0.35)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5.84,
        fontSize:30,
        elevation: 5,
    
      },

})
