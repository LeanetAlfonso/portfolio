import React from 'react';
import './Work.css';
import geekTextImg from '../../assets/geek-text.png';
import geekTextGif from '../../assets/geek-text.gif';
import sudokuImg from '../../assets/sudoku.png';
import sudokuGif from '../../assets/sudoku.gif';
import mastermindImg from '../../assets/mastermind.png';
import mastermindGif from '../../assets/mastermind.gif';
import pemNowImg from '../../assets/pem-now.png';
import pemNowGif from '../../assets/pem-now.gif';
import Caption from '../Caption/Caption';
import ProjectItem from './ProjectItem';
import {useInView} from 'react-intersection-observer';

const Work = () => {
	const {ref: sudokuRef, inView: sudokuInView} = useInView();
	const {ref: geekTextRef, inView: geekTextInView} = useInView();
	const {ref: mastermindRef, inView: mastermindInView} = useInView();
	const {ref: pemNowRef, inView: pemNowInView} = useInView();

	const PROJECTS = [
		{
			name: 'geek-text',
			title: 'Geek Text',
			technologies: [
				'REACT',
				'REDUX',
				'NODE',
				'EXPRESS',
				'MONGODB',
				'RAILWAY',
				'NETLIFY',
			],
			description: (
				<div className='text-light'>
					<p>
						An online bookstore built using the MERN stack as a group project
						for CEN 4010 Software Engineering.
					</p>
					<p>
						The back-end is hosted on a Railway free-tier and may take a few
						seconds to load!
					</p>
				</div>
			),
			site: 'https://geek-text.ga/',
			repo: 'https://github.com/LeanetAlfonso/geek-text-frontend',
			demo: 'https://www.youtube.com/watch?v=2v4gouzU3YQ',

			image: geekTextImg,
			gif: geekTextGif,
			orientation: 'landscape',
			reference: geekTextRef,
			inview: geekTextInView,
		},
		{
			name: 'sudoku',
			title: 'Sudoku',
			technologies: ['REACT', 'MATERIAL UI', 'i18next', 'NETLIFY'],
			description: (
				<div className='text-light'>
					<p>
						A sudoku app that generates puzzles of different difficulties.
						Includes timer, auto-check, and "challenge your friend" features,
						dark mode support, multiple-language support, and a solver
						implemented using a recursive backtracking algorithm.
					</p>
				</div>
			),
			site: 'https://sudokupuzzle.ga/',
			repo: 'https://github.com/LeanetAlfonso/sudoku',
			demo: 'https://youtu.be/UO1kxmKNN2M',
			image: sudokuImg,
			gif: sudokuGif,
			alignment: 'right',
			orientation: 'landscape',
			reference: sudokuRef,
			inview: sudokuInView,
		},
		{
			name: 'mastermind',
			title: 'Mastermind',
			technologies: ['SWIFT', 'SWIFTUI', 'XCODE', 'EXPO'],
			description: (
				<div className='text-light'>
					<p>
						A code-breaking game whose objective is to guess the secret code in
						the fewest tries possible. I built this to learn about native mobile
						development after being exposed to cross platform (React Native) and
						wanted to implement an algorithm to provide feedback on every guess
						in constant time.
					</p>
				</div>
			),
			repo: 'https://github.com/LeanetAlfonso/mastermind',
			demo: 'https://www.youtube.com/watch?v=X1mF5avTLlo',
			image: mastermindImg,
			gif: mastermindGif,
			orientation: 'portrait',
			reference: mastermindRef,
			inview: mastermindInView,
		},
		{
			name: 'pem-now',
			title: 'PEM-NOW',
			technologies: ['REACT', 'REDUX', 'NODE', 'FIREBASE', 'HEROKU', 'NETLIFY'],
			description: (
				<div className='text-light'>
					<p>
						A full-stack pediatric emergency medicine web application that
						provides health workers easy data access and manipulation about
						common pediatric emergencies built for Capstone II.
					</p>
				</div>
			),
			demo: 'https://www.youtube.com/watch?v=Kk_Ug3Loj8c',
			alignment: 'right',
			image: pemNowImg,
			gif: pemNowGif,
			orientation: 'landscape',
			reference: pemNowRef,
			inview: pemNowInView,
		},
	];

	return (
		<section className='work__section' id='work'>
			<div className='container content__container'>
				<Caption
					caption="Some Things I've Built"
					className='work__header'
					icon='work'
				/>
				{PROJECTS.map((project) => (
					<ProjectItem
						key={project.name}
						title={project.title}
						image={project.image}
						gif={project.gif}
						technologies={project.technologies}
						description={project.description}
						site={project.site}
						repo={project.repo}
						demo={project.demo}
						alignment={project.alignment}
						orientation={project.orientation}
						name={project.name}
						inview={project.inview}
						reference={project.reference}
					/>
				))}
			</div>
		</section>
	);
};

export default Work;
