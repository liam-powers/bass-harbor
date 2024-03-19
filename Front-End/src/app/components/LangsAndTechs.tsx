import Image from "next/image";

const languages = [
  'Python',
  'C',
  'TypeScript',
  'JavaScript',
  'C Sharp',
  'Java',
  'HTML',
  'CSS',
];

const technologies = [
  'MongoDB',
  'Express.js',
  'Node.js',
  'React',
  'Next.js',
  'Pandas',
  'NumPy',
  'Seaborn',
  'Matplotlib',
  'Git',
];

function createTechDisplay(arr: string[]) {
  return (
    <div className="flex flex-col gap-2">
      {arr.map((el) => (
        <div key={el} className="flex flex-row items-center gap-4">
          <Image src={"/codeicons/" + el.toLowerCase() + ".png"} alt="Skill icon" width={0} height={0} sizes="100vw" className="w-16 h-auto"/>
          <span>{el}</span>
        </div>
      ))}
    </div>
  )
};

export default function LangsAndTechs() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-20 md:gap-40 whitespace-nowrap bg-mocha/[.85] px-[2rem] py-10 md:px-8 md:py-8 rounded-2xl">
        <div>
          <div className="text-4xl font-bold pb-3 underline underline-offset-auto"> Languages </div>
          <div>{ createTechDisplay(languages) }</div>
        </div>
        <div>
          <div className="text-4xl font-bold pb-3 underline underline-offset-auto"> Technologies </div>
          <div>{ createTechDisplay(technologies) }</div>
        </div>
      </div>
    </>
  )
}