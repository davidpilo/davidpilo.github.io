import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  })
});

export const collections = {
  blog
};
