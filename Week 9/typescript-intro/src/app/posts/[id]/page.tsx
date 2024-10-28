export default async function IndividualPost({
  params,
}: {
  params: { id: string };
}) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await result.json();
  return (
    <>
      <h1 className="text-2xl text-sky-600">Post: {params.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <a className="mt-12 text-purple-500" href="/posts">
        Back to Posts 📬
      </a>
    </>
  );
}
