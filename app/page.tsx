import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const HomePage = () => {
  return (
    <div>
      <header className="mt-12">
        <img
          className="sm:max-w-xl rounded-md mx-auto"
          src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </header>
      <div className="my-4">
        <h1>Todays Deals</h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          <TodayDealCard />
          <TodayDealCard />
          <TodayDealCard />
        </div>
      </div>
      <div className="my-4">
        <h2>Best Wired Headphones</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          <TodayDealCard />
          <TodayDealCard />
          <TodayDealCard />
          <TodayDealCard />
        </div>
      </div>
    </div>
  );
};

export const TodayDealCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <img
            src={
              Math.floor(Math.random() * 100) % 2 == 0
                ? "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1623998022290-a74f8cc36563?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <CardDescription>Headphones from $49</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant={"secondary"}>View all</Button>
        </CardContent>
      </Card>
    </>
  );
};
export default HomePage;
