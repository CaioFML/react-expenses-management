import classes from './MeetupDetail.module.css';

export function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <div>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </section>
  );
}