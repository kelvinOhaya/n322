import Background from "@/components/Background";
import Note from "@/components/Note";
import colors from "@/constants/theme";
import useAuth from "@/hooks/useAuth";
import { createNote, subscribeToNotes } from "@/services/notesServices";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function HomePage({ user }) {
  const [notes, setNotes] = useState([]);

  const [contentInput, setContentInput] = useState("");
  const [activeNoteId, setActiveNoteId] = useState(null);

  const { handleLogout } = useAuth();

  const addNote = () => {
    createNote("Title", "content", user?.uid);
  };

  useEffect(() => {
    if (!user) return;
    //set the notes to the notes from firestore when they are collected
    const unsubscribe = subscribeToNotes(
      user.uid,
      (firestoreNotes) => setNotes(firestoreNotes),
      (error) => {
        console.error();
      },
    );

    return () => unsubscribe();
  }, [user?.uid]);

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        flex: 1,
        padding: 32,
      }}
    >
      <Background />
      <Text style={{ color: colors.text, fontSize: 32 }}>
        Total Notes: {notes.length}
      </Text>
      <View
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-end",
        }}
      >
        <Pressable onPress={addNote}>
          <Text style={{ color: colors.accent, paddingBottom: 4 }}>
            Add Note
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Note
            title={item.title}
            content={item.content}
            isActive={item.id === activeNoteId}
            id={item.id}
            onPress={() => setActiveNoteId(item.id)}
          />
        )}
      />

      <Pressable
        onPress={handleLogout}
        style={{
          position: "absolute",
          bottom: 32,
          right: 32,
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "red" }}>Logout</Text>
      </Pressable>
    </View>
  );
}
