import { allPosts, Post } from '../../.contentlayer/generated'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post: Post | undefined  = allPosts.find! (
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <div>
      <Head>
        <title>{post.title} / Toby&apos;s blog</title>
      </Head>
      <div className="flex flex-col justify-center place-items-center absolute top-32">
        <h1 className="text-4xl font-bold text-left">{post.title}</h1>
          <div className="text-left pt-8 pb-16 flex">
              <h1 className="text-lg pl-4">{post.author} ~ <span>
                 <time dateTime={post.date} className="">
                    {format(parseISO(post.date), "d LLL, yyyy")}
                </time>
              </span>
            </h1>
            </div>
            <p className="w-1/3 pb-8 text-lg" dangerouslySetInnerHTML={{ __html: post.body.html }} />
            <div className="pt-4 border-t border-rose-600 w-2/3">
              <Link href="/">↩︎ Head home</Link>
              <div className="flex pt-4 justify-center place-items-center pb-8">
                <Link href="https://github.com/developedbytoby"><a target="_blank" rel="noopener noreferrer">GitHub</a></Link> <p className="px-2">~</p>
                <Link href="https://twitter.com/developedbytoby"><a target="_blank" rel="noopener noreferrer">Twitter</a></Link>
                </div>
            </div>
          </div>
    </div>
  );
};

//

export default PostLayout;