import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}