import React from 'react';
import Link from 'next/link';

const NavBar = ({ props }) => {
	return (
		<div className="navbar-container">
			<div className="navbar-logo">
				<Link href={'/'}>NewsApp</Link>
			</div>
			<div className="navbar-menu"></div>
		</div>
	);
};

export default NavBar;
