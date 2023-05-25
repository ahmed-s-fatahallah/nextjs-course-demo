import MeetupDetail from "../../components/meetups/MeetupDetail";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context: { params: Params }) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.drivetrafficmedia.com/wp-content/uploads/2016/06/social-media-meetup-to-help-seo.jpg",
        title: "A First Meetup",
        address: "Some Street 5, Some city",
        description: "The meetup description",
      },
    },
  };
}

export default meetupDetails;
