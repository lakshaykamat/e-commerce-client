import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./card";
import { Button } from "./button";

type Props = {
  label: String;
  image: {
    url: String;
    alt: String;
  };
};
const TodayDealCard = (props: Props) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-1">
        <img
          src={props.image.url.toString()}
          className="max-w-full max-h-52"
          alt={props.image.alt.toString()}
        />
      </CardHeader>
      <CardContent>
        <h3>{props.label.toString()}</h3>
      </CardContent>
      <CardFooter>
        <Button variant={"secondary"}>View all</Button>
      </CardFooter>
    </Card>
  );
};
export default TodayDealCard;
