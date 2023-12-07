import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAO_CnHWMJPgnejQnMt9ZafnHB3Oww4BVY",
    authDomain: "info-340-ba9----pathwise.firebaseapp.com",
    databaseURL: "https://info-340-ba9----pathwise-default-rtdb.firebaseio.com",
    projectId: "info-340-ba9----pathwise",
    storageBucket: "info-340-ba9----pathwise.appspot.com",
    messagingSenderId: "468546007102",
    appId: "1:468546007102:web:ac8ed9ae82d756c962616f"
};
  
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {app, db}