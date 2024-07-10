import React from 'react';
import { Thumbnail, Size, AspectRatio } from '@lumx/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './index.scss';

function Hero({
  name,
  description,
  comics,
  series,
  stories,
  image,
}) {
  return (
	<div className="hero">
		<Thumbnail className="photo" image={image} alt={`${name} cover`} aspectRatio={AspectRatio.square} size={Size.xl} />
		<div className="informations">
			<h1 className="title">{name}</h1>
			<p className="description">{description}</p>
			<div className="counters">
				<p>
					<b># comics: </b>
					{comics}
				</p>
				<p>
					<b># series: </b>
					{series}
				</p>
				<p>
					<b># stories: </b>
					{stories}
				</p>
			</div>
		</div>
	</div>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comics: PropTypes.number.isRequired,
  series: PropTypes.number.isRequired,
  stories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
