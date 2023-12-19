"use client"
import TodayDealCard from "@/components/ui/TodayDealCard";
import { PRODUCTS, TodayDeals } from "@/data";
import ProductCard from "./products/ProductCard";
import { Fade  } from "react-slideshow-image";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import 'react-slideshow-image/dist/styles.css'

const HomePage = () => {
  const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const carosuelProps = {
    indicators: true,
    scale: 1.05,
    duration: 3000,
    transitionDuration: 300,
    infinte: true,
    prevArrow: <ArrowLeft/>,
    nextArrow: <ArrowRight/>,
  };
  return (
    <div>
      <header className="mt-12">
        <h1 className="mb-6">Featured Products</h1>
        <Fade {...carosuelProps}>
          {HERO_IMAGES.map((img) => {
            return (
              <img
                className="sm:max-w-2xl rounded-md mx-auto"
                src={img}
                alt="sds"
              />
            );
          })}
        </Fade>
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
