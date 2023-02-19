import React from 'react';
import { Posts, HeroBanner } from '@/components';
import { client } from '@/lib/client';

const Home = ({ posts, bannerData }) => {
	return (
		<>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
			<div className="posts-container">
				{posts?.map((post) => (
					<Posts key={post._id} post={post} />
				))}
			</div>
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
