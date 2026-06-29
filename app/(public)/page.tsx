import { anton, manrope, neueMontreal, switzer } from "@/lib/fonts";

export default function Home (){
    return (
        <section className="h-dvh flex flex-col  gap-12 ">
            <h1 className={`${neueMontreal.className} text-[5vw] font-bold leading-[100%]`}>FRONTEND DEVELOPER NEUE</h1>
            <h1 className={`${anton.className} text-[5vw] font-bold leading-[100%]`}>FRONTEND DEVELOPER ANTON</h1>
            <h1 className={`${switzer.className} text-[5vw] font-bold leading-[100%]`}>FRONTEND DEVELOPER SWITZER</h1>
            <h1 className={`${manrope.className} text-[5vw] font-bold leading-[100%]`}>FRONTEND DEVELOPER MANROPE</h1>


            <p className={`${manrope.className} font-medium text-[2vw] leading-[100%]`}>I'm Muhammad yudhi Azhari, MANROPE</p>
            <p className={`${neueMontreal.className} text-[2vw] leading-[100%]`}>I'm Muhammad yudhi Azhari, NEUEMONTREAL</p>
            <p className={`${switzer.className}  text-[2vw] leading-[100%]`}>I'm Muhammad yudhi Azhari, switzer</p>

            <div className="flex flex-col gap-3">
                <h2 className={`${neueMontreal.className} text-[5vw]`}> Career</h2>
                <p className={`${neueMontreal.className} text-[3vw]`}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nisi officiis necessitatibus, laborum ad magni, doloremque natus aspernatur molestias sapiente expedita.

                </p>
            </div>
        </section>
    )
}