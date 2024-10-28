import { postType } from "@/lib/types";

export default async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <>
      <h1>Posts Page</h1>
      {data.map((post: postType) => (
        <div key={post.id}>
          {/* I added the optional chainin operator here in case there is an object with an empty title property */}
          <h1 className="text-sky-600 ">{post?.title}</h1>
          <h2 className="p-2">{post.body}</h2>
          <a href={`/posts/${post.id}`} className="text-purple-500 mb-12">
            Link to Post 📨
          </a>
        </div>
      ))}
    </>
  );
}
