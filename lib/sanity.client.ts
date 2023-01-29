import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-03-25';

const config = { projectId, dataset, apiVersion };

export const sanityClient = createClient(
    {
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
    }
);

export const urlFor = 
(source: any) => 
createImageUrlBuilder(config).image(source);