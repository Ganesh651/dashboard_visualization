const { MongoClient } = require('mongodb');
const express = require("express")
const sampleData = require("./json")

const url = `mongodb+srv://ganesh:9912716249@cluster0.gh7zhdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(url);
const app = express()
app.use(express.json())

// Database Name
const dbName = 'blackCoffer';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('document');
  const result = await collection.find().toArray()
  console.log(result)
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
// .finally(() => client.close());

// const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
// console.log('Inserted documents =>', insertResult);

// const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);


// const filteredDocs = await collection.find({ a: 3 }).toArray();
// console.log('Found documents filtered by {a: 3 } =>', filteredDocs);


// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);


// const deleteResult = await collection.deleteMany({ a: 3 });
// console.log('Deleted documents =>', deleteResult);

// const indexName = await collection.createIndex({ a: 1 });
// console.log('index name =', indexName);


// await client.connect();
// const collection = client.db().collection('collection');

// try {
//   await collection.insertOne({ _id: 1 });
//   await collection.insertOne({ _id: 1 }); // duplicate key error
// } catch (error) {
//   if (error instanceof MongoServerError) {
//     console.log(`Error worth logging: ${error}`); // special case for some reason
//   }
//   throw error; // still want to crash
// }
