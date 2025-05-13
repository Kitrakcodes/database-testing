const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Kartik_kitrak:Kartik_Nexora_testing@nexora.2xdhx5n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to the MongoDB database!");

        const database = client.db('Nexora');
        const collection = database.collection('users');

        const newUser = {
            name: "John Doe",
            email: "john.doe@example.com",
            progress: 50
        };

        const result = await collection.insertOne(newUser);
        console.log(`New user inserted with the id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
