import { Colors, Spacing } from "@/constants/theme";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function HomeScreen() {
  const [groceries, setGroceries] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
  ]);
  const [groceryInput, setGroceryInput] = useState("");
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
        paddingVertical: 64,
        backgroundColor: Colors.dark.background,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: 8,
          paddingBottom: 16,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#999",
            borderRadius: 5,
            padding: 12,
            flex: 1,
            color: Colors.dark.text,
          }}
          value={groceryInput}
          onChangeText={setGroceryInput}
        />
        <Pressable
          style={{
            backgroundColor: "#999",
            borderRadius: 15,
            paddingHorizontal: 8,
            paddingVertical: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setGroceries([...groceries, groceryInput]);
            setGroceryInput("");
          }}
        >
          <Text>Add Item</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={{
          width: "100%",
          gap: 16,
        }}
        data={groceries}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 8,
              backgroundColor: "#353434",
              borderRadius: 15,
              paddingHorizontal: 16,
              paddingVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: Colors.dark.text }}>{item}</Text>
            <Pressable
              onPress={() =>
                setGroceries(groceries.filter((grocery) => grocery !== item))
              }
            >
              <Text style={{ color: "red" }}>delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },

  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
