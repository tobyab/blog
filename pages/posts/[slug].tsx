import { allPosts, Post } from '../../.contentlayer/generated'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { IconContext } from 'react-icons'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { BsTwitter, BsGithub, BsMailbox2 } from 'react-icons/bs'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false
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
const MDXContent = useMDXComponent(post.body.code)
  return (
    <div>
      <IconContext.Provider value={{ size: "1.5em" }}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="max-w-2xl mx-auto pt-32 resize-none px-4">
        <h1 className="text-4xl font-semibold">{post.title}</h1>
          <div className="pt-4 pb-8">
          <time dateTime={post.date} className="text-gray-600 pb-10 mx-auto block">
            {format(parseISO(post.date), 'd LLL, yyyy')}
          </time>
          <img
            className="rounded-lg"
            src={post.image}
            alt={post.title}
          />
            </div>
            <div className="pb-8 text-lg">
              <MDXContent/>
            </div>
              <div className="border-t-2 flex pt-8 justify-center place-items-center pb-8 space-x-3">
                {post.end}
              </div>
          <div className="pb-16 pt-4">
            <p className="text-gray-600 float-left">Built by Toby. Always <Link href="https://github.com/developedbytoby/blog"><a className="underline" target="_blank" rel="noopener noreferrer">open source</a></Link>.</p>
            <div className="float-right flex space-x-3">
              <Link href="https://twitter.com/developedbytoby">
                <a 
                  className="cursor-pointer hover:opacity-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter/>
                </a>
              </Link>
              <Link href="https://github.com/developedbytoby">
                <a 
                  className="cursor-pointer hover:opacity-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub/>
                </a>
              </Link>
              <Link href="mailto:mail.toby@icloud.com">
                <a
                  className="cursor-pointer hover:opacity-75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsMailbox2/>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default PostLayout;
