import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      img="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
      alt="F meet up"
      title="First Meetup"
      address="Some address"
      description="Meet up descripton"
    />
  );
};

export async function getStaticPaths() {
  return {
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
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        alt: "F meet up",
        title: "First Meetup",
        address: "Some address",
        description: "Meet up descripton",
      },
    },
  };
}

export default MeetupDetails;
