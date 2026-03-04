import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(ctx) {
  const blog = await getCollection('blog');

  return rss({
    title: "David Pilo's Blog",
    description: "David Pilo's Blog",
    site: ctx.site,
    items: blog.map(({ id, data, body }) => ({
      title: data.title,
      pubDate: data.date,
      description: `${body.substring(0, 200).trim()}...`,
      link: `/blog/post/${id}`
    }))
  });
}
