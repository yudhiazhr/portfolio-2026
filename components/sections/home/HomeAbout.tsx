'use client'
import Image from "next/image";
import data from "@/data/data.json"
import Link from "next/link";

export default function HomeAbout() {
    return(
        <section className="flex flex-col min-h-dvh gap-[2vw] pb-[2vw]">
            {/* marquee */}
            <div className="bg-[#00565b] py-[1vw] text-white w-full whitespace-nowrap overflow-hidden">
                <h2 className="font-sans font-bold text-[13vw] leading-[100%]">AZHR🍕YUDHIAZHR</h2>
            </div>

            <div className="grid grid-cols-3 w-full px-[4vw] gap-[2vw]">
                <Image
                    src={data.home.about.image}
                    alt="Profile"
                    width={1000}
                    height={1000}
                    className="w-full rounded-[0.5vw]"
                />
                <div className="col-span-2 flex flex-col">
                    <div className="flex flex-col gap-[2.5vw]">
                        <h4 className="text-[3.5vw] leading-[110%] text-balance font-semibold">{data.home.about.desc}</h4>
                        
                        <div className="flex flex-col gap-[0.8vw]">
                            <h5 className="text-[1.1vw] font-semibold">{data.home.about.focus.title}</h5>
                            <div className="flex flex-wrap gap-[0.6vw]">
                                {data.home.about.focus.expertise.map((item, idx) => (
                                    <span key={idx} className="bg-[#ededed] text-[1.05vw] rounded-full px-[1.2vw] py-[0.6vw]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href={data.home.about.cta.link}
                        className="mt-auto border border-black mr-auto px-[5vw] py-[0.8vw] text-[1vw] rounded-[0.4vw]"
                    >
                        {data.home.about.cta.text}
                    </Link>
                </div>
            </div>
        </section>
    )
}