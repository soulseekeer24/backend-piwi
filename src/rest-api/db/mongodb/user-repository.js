const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
// Create a new MongoClient

async function persist(user) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('users');
    let result = await collection.insertOne(user);
    return result;
}

export default { persist: persist };