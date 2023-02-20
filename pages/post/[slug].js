import React from 'react';
import { client, urlFor } from '@/lib/client';
import { PortableText } from '@portabletext/react';
import { TfiWrite } from 'react-icons/tfi';
import { Posts } from '@/components';

const PostDetails = ({ post, posts, author }) => {
	console.log(author[0]._id);
	const { body, title, postImage } = post;

	return (
		<div>
			<div className="post-detail-container">
				<h1>{title}</h1>
				<div>
					<div className="post-author">
						<div className="post-author-img">
							<TfiWrite />
						</div>
						<div className="post-author-name">
							{post.author._ref == author[0]._id ? author[0].name : ''}
						</div>
					</div>
					<div className="post-detail-image">
						<img src={urlFor(postImage[0])} alt="" />
					</div>
					{/* <div className="small-images-container">
						{postImage?.map((item, i) => (
							<img src={urlFor(item)} className="" onMouseEnter="" alt="" />
						))}
					</div> */}
				</div>
				<div className="post-details-desc">
					<PortableText value={body} />
				</div>
			</div>

			<div className="maylike-products-wrapper">
				<h2>Вам понравится</h2>
				<div className="marquee">
					<div className="maylike-products-container">
						{posts.map((item) => (
							<Posts key={item._id} post={item} />
						))}
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
	const queryAuthor = `*[_type == "author"]`;

	const author = await client.fetch(queryAuthor);
	const post = await client.fetch(query);
	const posts = await client.fetch(postQuery);

	return {
		props: { posts, post, author },
	};
};

export default PostDetails;
