var firebaseConfig = {
    apiKey: "AIzaSyBdEffKaDXvwCyEYUUYgi-nYpdY5BRu6mY",
    authDomain: "personal-website-15cb0.firebaseapp.com",
    databaseURL: "https://personal-website-15cb0.firebaseio.com",
    projectId: "personal-website-15cb0",
    storageBucket: "",
    messagingSenderId: "78664630668",
    appId: "1:78664630668:web:f57f1fb53f17a079"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function onClick() {
    var name = document.querySelector("#contactName").value;
    var email = document.querySelector("#contactEmail").value;
    var subject = document.querySelector("#contactSubject").value;
    var message = document.querySelector("#contactMessage").value;
    if (name != "" && email != "" && subject != "" && message != "") {
        firebase.firestore().collection('database').add({
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            window.alert("Submit Successful");
        }).catch(function (error) {
            console.error('Error writing new message to Firebase Database', error).then(function () {
                window.alert("Error");
            });
        });
    }
    else{
        window.alert("Enter Correct input");
    }


}