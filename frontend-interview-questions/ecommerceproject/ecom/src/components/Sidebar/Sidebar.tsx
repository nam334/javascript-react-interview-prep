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
import { useProductFilters } from "../../hooks/useProductFilters.js";

interface SidebarProps{
  products: Product[];
  selectedCategories: string[];
  categoryHandler : (currentCategory : string) => void;
  selectedRating: number | "";
  ratingHandler:(rating: number) => void;
  priceHandler:(price: number) => void;
 clearFiltersHandler: () => void;
  maxPrice: string | number;
  minPrice : string | number;
  sortBy : string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: number;
 
}
const Sidebar = ({
  products,
  selectedCategories,
  selectedRating,
  ratingHandler,
  priceHandler,
 clearFiltersHandler,
  categoryHandler,
  maxPrice,
  minPrice,
  sortBy,
  setSortBy,
  selectedPrice,
}: SidebarProps) => {
  const {getCategories, getRating} = useProductFilters()
  //categories------------------------------------------------

   const allCategories = getCategories(products);

  
  //rating------------------------------------------------
  //get all rating
  
  //add all ratings to an array
  const allRatings = getRating(products);
  //below function handles onchange of rated products
  
 
  //price ---------------------------------------------------------------------
  

  
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

      {selectedCategories?.map((category: string) => (
        <div>
          <FilterChip>
            <RxCross2 onClick={() => categoryHandler(category)} />{" "}
            {category}
          </FilterChip>
        </div>
      ))}

      <ClearFiltersButton type="button" onClick={clearFiltersHandler}>
        Clear all
      </ClearFiltersButton>
      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        {allCategories?.map((category) => (
          <>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
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
                checked={selectedRating === rating}
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
          value={selectedPrice === 0 ? maxPrice : selectedPrice}
          onChange={(e) => priceHandler(Number(e.target.value))}
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
 