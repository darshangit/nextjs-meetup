import styles from "./MeetupDetails.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={styles.detail}>
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
