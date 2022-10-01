import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/thank-you' element={<SuccessPage />} />
					<Route exact path='/sorry' element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
