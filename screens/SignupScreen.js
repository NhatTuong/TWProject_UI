import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";

import IconUser from "../assets/svg/user.svg";
import IconPass from "../assets/svg/pass.svg";
import IconSignup from "../assets/svg/signup.svg";

const windowWidth = Dimensions.get("window").width;

const SignupScreen = props => {

  const [id, onChangeID] = React.useState("");
  const [pass, onChangePass] = React.useState("");
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <IconSignup width={200} height={200} />

        {/* TÀI KHOẢN */}
        <View style={styles.searchBoxWrapper}>
          <View style={styles.searchButton}>
            <IconUser width={32} height={32} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="New username"
            onChangeID={text => onChangeID(text)}
          />
        </View>

        {/* MẬT KHẨU */}
        <View style={styles.searchBoxWrapper}>
          <View style={styles.searchButton}>
            <IconPass width={32} height={32} />
          </View>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="New password"
            onChangePass={text => onChangePass(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={{ fontSize: 16, color: "#888" }}>Already a member?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ fontSize: 16, color: "#E9895D" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCFA"
  },
  searchBoxWrapper: {
    width: 0.82 * windowWidth,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    height: 60,
    borderColor: "gray",
    borderRadius: 18,
    backgroundColor: "white",
    paddingHorizontal: 15,

    justifyContent: "space-between",

    shadowColor: "#D8BCA8",
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 10,
    shadowRadius: 10,

    elevation: 7
  },
  input: {
    width: 0.82 * windowWidth - 80,
    fontSize: 18,
    fontWeight: "400",
    color: "#3C3D47"
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: "#89ad91",
    width: 0.82 * windowWidth,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});

export default SignupScreen;
