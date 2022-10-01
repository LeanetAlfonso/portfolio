import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/success' element={<SuccessPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
