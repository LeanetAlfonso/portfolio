import React from 'react';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<div className='main'>
				<About />
				<Tools />
				<Work />
				<Contact />
			</div>
			<Footer />
		</>
	);
};

export default App;
