// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData: MeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
