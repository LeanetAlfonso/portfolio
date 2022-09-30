import React from 'react';

import './Header.css';

import ScrollDown from './ScrollDown';

const Header = () => {
	return (
		<section className='full__page'>
			<div className='header__container'>
				<div className='container'>
					<h2 className='text-primary big-sub-heading'>Hello, I'm</h2>
					<h1 className='big-heading'>Leanet Alfonso Azcona.</h1>
					<h2 className='text-light big-sub-heading'>
						I am a Full Stack Software Engineer.
					</h2>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Header;
