# My React App

Thi React App is a simple web application that allows users to see the list of beers. The list have 2 tabs, one for the beers fetched from the API (“All beers”) and another for the custom beers added by users. Users can to add their own custom beers that will show in a separate tab “My Beers”. All custom beers have the same image.

This is the app created with:
-  React Js, Vite, typescript. (for frontend)
- Firebase services (Storage, Firestore for database, Hosting) are used in this app for Persisting "My Beer" List.
- Ant design (antd) ( https://ant.design/docs/react/introduce )

Notes:
● React 
● the app is responsive (also in mobiles view)
● the ingredients details come up when you hover on a beer
● Support a load more button that fetch more beers -10 items in each fetch.Also, load more button in the “my beers” tab

## Before Installation of this React App,
1. create firebase app
2. create firestore database 
3. create the "web-app" and get firebase SDK Config
4. see .env.example, create ".env" file with similar content and replace values with the actual values you got from SDK config
#### Sample of Firebase SDK COnfig is as foillows:
```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

## Installation

To install This React App, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `yarn`.
3. Start the development server by running `yarn dev`.

## Components

My React App is composed of several components:
- Antd tabs ("All Beer" and "My Beers" )
- Antd Card for each Beer Info in tabs.
- "Load more" button
- "Add a new beer" button in "My Beer" tab page
- "Add a new beer" Modal on clicking "Add a new beer" button in "My Beer" tab page
- The added beers get stored in "firestore" database provided by firebase

### Hosted in Firebase (You could play around with this app live in following URL)
- Link is : https://beer-list-e0bd6.web.app/ 


