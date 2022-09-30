import React from 'react';
import './About.css';
import CTA from './CTA';
import Caption from '../Caption/Caption';
const About = () => {
	return (
		<section id='about'>
			<div className='container content__container about__container'>
				<Caption caption='About Me' icon='about' />
				<h3 className='text-light'>
					Hi! My name is Leanet and I'm a Full Stack Software Engineer who
					enjoys building meaningful applications with clean and beautiful
					interfaces.
				</h3>
				<h3 className='text-light'>
					I completed my BS in Computer Science at Florida International
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
