import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..." style={{border: 'solid 4px red'}}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;