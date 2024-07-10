import React, { useState, useEffect } from 'react';
import { List, ListItem, Size } from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Hero from '../Hero';
import { get } from '../../api';
import './index.scss';

function HerosList({ searchValue }) {
  const [heros, setHeros] = useState([]);
  const [error, setError] = useState(null);

  let request = 'characters?limit=4';
  if (searchValue) {
    request += `&nameStartsWith=${searchValue}`;
  }

  useEffect(() => {
    get(request)
      .then((data) => {
        setHeros(data.data.data.results);
      })
      .catch((err) => { setError(err); });
  }, [searchValue, request]);

  if (error) return `Error: ${error.message}`;
  if (!heros) return 'No heros!';

  if (heros.length) {
    return (
	<div>
		<List>
			{heros.map((hero) => (
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
	</div>
    );
  }

  return (
	<div />
  );
}

HerosList.propTypes = {
  searchValue: PropTypes.string,
};

HerosList.defaultProps = {
  searchValue: '',
};

export default HerosList;
