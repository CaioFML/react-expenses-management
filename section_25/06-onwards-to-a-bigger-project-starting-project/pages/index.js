import MeetUpList from '../components/meetups/MeetUpList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://www.thespruceeats.com/thmb/5dJvJ9QsRqQV0yFJjJzWJY6b9a4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1197840992-5c8f7f7f46e0fb0001f8a6d0.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://www.thespruceeats.com/thmb/5dJvJ9QsRqQV0yFJjJzWJY6b9a4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1197840992-5c8f7f7f46e0fb0001f8a6d0.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

export default function Home() {
  return (
    <>
      <MeetUpList meetups={DUMMY_MEETUPS} />
    </>
  );
}