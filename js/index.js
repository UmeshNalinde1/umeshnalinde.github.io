

var config = {
    apiKey: "AIzaSyBdEffKaDXvwCyEYUUYgi-nYpdY5BRu6mY",
    authDomain: "personal-website-15cb0.firebaseapp.com",
    databaseURL: "https://personal-website-15cb0.firebaseio.com",
    projectId: "personal-website-15cb0",
    storageBucket: "",
    messagingSenderId: "78664630668",
    appId: "1:78664630668:web:f57f1fb53f17a079"
}
firestore.initializeApp(config);
const docRef = firestore.firestore().doc("db/4h1h9rQb42JiiTYLwgfx");
function onClick() {
    docRef.set({
        name: 'Umesh Nalinde',
        email: 'UmeshPande6@gmail.com',
        subject: 'Hello',
        message: 'Message'
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}