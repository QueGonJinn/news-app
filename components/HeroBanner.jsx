import Link from 'next/link';
import React from 'react';
import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBanner }) => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{heroBanner.smallText}</p>
				<h3>{heroBanner.midText}</h3>
				<img src={urlFor(heroBanner.image)} alt="posts" className="herro-banner-image" />
				<div>
					<Link href="/post/ID">
						<button type="button">{heroBanner.buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>DESCRIPTION</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
