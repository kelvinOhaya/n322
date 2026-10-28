import LoginInputField from "@/components/LoginInputField";
import useAuth from "@/hooks/useAuth";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import colors from "../constants/theme";

export default function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    authMode,
    setAuthMode,
    handleLogin,
    handleSignUp,
  } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: colors.text,
            marginBottom: 16,
          }}
        >
          {authMode}
        </Text>
        <View style={{ gap: 8 }}>
          <LoginInputField
            value={email}
            setter={setEmail}
            placeholder={"Enter your email:"}
          />
          <LoginInputField
            value={password}
            setter={setPassword}
            placeholder={"Enter your password:"}
            hidden
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 8,
            marginTop: 16,
            gap: 8,
          }}
        >
          <Pressable
            onPress={() =>
              setAuthMode((prev) => (prev === "Login" ? "Sign Up" : "Login"))
            }
          >
            <Text style={{ color: colors.accent }}>
              {authMode === "Login"
                ? "Dont have an account? Sign up"
                : "Already have an account? Login"}
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderRadius: 15,
              paddingHorizontal: 4,
              paddingVertical: 8,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              borderBottomWidth: `1px`,
              borderBottomColor: colors.text,
              color: colors.text,
            }}
            onPress={() =>
              authMode === "Login"
                ? handleLogin(email, password)
                : handleSignUp(email, password)
            }
          >
            <Text style={{ color: colors.text }}>{authMode}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingHorizontal: 4,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    border: `1px solid ${colors.text}`,
    color: colors.text,
  },
});
