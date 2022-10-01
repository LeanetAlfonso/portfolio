import React from 'react';
import './SuccessPage.css';
import {BiArrowBack} from 'react-icons/bi';
const SuccessPage = () => {
	return (
		<div className='success__page'>
			<div className='thankyou__container'>
				<h2>Thank you!</h2>
				<h3 className='text-light'>Your message was sent.</h3>
				<a href='/' aria-label='Go Back'>
					<BiArrowBack />
					Go back
				</a>
			</div>
		</div>
	);
};

export default SuccessPage;
