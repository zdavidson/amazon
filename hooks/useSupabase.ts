import { supabase } from "@/lib/supabase/products";
import { useState } from "react";

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (data) {
      setProducts(data);
    }

    if (error) console.log(error);
  };

  const getFilteredProducts = async (filter: string) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      // .ilike("title", `%${filter}%`);
      .or(
        `title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`
      );

    if (data) {
      setFilteredProducts(data);
    }

    if (error) console.log(error);
  };

  return { products, getProducts, filteredProducts, getFilteredProducts };
};
