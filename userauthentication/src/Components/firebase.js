import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyDywY-KIxCQ_pksqbPatuIhnCXfvuhTjTg",
	authDomain: "devauth-2e55d.firebaseapp.com",
	databaseURL:"https://devauth-2e55d-default-rtdb.firebaseio.com/",
	projectId: "devauth-2e55d",
	storageBucket: "devauth-2e55d.appspot.com",
	messagingSenderId: "1053452345242",
	appId: "1:1053452345242:web:24baea6869b26b21b92423"
	// apiKey: "AIzaSyDZCfGHJ_ebSz3PWTpT_gFHPxsjMbIpyQQ",
	// authDomain: "auth-dev-87b3a.firebaseapp.com",
	// databaseURL:"https://auth-dev-87b3a-default-rtdb.firebaseio.com",
	// projectId: "auth-dev-87b3a",
	// storageBucket: "auth-dev-87b3a.appspot.com",
	// messagingSenderId: "986983912046",
	// appId: "1:986983912046:web:cd9cc29083048760bacc7f"

})

export const auth = app.auth();
export default app;

