import { MongoClient } from 'mongodb';

// /api/new-meetup

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const newMeetup = {
      id: new Date().toISOString(),
      title,
      image,
      address,
      description
    };

    // store it in a database
    // const client = await MongoClient.connect('')
    // const db = client.db();
    // const meetupCollection = db.collection('meetups');
    // const result = await meetupCollection.insertOne(newMeetup);
    // client.close();

    console.log(newMeetup);

    res.status(201).json({ message: 'Meetup created!', meetup: newMeetup });
  }
};
