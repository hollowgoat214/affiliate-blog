import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    category: z.enum(['Tech', 'Trending', 'Gear', 'Lifestyle']),
    featured: z.boolean().default(false),
    placeholder: z.boolean().default(false),
    author: z.string().default('Tumbleweed0220'),
    tags: z.array(z.string()).default([]),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    affiliateProducts: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          image: z.string(),
          url: z.string(),
          price: z.string().optional(),
          badge: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
