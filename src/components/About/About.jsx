import React from 'react';
import './About.css';
import CTA from './CTA';
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
					Hi! My name is Leanet and I'm a Full Stack Software Engineer who
					enjoys building meaningful applications with clean and beautiful
					interfaces.
				</h3>
				<h3 className='text-light'>
					I received my BS in Computer Science from Florida International
					University. Since then, I've been working on projects that I have
					always wanted to build while expanding my skill set.
				</h3>
				<h3 className='text-light'>
					When I am not coding, I enjoy playing board games. I also have a
					passion for music and have been playing the oboe since I was 9.
				</h3>
				<CTA />
			</div>
		</section>
	);
};

export default About;
