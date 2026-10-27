import type { Product } from "../types/product.js";


function getUniqueValues<T extends string | number>(extractor: (product: Product) => T, products: Product[]){
     let myset = new Set<T>();
  products.forEach((product) =>  myset.add(extractor(product)));
 return Array.from(myset)
}

export const useProductFilters = () => {
    const getCategories = (products: Product[]) => {
        return getUniqueValues(product => product.category, products)
      };

    const getRating = (products: Product[]) => {
        return getUniqueValues(product =>Math.floor(product.rating.rate), products)
   
  };

  const getAllPrices = (products: Product[]) => {
   return getUniqueValues(product => product.price, products)
  };


      return {getCategories, getRating, getAllPrices}
}