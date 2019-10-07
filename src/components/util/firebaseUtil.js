import firebase from 'firebase'
export default class firebaseUtil {
    getUser() {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user)
                    // User is signed in.
                } else {
                    reject(null)
                    // No user is signed in.
                }
            });
        })
    }
}