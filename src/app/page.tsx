import { Suspense } from "react";
import { headers } from "next/headers";
import Link from 'next/link';
import {getPosts} from "@/pages/api/posts";
export default async function Home() {
  const host = headers().get('host');
  const posts = await getPosts(host as string);
  const getPostLink = function (post: any) {
    return `blog/${post.id}`;
  }
  return (
    <>
      <header className="intro-header home-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Home</h1>
                <hr className="small"></hr>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <Suspense fallback={<div>Loading...</div>}>
              {posts.map((post: any) => (
                <div className="post-preview" key={post.id}>
                  <Link href={getPostLink(post)}>
                    <h2 className="post-title">
                      {post.title}
                    </h2>
                    <h3 className="post-subtitle">
                      {post.subtitle}
                    </h3>
                  </Link>
                  <p className="post-meta">Posted by {post.author} on {post.date}</p>
                </div>
              ))}
            </Suspense>
            <ul className="pager">
              <li className="next">
                <a href="#">Older Posts &rarr;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
