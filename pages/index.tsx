import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { title } from "process";

interface HomePageProps {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}

function HomePage(props: HomePageProps) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://ahmed:l0gmeinn0w@cluster0.ccdcti6.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
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
