import { useEffect, useState } from "react";
import {
  ClearFiltersButton,
  FilterSection,
  FilterTitle,
  PriceLabels,
  SidebarDiv,
  SidebarTitle,
} from "./Sidebar.styles";

const Sidebar = ({
  products,
  setSelectedCategories,
  setSelectedRating,
  setMinPrice,
  setMaxPrice,
  maxPrice,
  minPrice,
  selectedPrice,
  setSelectedPrice,
}) => {
  //categories------------------------------------------------
  const getCategories = (products) => {
    let mySet = new Set();
    products?.map((product) => mySet.add(product.category));
    return Array.from(mySet);
  };
  const allCategories = getCategories(products);
  const [isChecked, setIsChecked] = useState([]);
  const [currentRatedItem, setCurrentRatedItem] = useState("");
  const categoryHandler = (category) => {
    if (!isChecked.includes(category))
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
  const getRating = (products) => {
    let myset = new Set();
    products?.map((product) => myset.add(Math.floor(product.rating.rate)));
    return Array.from(myset);
  };

  //add all ratings to an array
  const allRatings = getRating(products);
  //below function handles onchange of rated products
  const ratingHandler = (rating) => {
    setCurrentRatedItem(rating);
  };

  //sending selceted ratings to the product
  useEffect(() => {
    setSelectedRating(currentRatedItem);
  }, [currentRatedItem]);

  //price ---------------------------------------------------------------------
  const getAllPrices = (products) => {
    let mySet = new Set();
    products?.map((product) => mySet.add(product.price));
    return Array.from(mySet);
  };
  const allPrices = getAllPrices(products);
  useEffect(() => {
    setMinPrice(Math.min(...allPrices));
    setMaxPrice(Math.max(...allPrices));
  }, [products]);

  return (
    <SidebarDiv>
      <SidebarTitle>Filters</SidebarTitle>
      <ClearFiltersButton type="button">Clear all</ClearFiltersButton>
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
          onChange={(e) => setSelectedPrice(e.target.value)}
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
