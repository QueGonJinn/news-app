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
							<img src={urlFor(post.mainImage)} alt={post.slug} className="post-image" />
							<h2 className="post-name">{post.title}</h2>
							<div className="post-descr">
								<PortableText value={post.body[0]} />
							</div>
						</div>
					</Link>
				</div>
			)}
		</>
	);
};

export default Posts;
