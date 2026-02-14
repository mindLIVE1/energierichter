import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Redaktion'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const glossar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    letter: z.string().max(1),
  }),
});

export const collections = { blog, glossar };
