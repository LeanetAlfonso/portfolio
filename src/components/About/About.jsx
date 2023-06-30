import React from 'react';
import './About.css';
import AboutButtons from './AboutButtons';
import Caption from '../Caption/Caption';
import {useInView} from 'react-intersection-observer';

const About = () => {
	const {ref: aboutRef, inView: aboutInView} = useInView();

	return (
		<section id='about'>
			<div
				ref={aboutRef}
				className={`container content__container about__container fade-enter ${
					aboutInView && 'fade-enter-active'
				}`}
			>
				<Caption caption='About Me' icon='about' />
				<h3 className='text-light'>
					[SHORT_BIO_HERE]
				</h3>
				<AboutButtons />
			</div>
		</section>
	);
};

export default About;
