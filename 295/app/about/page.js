import Image from "next/image";
import Link from "next/link";

export default async function About() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const photo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXID5NQ4IompY-CCfEyDuTFGdjM50tRFie_w&usqp=CAU";

  return (
    <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12 ">
      <div>
        <div className="text-gray-300  text-center mb-5">
          <h1 className="text-lg">عباس خسروی</h1>
          <h2>برنامه نویس و مدرس</h2>
        </div>
        <Link href={`/about/photo`}>
          <Image
            alt=""
            src={photo}
            height={400}
            width={400}
            className="mx-auto rounded object-cover aspect-square"
          />
        </Link>
      </div>
    </main>
  );
}
