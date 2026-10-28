import colors from "@/constants/theme";
import { TextInput } from "react-native";

export default function LoginInputField({
  value,
  setter,
  placeholder,
  hidden,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={setter}
      placeholder={placeholder}
      secureTextEntry={hidden}
      style={{
        border: "1px solid grey",
        borderRadius: "15px",
        background: "#ffffff05",
        paddingLeft: 8,
        paddingVertical: 12,
        color: colors.text,
      }}
    />
  );
}
