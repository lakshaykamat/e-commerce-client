import { createClient, groq } from "next-sanity";

const SANITY_CONFIG = {
  projectId: "u1pbhkc6",
  dataset: "production",
  apiVersion: "2021-10-21",
  token: "skhcK9l3XyUyKVqCao92lB5tdElhwFH8Zw8PRpuGvSAR5xRquSbIbSs74FbiYfh93WxRTFHK5U3o5PvC0exY4gtK7vldKzkximyM6MX815JAWTqaChXH1fKKIc4Up91b6G2K3a7VpjO88v7SZ4s0r1Bwd0eGD1enkfKbhbsNnlanU3y94uwI",
};

export const client = createClient({
  projectId:"u1pbhkc6",
  dataset:"production",
  apiVersion:"2021-10-21",
  useCdn:false,
  token:"skhcK9l3XyUyKVqCao92lB5tdElhwFH8Zw8PRpuGvSAR5xRquSbIbSs74FbiYfh93WxRTFHK5U3o5PvC0exY4gtK7vldKzkximyM6MX815JAWTqaChXH1fKKIc4Up91b6G2K3a7VpjO88v7SZ4s0r1Bwd0eGD1enkfKbhbsNnlanU3y94uwI",
})


export async function createProduct(post:any) {
  const result = await client.create({
    _type:"product",
    ...post
  })
  return result
}

export async function getProducts() {
  // const posts = await client.fetch('*[_type == "product"]');
  const products = createClient(SANITY_CONFIG).fetch(
    groq`*[_type == 'product'] | order(_createdAt desc)`
  );
  console.log(products)
  return products;
}

// export async function createPost(post) {
//   const result = client.create(post);
//   return result;
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({ title });
//   return result;
// }
