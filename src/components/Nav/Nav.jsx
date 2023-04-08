import React, {useState} from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {useInView} from 'react-intersection-observer';
import ResumeButton from '../ResumeButton/ResumeButton';

const Nav = () => {
	const [sidebar, setSidebar] = useState(false);
	const {ref: logoRef, inView: logoInView} = useInView();
	const {ref: navRef, inView: navInView} = useInView();
	const {ref: menuRef, inView: menuInView} = useInView();

	const showResumeButton = false;

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	const NAV_ITEMS = [
		{title: 'About', link: '#about'},
		{title: 'Tools', link: '#tools'},
		{title: 'Work', link: '#work'},
		{title: 'Contact', link: '#contact'},
	];

	return (
		<nav>
			<div className='nav__content'>
				<div
					ref={logoRef}
					className={`nav__left fadedown-enter ${
						logoInView && 'fadedown-enter-active'
					}`}
				>
					<a href='/' aria-label='Home'>
						<img src={logo} alt='LAA' className='logo' />
					</a>
				</div>
				<div className='nav__right'>
					<div
						ref={menuRef}
						className={`btn__menu fadedown-enter ${
							menuInView && 'fadedown-enter-active'
						}`}
					>
						<BiMenuAltRight onClick={toggleSidebar} />
					</div>
					<div className={`side__bar ${sidebar && 'active'}`}>
						<div className='btn__close__bar' onClick={toggleSidebar}>
							<AiOutlineClose />
						</div>
						{NAV_ITEMS.map((item) => (
							<a key={item.title} href={item.link} onClick={toggleSidebar}>
								{item.title}
							</a>
						))}
						{showResumeButton && <ResumeButton />}
					</div>
					<div
						ref={navRef}
						className={`menu__items fadedown-enter ${
							navInView && 'fadedown-enter-active'
						}`}
					>
						{NAV_ITEMS.map((item) => (
							<a key={item.title} aria-label={item.title} href={item.link}>
								{item.title}
							</a>
						))}
						{showResumeButton && <ResumeButton />}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
