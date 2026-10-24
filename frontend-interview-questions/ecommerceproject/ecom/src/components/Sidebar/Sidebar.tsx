import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  ClearFiltersButton,
  FilterChip,
  FilterSection,
  FilterTitle,
  PriceLabels,
  SidebarDiv,
  SidebarTitle,
  SortContainer,
  SortSelect,
} from "./Sidebar.styles.js";
import type { Product } from "../../types/product.js";

interface SidebarProps{
  products: Product[],
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | "">>;
  setMinPrice:React.Dispatch<React.SetStateAction<string | number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string | number>>;
  maxPrice: string | number;
  minPrice : string | number;
  sortBy : string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: number;
  setSelectedPrice: React.Dispatch<React.SetStateAction<number>>;
}
const Sidebar = ({
  products,
  setSelectedCategories,
  setSelectedRating,
  setMinPrice,
  setMaxPrice,
  maxPrice,
  minPrice,
  sortBy,
  setSortBy,
  selectedPrice,
  setSelectedPrice,
}: SidebarProps) => {
  //categories------------------------------------------------
  //move it below
  const getCategories = (products: Product[]) => {
    let mySet = new Set<string>();
    products?.map((product) => mySet.add(product.category));
    return Array.from(mySet);
  };
  const allCategories = getCategories(products);
  const [isChecked, setIsChecked] = useState<string[]>([]);
  const [currentRatedItem, setCurrentRatedItem] = useState<"" | number>("");

  const categoryHandler = (category : string) => {
    if (!isChecked.includes(category ))
      setIsChecked((prev) => [...prev, category]);
    else {
      const updatedCategories = isChecked.filter((item) => item != category);
      setIsChecked(updatedCategories);
    }
  };

  console.log(allCategories);

  useEffect(() => {
    setSelectedCategories(isChecked);
  }, [isChecked]);

  //rating------------------------------------------------
  //get all rating
  const getRating = (products: Product[]) => {
    let myset = new Set<number>();
    products?.map((product) => myset.add(Math.floor(product.rating.rate)));
    return Array.from(myset);
  };

  //add all ratings to an array
  const allRatings = getRating(products);
  //below function handles onchange of rated products
  const ratingHandler = (rating : number) => {
    setCurrentRatedItem(rating);
  };

  //sending selceted ratings to the product
  useEffect(() => {
    setSelectedRating(currentRatedItem);
  }, [currentRatedItem]);

  //price ---------------------------------------------------------------------
  const getAllPrices = (products: Product[]) => {
    let mySet = new Set<number>();
    products?.map((product) => mySet.add(product.price));
    return Array.from(mySet);
  };
  const allPrices = getAllPrices(products);
  useEffect(() => {
    if (allPrices.length === 0) return;
    setMinPrice(Math.min(...allPrices));
    setMaxPrice(Math.max(...allPrices));
  }, [products,setMinPrice, setMaxPrice]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRating("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedPrice(0);
    setIsChecked([]);
    setCurrentRatedItem("");
  };

  const removeSelectedCategoryHandler = (selectedCategory : string) => {
    console.log("click");
    const updatedCategory = isChecked?.filter(
      (category) => category !== selectedCategory,
    );
    setIsChecked(updatedCategory);
  };
  return (
    <SidebarDiv>
      <SortContainer>
        {/* <SortLabel htmlFor="sort-products">Sort By:</SortLabel> */}
        <SidebarTitle>Sort By:</SidebarTitle>
        <SortSelect value={sortBy} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}>
          <option value="">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-high-low">Rating: High to Low</option>
        </SortSelect>
      </SortContainer>
      <SidebarTitle>Filters</SidebarTitle>

      {isChecked?.map((category) => (
        <div>
          <FilterChip>
            <RxCross2 onClick={() => removeSelectedCategoryHandler(category)} />{" "}
            {category}
          </FilterChip>
        </div>
      ))}

      <ClearFiltersButton type="button" onClick={clearFilters}>
        Clear all
      </ClearFiltersButton>
      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        {allCategories?.map((category) => (
          <>
            <label>
              <input
                type="checkbox"
                checked={isChecked.includes(category)}
                onChange={() => categoryHandler(category)}
              />
              {category}
            </label>
          </>
        ))}
      </FilterSection>
      <FilterSection>
        <FilterTitle>Rating</FilterTitle>
        {allRatings?.map((rating) => (
          <>
            <label>
              <input
                type="radio"
                name="product rating"
                checked={currentRatedItem === rating}
                value={rating}
                onChange={() => ratingHandler(rating)}
              />
              {rating}* and above
            </label>
          </>
        ))}
      </FilterSection>
      <FilterSection>
        <label htmlFor="price">
          <FilterTitle>Price</FilterTitle>
        </label>
        <input
          type="range"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
        />
        <PriceLabels>
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </PriceLabels>
        {/* {
          getAllPrices?.map
        } */}
      </FilterSection>
    </SidebarDiv>
  );
};

export default Sidebar;
 