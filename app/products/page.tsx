"use client"
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/sanity";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";

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
        ) : (
          productData.isError ? <h1>Error :(</h1>
          :
          productData.data.map((product:any) => {
            return (
              <ProductCard
              price={product.price}
              key={product._id}
                title={product.name}
                image={product.imageURL}
                description={product.details}
              />
            );
          })
        )}
      </div>
    </div>
  )
}

export default ProductPage