import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { MONGO_CRED } from "../mongo";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a list of React Meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

//runs during build process
export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(process.env.MONGO_CRED || MONGO_CRED);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
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
    revalidate: 10, // regenerated every 10 seconds if request are coming
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export default HomePage;
