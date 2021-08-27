import React, { useState } from 'react'
import {
  StyleSheet,
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
import { connect } from 'react-redux';
import { loginAction } from '../store/action';


const Login = ({loginAction}) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");
  const handleSubmit = async () => {
    seterr("")
    if(userEmail.trim().length < 1){
      seterr("Enter Valid Email!")
      return
    }
    if(userPassword.trim().length < 1){
      seterr("Enter Valid Password!")
      return
    }
    setloading(true)
    const res = await loginAction({
      "email": userEmail,
      "password": userPassword
    })
    setloading(false)
  }
  return (
    <SafeAreaView>

      <View style={styles.inputBoxView}>
        <Image style={{ marginBottom: 10 }} source={require('../assets/logo.png')} />
        <Text style={styles.error}>{err}</Text>
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
        <View style={styles.btnView}>
          {!loading && <Button
            onPress={handleSubmit}
            title={"Login"}
            titleStyle={{ fontSize: 15 }}
            buttonStyle={styles.btn1}
            containerStyle={{ marginTop: 10 }}
            color="#0f4496"
          />}
          {loading && <Button
            title={"Loging..."}
            titleStyle={{ fontSize: 15 }}
            buttonStyle={styles.btn1}
            containerStyle={{ marginTop: 10 }}
            color="#0f4496"
          />}
        </View>
      </View>

    </SafeAreaView>
  )
}

export default connect(null, {loginAction})(Login)

const styles = StyleSheet.create({

  inputBoxView: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "60%"

  },
  inputStyle: {
    width: "80%",
    height: 50,
    marginVertical: 10,
    marginHorizontal: 40,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    borderColor: "#d4d4d4",
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: "left"

  },
  btnView: {
    width: "80%",
    backgroundColor: "#0f4496",
    marginVertical: 10
  },
  btn1: {

    backgroundColor: "#0f4496",
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
    fontSize: 30,
    elevation: 5,

  },
  error:{
    color: 'red',
    fontSize: 15,
    fontWeight:'700'
  }

})
