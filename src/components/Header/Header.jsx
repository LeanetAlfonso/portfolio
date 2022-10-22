import React from 'react';
import './Header.css';
import ScrollDown from './ScrollDown';
import {useInView} from 'react-intersection-observer';

const Header = () => {
	const {ref: headerRef, inView: headerInView} = useInView();

	return (
		<section className='full__page'>
			<div className='header__container container'>
				<div
					ref={headerRef}
					className={`fadeup-enter ${headerInView && 'fadeup-enter-active'}`}
				>
					<h2 className='text-primary big-sub-heading'>Hello, I'm</h2>
					<h1
						className={`big-heading fadeup-enter ${
							headerInView && 'fadeup-enter-active'
						}`}
					>
						Leanet Alfonso Azcona.
					</h1>
					<h2
						className={`text-light big-sub-heading fadeup-enter ${
							headerInView && 'fadeup-enter-active'
						}`}
					>
						I am a Full Stack Software Engineer.
					</h2>
				</div>
			</div>
			<ScrollDown />
		</section>
	);
};

export default Header;
