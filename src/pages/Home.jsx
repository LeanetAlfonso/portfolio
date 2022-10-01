import React, {useState, useEffect} from 'react';
import Tools from '../components/Tools/Tools';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Work from '../components/Work/Work';
import Nav from '../components/Nav/Nav';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import {useLocation, useParams, useNavigate} from 'react-router-dom';

const Home = () => {
	let location = useLocation();
	const {itemId} = useParams();
	let navigate = useNavigate();
	useEffect(() => {
		if (itemId) {
			navigate('/thank-you');
		}
	}, [itemId, navigate]);

	useEffect(() => {}, [location]);

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
