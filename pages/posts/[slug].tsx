import { allPosts, Post } from "../../.contentlayer/generated"
import Head from "next/head"
import { format, parseISO } from "date-fns"
import Link from 'next/link'
import {BsGithub, BsTwitter, BsMailbox2} from 'react-icons/bs'
import { IconContext } from "react-icons"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"

function Footer() {
  return (
      <div>
        <p className="text-gray-600 float-left">Built by Toby. Always <Link
            href="https://github.com/developedbytoby/blog"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
        >
          open source
        </Link>.</p>
          <div className="float-right flex space-x-3 pb-8">
        <Link
          href="https://twitter.com/developedbytoby"
          className="cursor-pointer hover:opacity-75"
          target="_blank"
      >
          <BsTwitter/>
        </Link>
        <Link
            href="https://github.com/developedbytoby"
            className="cursor-pointer hover:opacity-75"
            target="_blank"
        >
          <BsGithub/>
        </Link>
        <Link
            href="mailto:hi@tobyb.dev"
            className="cursor-pointer hover:opacity-75"
            target="_blank"
        >
          <BsMailbox2/>
        </Link>
          </div>
      </div>
  )
}

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
  )
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }: { post: Post }) => {
const MDXContent = useMDXComponent(post.body.code)
  return (
      <div>
          <IconContext.Provider value={{ size: "2em" }}>
              <Head>
                  <title>{post.title}</title>
              </Head>
              <div className="max-w-2xl mx-auto pt-32 resize-none px-4">
                  <h1 className="text-4xl font-semibold">{post.title}</h1>
                  <div className="pt-4 pb-8">
                      <time dateTime={post.date} className="text-gray-600 pb-10 mx-auto block">
                          {format(parseISO(post.date), 'd LLL, yyyy')}
                      </time>
                      <Image
                          src={post.image}
                          alt={post.title}
                          width={1200}
                          height={630}
                      />
                  </div>
                  <div className="pb-8 text-lg">
                      <MDXContent/>
                  </div>
                  <div className="border-t-2 pt-8 justify-center place-items-center pb-8 space-x-3">
                      {post.end}
                  </div>
                  <Footer/>
              </div>
          </IconContext.Provider>
      </div>
  )
}

export default PostLayout