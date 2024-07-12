import React from 'react';
import { Thumbnail, Size } from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Search from '../Search';

const Header = ({ setSearchValue }) => (
	<header className="lumx-spacing-padding-big header">
		<Thumbnail className="photo" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" size={Size.xl} alt="Marvel cover" />
		<Search onSearch={setSearchValue} />
	</header>
);

Header.propTypes = {
  setSearchValue: PropTypes.func,
};

Header.defaultProps = {
  setSearchValue: () => {},
};

export default Header;
