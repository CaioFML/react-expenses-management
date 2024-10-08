import MeetUpList from '../components/meetups/MeetUpList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://i0.wp.com/landlopers.com/wp-content/uploads/2016/08/Schloss-Hof-Austria.jpg?resize=1044%2C762&ssl=1',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://i0.wp.com/landlopers.com/wp-content/uploads/2016/08/Schloss-Hof-Austria.jpg?resize=1044%2C762&ssl=1',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

export default function Home({ meetups }) {
  return (
    <>
      <MeetUpList meetups={meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}