# Personal Notes App

A mobile notes app built with **Expo / React Native**, **Firebase Authentication**, and **Cloud Firestore**. Users create an account, sign in, and manage a private list of personal notes that only they can see.

## Features

- **Authentication** (Firebase Auth)
  - Create an account with email and password
  - Log in to an existing account
  - Log out
  - Notes are only accessible while signed in; signing out returns to the login screen
- **Notes** (Cloud Firestore)
  - Each note has a `title`, `content`, `createdAt` timestamp, and `favorite` flag
  - Notes are tagged with the owning user's `userId` and queried so each user only sees their own notes
  - Create, edit (inline, tap a note's title/content to edit, saved on blur), and delete notes
  - Mark/unmark a note as a favorite with the star button
  - Filter the list between **All** and **Favorites**
  - Total note count displayed at the top of the list
- **UI**
  - Notes rendered in a `FlatList`
  - Dark, consistent color scheme defined in [`src/constants/theme.ts`](./src/constants/theme.ts)
  - Star and delete buttons on each note row

## Tech Stack

- [Expo](https://expo.dev) (React Native, Expo Router for file-based routing)
- [Firebase Authentication](https://firebase.google.com/docs/auth) — email/password sign-in
- [Cloud Firestore](https://firebase.google.com/docs/firestore) — notes storage
- `@expo/vector-icons` — icons

## Project Structure

```
src/
  app/            Expo Router entry (src/app/index.jsx chooses Login vs Home based on auth state)
  pages/          LoginPage, HomePage
  components/     Note, LoginInputField, Background
  hooks/          useAuth (sign up / log in / log out)
  services/       notesServices (Firestore reads/writes)
  firebase/       firebase.config.js (Firebase app initialization)
  constants/      theme.ts (color palette)
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure Firebase — create a project in the [Firebase console](https://console.firebase.google.com/), enable **Email/Password** sign-in under Authentication, and create a **Cloud Firestore** database. Then fill in your project's config in [`src/firebase/firebase.config.js`](./src/firebase/firebase.config.js).

3. Start the app:

   ```bash
   npx expo start
   ```

   Open it in a [development build](https://docs.expo.dev/develop/development-builds/introduction/), an Android/iOS simulator, Expo Go, or the web.

## Firestore Data Model

Each document in the `notes` collection looks like:

```json
{
  "title": "string",
  "content": "string",
  "userId": "string (auth uid of the owner)",
  "favorite": "boolean",
  "createdAt": "Firestore server timestamp"
}
```

Notes are only fetched for the signed-in user's `userId` (see `subscribeToNotes` in [`notesServices.js`](./src/services/notesServices.js)). For full data isolation, Firestore **Security Rules** should also restrict reads/writes to documents where `request.auth.uid == resource.data.userId`.

## Security Note

`src/firebase/firebase.config.js` contains this project's Firebase web config for local development. Firebase web API keys are not secret by themselves (access is enforced by Firestore Security Rules and Firebase App Check), but when forking/submitting this project, replace them with your own Firebase project's credentials rather than reusing the ones checked in here.
