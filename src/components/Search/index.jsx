import React, { useState } from 'react';
import { TextField } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  // const [isFocused, setIsFocused] = useState(false);

  const searchHandler = (e) => {
    const lowerCase = e.toLowerCase();
    setSearch(lowerCase);
    onSearch(lowerCase);
  };

  return (
	<TextField
		className="search-field"
		placeholder="Search your superhero..."
		icon={mdiMagnify}
		onChange={searchHandler}
		value={search}
	/>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

Search.defaultProps = {
  onSearch: () => {},
};

export default Search;
