import React from 'react';
import './ExternalPage.css';
import {BiArrowBack} from 'react-icons/bi';
const ErrorPage = () => {
	return (
		<div className='external__page'>
			<div className='external__page__container'>
				<h2>Sorry!</h2>
				<h3 className='text-light'>
					There was an error with your submission. Please email me using the
					address below.
				</h3>
				<div>
					<a href='mailto:leanetalfo@gmail.com'> leanetalfo@gmail.com</a>
				</div>
				<a href='/' aria-label='Go Back'>
					<BiArrowBack />
					Go back
				</a>
			</div>
		</div>
	);
};

export default ErrorPage;
