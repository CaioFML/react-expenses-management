// /api/new-meetup

export default handler(req, res) {
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
    console.log(newMeetup);

    res.status(201).json({ message: 'Meetup created!', meetup: newMeetup });
  }
}