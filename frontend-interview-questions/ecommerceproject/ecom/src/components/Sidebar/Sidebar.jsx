import { useEffect, useState } from "react";
import {
  FilterSection,
  FilterTitle,
  SidebarDiv,
  SidebarTitle,
} from "./Sidebar.styles";

const Sidebar = ({ products, setSelectedCategories, setSelectedRating }) => {
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
  return (
    <SidebarDiv>
      <SidebarTitle>Filters</SidebarTitle>

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
        <FilterTitle>Price</FilterTitle>
      </FilterSection>
    </SidebarDiv>
  );
};

export default Sidebar;
