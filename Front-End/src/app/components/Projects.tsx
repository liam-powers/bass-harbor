import Image from 'next/image';

const projects = [
  {
    name: "Bass Harbor",
    description: "Aggregates 10+ sites selling new or used upright bass & bass guitar related musical equipment into one stylish web app. \
    Full-stack project created with MongoDB, Express.js, React.js, and Node.js (MERN) stack. \
    Web scraped via Puppeteer API. Decreases buyer-seller match time upwards of 300%.",
    image: "/uprightbass.png",
    repo: "https://github.com/liam-powers/Talkbass-Classifieds-Reloaded",
  },

  {
    name: "Pumping Iron Made Easy",
    description: "Automates common weightlifting calculations i.e. one-rep max estimates, BMI, \
    and calorie counting to encourage spending time in the gym, not crunching numbers. \
    Links provided to strong science-based hypertrophy resources. Built with Python and Tkinter. Web version in development.",
    image: "/gym.jpeg",
    repo: "https://github.com/liam-powers/Pumping-Iron-Made-Easy",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div key={project.name}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-5 pb-20 md:pb-0min-w-full">
            <div className="flex flex-col gap-4 max-w-screen-lg h-auto bg-mocha/[.85] rounded-2xl p-4 xl:">
              <div className="text-4xl font-bold text-center">
                {project.name}
              </div>
              <div className="text-2xl text-center">{project.description}</div>
            </div>

            <div className="flex flex-col items-center">
              <Image src={project.image} alt="Project image" sizes="100vw" className="w-fixed w-[250px] min-w-[250px] h-auto rounded-full pb-2" width={0} height={0} /> 
              
              <div className="flex items-center justify-center space-x-2">
                <Image src="/github.png" alt="Github icon" sizes="100vw" className="h-auto w-[35px]" width={0} height={0}/>
                <a href={project.repo} target="_blank" className="text-center text-[#0051d4] underline underline-offset-auto whitespace-nowrap">
                  <div>View on Github</div>
                </a>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
