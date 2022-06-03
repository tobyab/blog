import { allPosts, Post } from '../.contentlayer/generated'
import Head from 'next/head'

export async function getStaticPaths() {
    const paths: string[] = allPosts.map((post) => post.url);
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const post: Post = allPosts.find(
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
          </div>
      )
  }