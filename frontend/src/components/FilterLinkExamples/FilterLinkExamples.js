import React from 'react';
import FilterLink from '../FilterLink/FilterLink';

const FilterLinkExamples = () => {
  return (
    <div>
      <h1>Filter Link Examples</h1>
      <FilterLink filter='a'>Filter 'a': Item 1</FilterLink>
      <FilterLink filter='a'>Filter 'a': Item 2</FilterLink>
      <FilterLink filter='a'>Filter 'a': Item 3</FilterLink>
      <FilterLink filter='b'>Filter 'b': Item 4</FilterLink>
      <FilterLink filter='b'>Filter 'b': Item 5</FilterLink>
      <FilterLink filter='b'>Filter 'b': Item 6</FilterLink>

    </div>
  );
};

export default FilterLinkExamples;
