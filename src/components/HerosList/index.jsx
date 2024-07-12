import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  Size,
  ProgressCircular,
} from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Hero from '../Hero';
import { get } from '../../api';
import './index.scss';

const HerosList = ({
  searchValue,
  page,
  setOffsetMax,
  isLoading,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      isLoading(true);
      let query = 'characters?limit=4';
      query += filter !== searchValue ? '&offset=0' : `&offset=${page * 4}`;
      query += searchValue ? `&nameStartsWith=${encodeURIComponent(searchValue)}` : '';
      setFilter(searchValue);
      await get(query)
        .then((result) => {
          setData(result.data.data.results);
          const offsetMax = result.data.data.total % 4 === 0 ? Math.floor(result.data.data.total / 4) - 1 : Math.floor(result.data.data.total / 4);
          setOffsetMax(offsetMax);
          setLoading(false);
          isLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          isLoading(false);
        });
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, page]);

  if (error) return `Error: ${error.message}`;

  if (data.length) {
    return (
	<div>
		{ loading ? (
			<div className="progress">
				<ProgressCircular />
			</div>
		) : (
			<List>
				{data.map((hero) => (
					<ListItem key={hero.id} className="item" size={Size.huge}>
						<Hero
							name={hero.name}
							description={hero.description}
							comics={hero.comics.available}
							series={hero.series.available}
							stories={hero.stories.available}
							image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
						/>
					</ListItem>
				))}
			</List>
		)}
	</div>
    );
  }

  return (
	<div />
  );
};

HerosList.propTypes = {
  searchValue: PropTypes.string,
  page: PropTypes.number,
  setOffsetMax: PropTypes.func,
  isLoading: PropTypes.bool,
};

HerosList.defaultProps = {
  searchValue: '',
  page: 0,
  setOffsetMax: () => {},
  isLoading: false,
};

export default HerosList;
