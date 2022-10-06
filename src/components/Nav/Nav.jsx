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

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<nav>
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
				<div className={`${sidebar ? 'side__bar active' : 'side__bar'} `}>
					<div className='btn__close__bar' onClick={toggleSidebar}>
						<AiOutlineClose />
					</div>
					<a aria-label='About' href='#about' onClick={toggleSidebar}>
						About
					</a>
					<a aria-label='Tools' href='#tools' onClick={toggleSidebar}>
						Tools
					</a>
					<a aria-label='Work' href='#work' onClick={toggleSidebar}>
						Work
					</a>
					<a aria-label='Contact' href='#contact' onClick={toggleSidebar}>
						Contact
					</a>
					<ResumeButton />
				</div>

				<div
					ref={navRef}
					className={`menu__items fadedown-enter ${
						navInView && 'fadedown-enter-active'
					}`}
				>
					<a aria-label='About' href='#about'>
						About
					</a>
					<a aria-label='Tools' href='#tools'>
						Tools
					</a>
					<a aria-label='Work' href='#work'>
						Work
					</a>
					<a aria-label='Contact' href='#contact'>
						Contact
					</a>
					<ResumeButton />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
