import { client } from "@/sanity/lib/client";

const fetchProducts = async () => {
  const query = `*[_type == "chibsproduct"] | order(chibsprice desc){
  chibsproductImage,
    "slugCurrent":slug.current,
    chibsprice,
    chibsSerial
}`;
  const data = await client.fetch(query);
  return data;
};

export const data = await fetchProducts();
