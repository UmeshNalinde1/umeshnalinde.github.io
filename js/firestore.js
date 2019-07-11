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
    var name = document.querySelector("#contactName");
    var email = document.querySelector("#contactEmail");
    var subject = document.querySelector("#contactSubject");
    var message = document.querySelector("#contactMessage");
    if (name.value != "" && email.value != "" && subject.value != "" && message.value != "") {

        firebase.firestore().collection('db').document(email.value).collection("messages").messagingSenderId({
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            window.alert("Submit Successful");
        }).catch(function (error) {
            console.error('Error writing new message to Firebase Database', error).then(function () {
                window.alert("Error");
            });
        });
    }
    else {
        window.alert("Enter Correct input");
    }


}