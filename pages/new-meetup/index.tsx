// our-domain.com/new-meetup

import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: MeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
