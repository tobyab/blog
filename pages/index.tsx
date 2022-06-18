import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
    <div className="text-left space-y-2 pt-8">
      <Link href={post.url}>
        <a className="text-black no-underline">
          <h1 className="text-xl">{post.title}</h1>
            <p>{post.preview}</p>
              <p className="text-lg">{post.author} ~ <span>
              <time dateTime={post.date} className="">
                {format(parseISO(post.date), "d LLL, yyyy")}
              </time>
            </span>
          </p>
        </a>
      </Link>
    </div>
  )
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="text-center flex justify-center flex-col place-items-center">
      <Head>
        <title>Toby&apos;s blog</title>
        <meta name="description" content="Toby&apos;s blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="absolute top-36">
          <h1 className="font-bold text-6xl pb-8">Toby&apos;s Blog</h1>

          {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
        </div>
    </div>
  )
}
