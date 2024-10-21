import Link from "next/link";
export default async function ProductsList({ searchParams }) {
  const response = await fetch("https://api.vercel.app/products"); // call the API
  const products = await response.json(); // parse the response as JSON
  if (searchParams.sort === "asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
    console.log(products);
  } else if (searchParams.sort === "desc") {
    products.sort((a, b) => b.name.localeCompare(a.name));
    console.log(products);
  } else {
    products;
  }
  return (
    <>
      <h1>Products</h1>
      <Link href="/products?sort=asc">Sort ASC</Link>
      <Link href="/products?sort=desc">Sort DESC</Link>
      <ul>
        {products.map((item) => (
          <>
            <a href={`/products/${item.id}`}>{item.name} link</a>
            <li key={item.id}>
              {item.name}

              <ul>
                <li>{item.price}</li>
                <li>{item.description}</li>
              </ul>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
