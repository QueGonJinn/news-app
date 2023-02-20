import React from 'react';
import { client, urlFor } from '@/lib/client';
import { PortableText } from '@portabletext/react';

const PostDetails = ({ post, posts }) => {
	console.log(post);

	return (
		<div>
			<div className="product-detail-container">
				<div>
					<div className="image-container">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "post"] {
		slug {
			current
		}
	}`;

	const posts = await client.fetch(query);

	const paths = posts.map((post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
	const postQuery = `*[_type == 'post']`;

	const post = await client.fetch(query);
	const posts = await client.fetch(postQuery);

	return {
		props: { posts, post },
	};
};

export default PostDetails;
