const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio')

admin.initializeApp();

const db = admin.firestore();

/**
 * Creates a document with ID -> uid in the `Users` collection.
 *
 * @param {Object} userRecord Contains the auth, uid and displayName info.
 * @param {Object} context Details about the event.
 */
const createProfile = (userRecord, context) => {
    const {email, uid } = userRecord;

    return db
        .collection('users')
        .doc(uid)
        .set({ email })
        .catch(console.error);
};

//Twilio stuff
const accountSid = "ACf33d7d787e9c41238e317a3c531afede"
const authToken = "56ab2b836b68e1bedc00ac2729c787d7"
const client = new twilio(accountSid, authToken)

const sendSMS = (to,body) => {
    client.messages.create({
        body:body,
        to:"+1"+to,
        from:"+12013080073"
    })
}

module.exports = {
    authOnCreate: functions.auth.user().onCreate(createProfile),
    sendReminder: functions.pubsub.schedule('every day 09:00').onRun((context) => {
        sendSMS("4803718070", "Hey, take your HT survey. https://healthtracker3-c0cd1.web.app")
        return null
    })
};