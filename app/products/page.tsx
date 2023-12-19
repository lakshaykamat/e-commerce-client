"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/sanity";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { productType } from "@/types";

const ProductPage = () => {
  const productData = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div className="mt-12">
      <h1>Products</h1>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.isLoading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : productData.isError ? (
          <h1>Error :(</h1>
        ) : (
          productData.data.map((product: productType, index: number) => {
            return (
              <ProductCard
                slug={product.slug}
                price={product.price}
                key={index}
                title={product.name}
                image={product.image}
                description={product.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductPage;
