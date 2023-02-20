import React from 'react';
import Head from 'next/head';
import NavBar from './Navbar';
import Footer from './Footer';
import Sider from './Sider';

import { categories } from '@/pages';

const Layout = ({ children }) => {
	console.log(categories);
	return (
		<div className="layout">
			<Head>
				<title>NewsApp</title>
			</Head>
			<header className="header">
				<NavBar />
			</header>
			<aside className="sidebar">
				<Sider />
			</aside>
			<main className="main">{children}</main>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
