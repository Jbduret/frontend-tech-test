import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Search from '../Search';

const Header = ({ setSearchValue }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search onSearch={setSearchValue} />
		</FlexBox>
	</header>
);

Header.propTypes = {
  setSearchValue: PropTypes.func,
};

Header.defaultProps = {
  setSearchValue: () => {},
};

export default Header;
