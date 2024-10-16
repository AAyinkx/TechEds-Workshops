import Image from "next/image";
import coasterroller from "@/../public/coaster1.jpg";

import { db } from "@/Utils/dbConnection";
export default async function CoastersPage() {
  const coasters = await db.query(`SELECT * FROM coasterRollers`);
  console.log(coasters);
  const wrangledCoasters = coasters.rows;
  return (
    <>
      <h1>List of Coasters</h1>
      <h2>The fun never ends!</h2>
      <Image
        src={coasterroller}
        alt="Coaster Roller"
        width={300}
        height={200}
      />
      {wrangledCoasters.map((coaster) => (
        <div
          key={coaster.id}
          className="border-lime-400 border-2 flex flex-col items-center"
        >
          <h2>{coaster.name}</h2>
          <p>{coaster.location}</p>
          <p>{coaster.height}</p>
        </div>
      ))}
    </>
  );
}
