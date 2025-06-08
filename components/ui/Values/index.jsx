export default function Values({img,title , description}) {
    return (
        <section className="flex flex-col items-center justify-center max-w-96">


            <img src={img} alt={title} />
            <p className="mt-4 text-center text-2xl font-bold">{title}</p>
            <p className="text-center line-clamp-3">{description}</p>
        </section>
    )
}