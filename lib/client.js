import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: 'p32mhntu',
	dataset: 'production',
	apiVersion: '2023-02-18',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
