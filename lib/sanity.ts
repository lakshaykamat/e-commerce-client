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
  // const posts = await client.fetch('*[_type == "product"]');
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
  console.log(products);
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
  const product = await client.fetch(query, { slug });
  // const product = client.fetch(
  //   groq`*[_type == 'product' && slug.current == ${slug}][0]`
  // );
  console.log(product);
  return product;
}

// export async function createPost(post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }
