export default function CurrentProject({img,title , subtitle , link}) {
    return (
        <section className="flex flex-col items-center justify-center ">


            <img className="w-full" src={img} alt={title} />
            <p className="mt-8">{subtitle}</p>

            <button className="sm:hidden bg-bordeaux text-white w-full p-4 mt-8 rounded-full font-bold">Découvrir le projet</button>
          
        </section>
    )
}