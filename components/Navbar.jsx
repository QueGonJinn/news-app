import React from 'react';
import Link from 'next/link';

const NavBar = ({ props }) => {
	return (
		<div className="navbar-container">
			<Link href="#">Технологии</Link>
			<Link href="#">Наука</Link>
			<Link href="#">CGI</Link>
		</div>
	);
};

export default NavBar;
