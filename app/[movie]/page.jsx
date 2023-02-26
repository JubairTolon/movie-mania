import Image from "next/image";

export async function generateStaticParams(params) {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);

    const res = await data.json();
    console.log(res)
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}
export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);

    const res = await data.json();
    console.log(res)
    return (
        <div className="m-24">
            <h1 className="text-3xl mb-12">Movie Detail</h1>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
                <Image className="mt-12 w-full" src={imagePath + res.poster_path} width={1000} height={1000} alt="" priority />
            </div>
        </div>
    )
}