import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { allPosts, Post } from '../.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export function PostCard(post: Post) {
  return (
    <div className="max-w-2xl mx-auto resize-none mb-16 text-left">
      <Link href={post.url}>
        <a>
          <img
            className="rounded-lg"
            src={post.image}
            alt={post.title}
          />
          <h2 className="text-4xl font-semibold pt-8 pb-4 mx-auto">
            {post.title}
          </h2>
          <p className="text-lg">
          <time dateTime={post.date} className="text-gray-600">
            {format(parseISO(post.date), "d LLL, yyyy")}
          </time>
          </p>
          <p className="text-lg pt-4">
            {post.preview}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="text-left flex justify-center flex-col place-items-center px-4">
      <Head>
        <title>Toby&apos;s blog</title>
        <meta name="description" content="Toby&apos;s blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="pt-36">
          <div className="pb-10">
            <h1 className="font-bold text-6xl pb-4">Toby&apos;s Blog</h1>
            <p className="text-lg">Hey there! I&apos;m Toby, and this is my blog</p>
          </div>

          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
    </div>
  )
}
