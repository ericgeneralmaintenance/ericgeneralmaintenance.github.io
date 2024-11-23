// src/components/FirebaseTest.js
import React from 'react';
import firebase from '../firebaseConfig';

const FirebaseTest = () => {
  console.log('Using Firebase:', firebase);
  return (
    <div>
      <h1>Firebase is successfully configured!</h1>
    </div>
  );
};

export default FirebaseTest;
