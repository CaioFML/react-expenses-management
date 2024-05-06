import { MeetupDetail } from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail image="https://i0.wp.com/landlopers.com/wp-content/uploads/2016/08/Schloss-Hof-Austria.jpg?resize=1044%2C762&ssl=1" title="A First Meetup" address="Some address 5, 12345 Some City" description="This is a first meetup!" />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://i0.wp.com/landlopers.com/wp-content/uploads/2016/08/Schloss-Hof-Austria.jpg?resize=1044%2C762&ssl=1',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
      }
    }
  }
}