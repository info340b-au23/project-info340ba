import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import {getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from './StyledFirebaseAuth';

const firebaseConfig = {
    apiKey: "AIzaSyAO_CnHWMJPgnejQnMt9ZafnHB3Oww4BVY",
    authDomain: "info-340-ba9----pathwise.firebaseapp.com",
    databaseURL: "https://info-340-ba9----pathwise-default-rtdb.firebaseio.com",
    projectId: "info-340-ba9----pathwise",
    storageBucket: "info-340-ba9----pathwise.appspot.com",
    messagingSenderId: "468546007102",
    appId: "1:468546007102:web:ac8ed9ae82d756c962616f",
    signInOptions : [
        GoogleAuthProvider.PROVIDER_ID,
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },

    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false;
        }
    }
};

function MySignInScreen() {
    const auth = getAuth();
    return (
        <div>
            <h1>My App</h1>
            <p>Please sign in:</p>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </div>
    );
}
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {app, db}