import { supabase } from "@/lib/supabase/products";
import { Product } from "@/types/supabase";
import { useState } from "react";

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product[]>([]);

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
      .or(
        `title.ilike.%${filter}%, description.ilike.%${filter}%, category.ilike.%${filter}%`
      );

    if (data) {
      setFilteredProducts(data);
    }

    if (error) console.log(error);
  };

  const getSingleProduct = async (id: number) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (data) {
      setSingleProduct(data);
    }

    if (error) console.log(error);
  };

  return {
    products,
    getProducts,
    filteredProducts,
    getFilteredProducts,
    singleProduct,
    getSingleProduct,
  };
};
