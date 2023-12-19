import { createClient, groq } from "next-sanity";
import SANITY_CONFIG from "./sanity-config";

export const client = createClient(SANITY_CONFIG);

export async function createProduct(post: any) {
  const result = await client.create({
    _type: "product",
    ...post,
  });
  return result;
}

export async function getProducts() {
  const products = await client.fetch(
    groq`*[_type == 'product'] | order(_createdAt desc){
    name,
    price,
    slug,
    sellerDetails,
    "image":imageURL,
    "slug":slug.current,
    "description":details,
    "about":description,
    }`
  );
  return products;
}

export async function getProduct(slug: String) {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    name,
    price,
    sellerDetails,
    "image":imageURL,
    "slug":slug.current,
    "description":details,
    "about":description,
  }`;
  const product = await client.fetch(query, { slug });;
  return product;
}
