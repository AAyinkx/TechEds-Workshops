export default async function ProductPage({ params }) {
  console.log(params); // Output: { id: 1 }
  const response = await fetch(`https://api.vercel.app/products/${params.id}`); // call the API
  const item = await response.json(); // parse the response as JSON

  return (
    <>
      <h1>Product {params.id}</h1>
      <li>
        {item.name}
        <ul>
          <li>{item.price}</li>
          <li>{item.description}</li>
        </ul>
      </li>
    </>
  ); // Output: Post Page 1
}
