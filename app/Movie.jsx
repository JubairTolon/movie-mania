import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    console.log(poster_path);
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            {/* <h3>{id}</h3> */}
            <Link className="" href={`/${id}`}>
                <Image className="mt-6" src={imagePath + poster_path} width={800} height={800} alt="" priority />
            </Link>
        </div>
    )
}