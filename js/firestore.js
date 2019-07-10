function saveMessage() {
    // Add a new message entry to the Firebase database.
    return firebase.firestore().collection('db').add({
        name: 'Umesh Nalinde',
        email: 'UmeshPande6@gmail.com',
        subject: 'Hello',
        message: 'Message'
    }).catch(function (error) {
        console.error('Error writing new message to Firebase Database', error);
    });
}