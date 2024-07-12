import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import HerosList from '../components/HerosList';
import Pagination from '../components/Pagination';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [offsetMax, setOffsetMax] = useState(1);
  const [page, setPage] = useState(0);
  const [loading, isLoading] = useState(false);

  return (
	<>
		<Router>
			<Header setSearchValue={setSearchValue} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<HerosList className="lumx-spacing-padding-horizontal-huge" searchValue={searchValue} page={page} setOffsetMax={setOffsetMax} isLoading={isLoading} />
				</Route>
			</Switch>
			<Pagination onPageChanged={setPage} offsetMax={offsetMax} loading={loading} />
		</Router>

	</>
  );
};

export default App;
