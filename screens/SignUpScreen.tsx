import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function SignupScreen() {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const register = useMutation(api.users.register);

    const handleSignup = async (): Promise<void> => {
        if (!fullName.trim() || !email.trim() || !password.trim()) {
        Alert.alert("Error", "Please fill in all fields.");
        return;
        }

        setLoading(true);
        try {
        const result = await register({
            username: email.trim(),
            password: password.trim(),
        });

        if (typeof result === "object" && result !== null && "success" in result) {
            if (!result.success) {
            Alert.alert("Signup Failed", result.message as string);
            return;
            }
        }

        Alert.alert("Success", "Account created! Please log in.");
        } catch (error) {
        Alert.alert("Error", "Something went wrong. Please try again.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
        {/* 1. Header Section */}
        <View style={styles.header}>
            <Image
            source={require("./../assets/signup.webp")}
            style={styles.image}
            />
        </View>

        {/* 2. Form Section */}
        <View style={styles.formContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
            />

            <Text style={styles.label}>Email Address</Text>
            <TextInput
            style={styles.input}
            placeholder="john@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            />

            <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleSignup}
            disabled={loading}
            >
            {loading ? (
                <ActivityIndicator color="#000" />
            ) : (
                <Text style={styles.loginButtonText}>Sign Up</Text>
            )}
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
            <TouchableOpacity>
                <Text style={styles.linkText}>Log In</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D7AFF",
    paddingTop: 40,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "70%",
  },
  formContainer: {
    flex: 3,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 30,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#FFCC00",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 30,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  socialIcon: {
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  linkText: {
    color: "#FFCC00",
    fontWeight: "bold",
  },
});