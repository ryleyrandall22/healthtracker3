import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAJBek0Y1qkffJD4lBUe12gFCRbEeRKJh8",
  authDomain: "healthtracker3-c0cd1.firebaseapp.com",
  databaseURL: "https://healthtracker3-c0cd1.firebaseio.com",
  projectId: "healthtracker3-c0cd1",
  storageBucket: "healthtracker3-c0cd1.appspot.com",
  messagingSenderId: "817060807654",
  appId: "1:817060807654:web:6fd0a4b58b46bbb28e4c27"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
