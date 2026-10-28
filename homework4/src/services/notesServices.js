import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const notesCollection = collection(db, "notes");

export function subscribeToNotes(userId, callback, onError) {
  const q = query(notesCollection, where("userId", "==", userId));

  return onSnapshot(
    q,
    (snapshot) => {
      const notes = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      callback(notes);
    },
    onError,
  );
}

export async function createNote(title, content, userId) {
  await addDoc(notesCollection, {
    title,
    content,
    userId,
    favorite: false,
    createdAt: serverTimestamp(),
  });
}

export async function setFavorite(noteId, favorite) {
  const noteRef = doc(db, "notes", noteId);
  try {
    await updateDoc(noteRef, { favorite });
  } catch (error) {
    console.error("Error with setFavorite(): ", error);
  }
}

export async function updateNote(noteId, updates) {
  const noteRef = doc(db, "notes", noteId);
  console.log(doc);
  await updateDoc(noteRef, updates);
}

export async function deleteNote(noteId) {
  const noteRef = doc(db, "notes", noteId);
  try {
    await deleteDoc(noteRef);
  } catch (error) {
    console.error("Error with deleteNote(): ", error);
  }
}
