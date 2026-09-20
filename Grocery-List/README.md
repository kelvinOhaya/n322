# Grocery List App 🛒

A simple **grocery/to-do list app** built with [Expo](https://expo.dev) and React Native. It lets you add grocery items to a running list and remove them once you've picked them up (or decided you don't need them anymore).

This project was built to practice:

- Managing component state with `useState`
- Rendering dynamic lists with `FlatList`
- Adding and removing items from a list based on user input
- Structuring a clean, card-based mobile UI

## What the app does

- A text input at the top of the screen lets you type the name of a grocery item.
- Tapping **Add Item** adds that text to the list and clears the input.
- Every item in the list is rendered by a `FlatList` as its own card, with padding and rounded corners.
- Each card has a **delete** button that removes that specific item from the list.
- All list state lives in memory via `useState`, so the list resets when the app is fully reloaded.

## Prerequisites

Before you install this project, make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org/) (LTS version, 20 or newer recommended)
- npm (comes bundled with Node.js)
- The [Expo Go](https://expo.dev/go) app installed on your phone (available on the [App Store](https://apps.apple.com/app/expo-go/id982107779) for iOS and [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) for Android)
- Your phone and computer connected to the **same Wi-Fi network**

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/Grocery-List.git
   cd Grocery-List
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the app on your phone

1. Start the development server:

   ```bash
   npx expo start
   ```

2. A QR code will appear in your terminal (or in the browser tab that opens).
3. Open the **Expo Go** app on your phone.
4. Scan the QR code:
   - **iOS**: use the Camera app to scan the QR code, then tap the notification that opens it in Expo Go.
   - **Android**: open Expo Go and use the built-in "Scan QR code" option.
5. The app will bundle and load on your phone inside Expo Go. You can now add and delete grocery items directly from your device.

If your phone can't connect (e.g. on a restricted network), run `npx expo start --tunnel` instead, which routes the connection through Expo's tunnel service.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
