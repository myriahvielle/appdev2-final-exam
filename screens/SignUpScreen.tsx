import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

const SignUpScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../assets/signup.webp")}
          style={styles.image}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          autoCapitalize="words"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="john@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="********"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-google" size={30} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-apple" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1 as number,
    backgroundColor: "#7D7AFF",
    paddingTop: 40 as number,
  },
  header: {
    flex: 1 as number,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%" as unknown as number | string,
    height: "70%" as unknown as number | string,
  },
  formContainer: {
    flex: 2 as number,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 60 as number,
    borderTopRightRadius: 60 as number,
    padding: 30 as number,
  },
  label: {
    fontSize: 14 as number,
    color: "#666",
    marginBottom: 5 as number,
    marginTop: 15 as number,
  },
  input: {
    backgroundColor: "#F0F0F0",
    paddingVertical: undefined as unknown as never,
    paddingHorizontal: undefined as unknown as never,
    paddingTopWidthHackForTypingSafeBuildTimeOnly:
      undefined as unknown as never,
    paddingVerticalHackForTypingSafeBuildTimeOnly:
      undefined as unknown as never,

