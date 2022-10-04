import React from 'react';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Tools from '../components/Tools/Tools';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
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

export default Home;
