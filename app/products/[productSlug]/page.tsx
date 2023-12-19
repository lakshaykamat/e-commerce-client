"use client";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/lib/sanity";
import {
  BadgeDollarSign,
  ShoppingCart,
  Star,
  Truck,
  Wallet,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPage = ({ params }: { params: { productSlug: string } }) => {
  const { productSlug } = params;
  const productQuery = useQuery({
    queryKey: ["product", productSlug],
    queryFn: () => getProduct(productSlug),
  });
  if (productQuery.isLoading) {
    return (
      <>
        <Skeleton className="w-full mt-12 h-64" />
        <Skeleton className="w-full mt-12 h-64" />
        <Skeleton className="w-full mt-12 h-64" />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col mx-auto xl:flex-row items-center mt-12">
        <img
          className="w-full rounded-md md:w-4/5 lg:w-1/2"
          src={productQuery.data.image}
          alt=""
        />
        <div className="md:ml-10 my-12">
          <h1>{productQuery.data.name}</h1>
          <p className="max-w-lg">{productQuery.data.about}</p>

          <div className="flex flex-col gap-3 mt-6">
            <h3>${productQuery.data.price}</h3>
            <div className="flex flex-wrap gap-3">
              <span>{productQuery.data.sellerDetails.soldOut} Sold out</span>
              <span>Seller {productQuery.data.sellerDetails.sellerName}</span>
              <span className="text-red-400 font-bold">
                {productQuery.data.sellerDetails.available} left in stock
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Button size={"lg"}>
              <Wallet className="mr-3 w-full" /> Buy Now
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              <ShoppingCart className="mr-2" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col lg:flex-row items-center justify-start gap-12">
        <div className="my-6">
          <Card>
            <CardHeader>
              <h2>Product Perks</h2>
            </CardHeader>
            <CardContent className="flex gap-6 flex-wrap">
              <Button variant={"outline"}>
                <Truck className="mr-3" />
                Free Delivery
              </Button>
              <Button variant={"outline"}>
                <BadgeDollarSign className="mr-3" />
                Cash on Delivery
              </Button>
              <Button variant={"outline"}>
                <Truck className="mr-3" />
                Free Delivery
              </Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="mb-3 text-3xl">User reviews</h3>
          <div className="flex gap-3 items-center">
            <h3 className="text-3xl">
              {productQuery.data.sellerDetails.rating}
            </h3>
            <Stars rating={productQuery.data.sellerDetails.rating} />
          </div>
        </div>
      </div>
    </>
  );
};

const Stars = ({ rating }: { rating: number }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star className="w-6 h-6" fill="white" key={i} />);
      } else {
        stars.push(<Star className="w-6 h-6" key={i} />);
      }
    }
    return stars;
  };

  return <>{generateStars()}</>;
};

export default ProductPage;
