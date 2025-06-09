import Calendar from "../../../public/images/calendar.png"
import Image from 'next/image'

export default function LawCard({title, subtitle, description, img, btnStyle}) {
    return (
        <section className="flex flex-row items-center  justify-between">


            <div className="flex flex-col gap-y-4 w-full border border-bordeaux sm:border-none rounded-lg py-8 px-4 sm:w-1/2 sm:p-0">

           

            <p className="text-2xl font-bold text-noir">{title}</p>
            <div className="flex flex-row items-center gap-x-2 justify-between">


                <div className="flex flex-row items-center gap-x-2">
                <Image 
                    src="/images/calendar.png"
                    alt="calendar"
                    width={24}
                    height={24}
                    className="sm:hidden"
                />
                <p>{subtitle}</p>

                </div>
               


                <p className="p-2 border border-noir rounded-lg sm:hidden">Travail</p>
            </div>
          
            <p>{description}</p>

            <button className={`w-[156px] ${btnStyle} mx-auto sm:mx-0 px-2 py-2 rounded-full mt-4`}>En savoir plus</button>
            </div>


            <img className="hidden sm:block" src={img} alt={"image"} />           
        </section>
    )
}