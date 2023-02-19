export { default as Footer } from './Footer';
export { default as Layout } from './Layout';
export { default as Navbar } from './Navbar';
export { default as Posts } from './Posts';
export { default as HeroBanner } from './HeroBanner';
export { default as FooterBanner } from './FooterBanner';
export { default as Cart } from './Cart';

import { client } from '@/lib/client';
export const getServerSideProps = async () => {
	const query = '*[_type == "post"]';
	const posts = await client.fetch(query);
	const navQuery = '*[_type == "category"]';
	const category = await client.fetch(navQuery);
	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { posts, bannerData, category },
	};
};
