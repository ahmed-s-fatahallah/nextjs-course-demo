import MeetupList from "../components/meetups/MeetupList";

interface HomePageProps {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}

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

function HomePage(props: HomePageProps) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an api

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context: {
//   req: Request;
//   res: Response;
// }) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an api

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
