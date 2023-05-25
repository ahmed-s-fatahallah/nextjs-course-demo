import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

interface MeetUpItemProps {
  id: string;
  title: string;
  image: string;
  address: string;
  description?: string;
}

function MeetupItem(props: MeetUpItemProps) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
