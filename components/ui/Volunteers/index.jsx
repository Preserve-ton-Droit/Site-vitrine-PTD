export default function Volunteers({img,title , subtitle , link}) {
    return (
        <section className="flex flex-col items-center justify-center ">


            <img src={img} alt={title} />
            <p className="mt-4 text-center text-xl font-bold">{title}</p>
            <p className="text-center">{subtitle}</p>
            <p className="text-center text-purple-500 ">{link}</p>
        </section>
    )
}