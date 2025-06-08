export default function CurrentProject({img,title , subtitle , link}) {
    return (
        <section className="flex flex-col items-center justify-center ">


            <img className="w-full" src={img} alt={title} />
            <p className="mt-8">{subtitle}</p>
          
        </section>
    )
}