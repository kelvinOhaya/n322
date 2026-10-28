import colors from "@/constants/theme";
import { deleteNote, setFavorite, updateNote } from "@/services/notesServices";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Note({
  title,
  content,
  onPress,
  isActive,
  id,
  favorite,
}) {
  const [titleInput, setTitleInput] = useState(title);
  const [contentInput, setContentInput] = useState(content);

  const handleUpdate = () => {
    if (title === titleInput && content === contentInput) return;
    updateNote(id, { title: titleInput, content: contentInput });
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "start",
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: isActive ? colors.accent : `${colors.text}1c`,
        outline: "none",
        justifyContent: "space-between",
        marginBottom: 8,
      }}
    >
      <View style={{ gap: 4, width: "100%" }}>
        <TextInput
          style={{
            fontSize: 20,
            color: colors.text,
            fontWeight: "600",
            width: "100%",
            padding: 0,
            margin: 0,
            border: "none",
            outlineStyle: "none",
          }}
          value={titleInput}
          onChangeText={setTitleInput}
          onBlur={handleUpdate}
        />

        <TextInput
          style={{
            fontSize: 12,
            color: colors.text,
            width: "100%",
            border: "none",
            padding: 0,
            margin: 0,
            outlineStyle: "none",
          }}
          onChangeText={setContentInput}
          value={contentInput}
          onBlur={handleUpdate}
          multiline
        />
      </View>
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={(e) => {
            e.stopPropagation();
            setFavorite(id, !favorite);
          }}
        >
          <Ionicons
            name={favorite ? "star" : "star-outline"}
            size={16}
            color={favorite ? colors.accent : colors.background}
          />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: colors.onBackground,
            paddingHorizontal: 4,
            paddingVertical: 2,
            borderRadius: 8,
          }}
          onPress={(e) => {
            e.stopPropagation();
            deleteNote(id);
          }}
        >
          <Text>Delete</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
