import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.drivetrafficmedia.com/wp-content/uploads/2016/06/social-media-meetup-to-help-seo.jpg",
    address: "Some adress 5, 12345 Some city",
    description: "This i a  first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.drivetrafficmedia.com/wp-content/uploads/2016/06/social-media-meetup-to-help-seo.jpg",
    address: "Some adress 10, 12345 Some city",
    description: "This i a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
