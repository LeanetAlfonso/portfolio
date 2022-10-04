import React, {useState, useEffect} from 'react';

const ScrollDown = () => {
	const [scrollDown, setScrollDown] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setScrollDown(true);
			} else {
				setScrollDown(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className={`${!scrollDown && 'scrolling'}`}>
			<div className='scroll__down'>SCROLL DOWN</div>
			<div className='geeks'></div>
		</div>
	);
};

export default ScrollDown;
