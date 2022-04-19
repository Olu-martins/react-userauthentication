import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyDZCfGHJ_ebSz3PWTpT_gFHPxsjMbIpyQQ",
	authDomain: "auth-dev-87b3a.firebaseapp.com",
	databaseURL:"https://auth-dev-87b3a-default-rtdb.firebaseio.com",
	projectId: "auth-dev-87b3a",
	storageBucket: "auth-dev-87b3a.appspot.com",
	messagingSenderId: "986983912046",
	appId: "1:986983912046:web:cd9cc29083048760bacc7f"

})

export const auth = app.auth();
export default app;

