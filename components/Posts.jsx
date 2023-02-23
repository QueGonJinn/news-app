import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { urlFor } from '@/lib/client';

const Posts = ({ post }) => {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<>
			{domLoaded && (
				<div className="card-wrapper">
					<Link href={`/post/${post.slug.current}`}>
						<div className="post-card">
							<div className="post-card-image">
								<img src={urlFor(post.mainImage)} alt={post.slug} className="post-image" />
							</div>
							<h2 className="post-name">{post.title}</h2>
							<div className="post-descr">{post.lid}</div>
						</div>
					</Link>
				</div>
			)}
		</>
	);
};

export default Posts;
