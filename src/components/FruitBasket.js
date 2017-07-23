import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;
