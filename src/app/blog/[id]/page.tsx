import { headers } from "next/headers";
import { getPosts } from "@/pages/api/posts";
export default async function Page({ params }: { params: { id: string } }) {
  const host = headers().get('host');
  const posts = await getPosts(host as string);
  const post = posts.find((p: any) => p.id === params.id);
  return (
    <>
      <header className="intro-header post-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="site-heading">
                <h1>Post Details</h1>
                <hr className="small"></hr>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <h2 className="post-title">
              {post.title}
            </h2>
            <h3 className="post-subtitle">
              {post.subtitle}
            </h3>
            <p>{post.content}</p>
            <p className="post-meta">Posted by {post.author} on {post.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}
