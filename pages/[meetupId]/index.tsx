import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { title } from "process";

function meetupDetails() {
  return (
    <MeetupDetail
      image="https://www.drivetrafficmedia.com/wp-content/uploads/2016/06/social-media-meetup-to-help-seo.jpg"
      title="A First Meetup"
      address="Some Street 5, Some city"
      description="The meetup description"
    />
  );
}

export default meetupDetails;
