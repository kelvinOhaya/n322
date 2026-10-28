import colors from "@/constants/theme";
import { View } from "react-native";

export default function Background() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: colors.background,
        width: "100%",
        height: "100%",
      }}
    ></View>
  );
}
