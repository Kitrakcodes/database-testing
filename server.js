const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://Kartik_kitrak:Kartik_Nexora_testing@nexora.2xdhx5n.mongodb.net/?retryWrites=true&w=majority&appName=Nexora;' // replace with your MongoDB URI
const client = new MongoClient(uri);

app.post('/addUser', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('nexora');
    const users = database.collection('students');

    const userData = req.body;
    const result = await users.insertOne(userData);

    res.status(200).json({ message: 'Data inserted', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
