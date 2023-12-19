import TodayDealCard from "@/components/ui/TodayDealCard";
import { PRODUCTS, TodayDeals } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductCard from "./products/ProductCard";

const HomePage = () => {
  return (
    <div>
      <header className="mt-12">
        <img
          className="sm:max-w-xl rounded-md mx-auto"
          src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sds"
        />
      </header>
      <div className="my-4">
        <h1>Todays Deals</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {TodayDeals.map((product) => (
            <TodayDealCard
              key={product.id}
              label={product.label}
              image={product.image}
            />
          ))}
        </div>
      </div>
      {PRODUCTS.map((product) => {
        return (
          <div key={product.id} className="my-12">
            <h2>{product.title}</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-">
              {product.items.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image.url}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
