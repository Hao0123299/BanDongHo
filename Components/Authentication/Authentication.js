import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import icBack from "../../../../media/backList.png";
import icLogo from "../../../../media/cate1.jpg";

export function Authentication() {
      const { row1, iconStyle, titleStyle, container, controlStyle, 
        signInStyle, signUpStyle, inactiveStyle, activeStyle, bigButton, buttonText,
        inputStyle } = styles;
        const signInJSX = (
          <View>
              <TextInput style={inputStyle} placeholder="Enter your email " />
              <TextInput style={inputStyle} placeholder="Enter your password " />
              <TouchableOpacity style={bigButton}>
                <Text style={buttonText}>SIGN IN NOW</Text>
              </TouchableOpacity>
            </View>
        );
        const singUpJSX = (
          <View>
              <TextInput style={inputStyle} placeholder="Enter your name " />s
              <TextInput style={inputStyle} placeholder="Enter your email " />
              <TextInput style={inputStyle} placeholder="Enter your password " />
              <TextInput style={inputStyle} placeholder="Re- enter your password " />
              <TouchableOpacity style={bigButton}>
                <Text style={buttonText}>SIGN UP NOW</Text>
              </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : singUpJSX;
        return (
          <View style={container}>
            <View style={row1}>
              <TouchableOpacity onPress={this.goToBackMain.bind(this)}>
                <Image source={icBack} style={iconStyle} />
              </TouchableOpacity>
              <Text style={titleStyle}> Wearing a Dress</Text>
              <Image source={icLogo} style={iconStyle} />
            </View>
            {mainJSX}
            <View style={controlStyle}>
              <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
      
  
  const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor: "#3EBA77",
        padding: 20,
        justifyContent: "space-between" 
      },
      row1: { flexDirection: "row", justifyContent: "space-around", alignItems: "center" },
      titleStyle: { color: "#FFF", fontFamily: "Avenir", fontSize: 30 },
      iconStyle: { width: 30, height: 30 },
      controlStyle: {
        flexDirection: "row",
        alignSelf: "stretch",
      },
      inactiveStyle: {
        color: "#D7D7D7",
      },
      activeStyle: {
        color: "#3EBA77",
      },
      signInStyle: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 3,
  
      },
      signUpStyle: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 3, 
      },
      inputStyle: {
        height: 50, 
        backgroundColor: "#FFF",
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
      },
      bigButton: {
        height: 50, 
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#FFF",
        alignItems: "center", 
        justifyContent: "center",
      },
      buttonText: {
        fontFamily: "Avenir", 
        color: "#FFF",
        fontWeight: 400,
      },
  });
  
