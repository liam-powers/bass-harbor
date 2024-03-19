import Link from "next/link";
import Image from "next/image";

export default function ContactMe() {
    return (
        <div className="text-center flex items-center flex-col">
            <div className="pb-6">
                <div className="bg-mocha/[.85] p-4 rounded-2xl text-3xl font-bold inline-block">
                    Reach me at:
                </div>
            </div>
            <div className="mt-4 text-black text-sm md:text-2xl">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center">
                        <Image src="/gmail.png" alt="Email icon" className="w-12 h-auto" width={48} height={48} />
                        <Link href="mailto:LiamPowers@u.northwestern.edu" className="underline hover:text-[#569A86] ml-2">
                            LiamPowers@u.northwestern.edu
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Image src="/linkedin.png" alt="LinkedIn icon" className="w-12 h-auto" width={48} height={48} />
                        <Link href="https://www.linkedin.com/in/liampowers-/" className="underline hover:text-[#569A86] ml-2">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
