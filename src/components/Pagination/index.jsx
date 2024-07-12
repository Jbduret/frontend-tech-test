import React, { useState } from 'react';
import { Button } from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './index.scss';

const Pagination = ({ onPageChanged, offsetMax, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const changePageHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value === 'previous') {
      setCurrentPage(currentPage - 1);
      onPageChanged(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
      onPageChanged(currentPage + 1);
    }
  };

  return (
	<div>
		{loading ? (
			<div />
		) : (
			<div className="pagination">
				<Button value="previous" onClick={changePageHandler} isDisabled={currentPage === 0} aria-pressed={currentPage === 0}>Previous</Button>
				<Button value="next" onClick={changePageHandler} isDisabled={currentPage === offsetMax} aria-pressed={currentPage === offsetMax}>Next</Button>
			</div>
		)}
	</div>
  );
};

export default Pagination;

Pagination.propTypes = {
  onPageChanged: PropTypes.func,
  offsetMax: PropTypes.number,
  loading: PropTypes.bool,
};

Pagination.defaultProps = {
  onPageChanged: () => {},
  offsetMax: 1,
  loading: false,
};
