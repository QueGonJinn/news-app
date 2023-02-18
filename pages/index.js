import React from 'react';
import { Posts, Footer, FooterBanner, HeroBanner } from '@/components';
import { client } from '@/lib/client';

const Home = ({ posts, bannerData }) => {
	console.log(bannerData);
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<div className="products-container">{posts?.map((post) => post.title)}</div>
			<FooterBanner />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "post"]';
	const posts = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { posts, bannerData },
	};
};

export default Home;
