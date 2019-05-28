import { FirebaseOptions } from "@firebase/app-types";

export const firebaseConfig: FirebaseOptions = {
    apiKey: "${API_KEY}",
    authDomain: "${PROJECT_ID}.firebaseapp.com",
    databaseURL: "https://${PROJECT_ID}.firebaseio.com",
    projectId: "${PROJECT_ID}",
    storageBucket: "${PROJECT_ID}.appspot.com"
}
