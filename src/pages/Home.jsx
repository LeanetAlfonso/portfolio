import React from 'react';
import Tools from '../components/Tools/Tools';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Work from '../components/Work/Work';
import Nav from '../components/Nav/Nav';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
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
