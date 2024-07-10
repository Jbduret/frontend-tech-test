import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import HerosList from '../components/HerosList';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
	<>
		<Router>
			<Header setSearchValue={setSearchValue} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<HerosList className="lumx-spacing-padding-horizontal-huge" searchValue={searchValue} />
				</Route>
			</Switch>
		</Router>

	</>
  );
};

export default App;
