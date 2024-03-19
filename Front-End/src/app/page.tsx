import NavLinks from './components/NavLinks';
import Projects from './components/Projects';
import LangsAndTechs from './components/LangsAndTechs';
import TypeWords from './components/TypeWords';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Image from 'next/image';
import CustomCursor from "./components/CustomCursor";
import GoogleAnalytics from './components/GoogleAnalytics';

const bodyText = "I'm a full-time student at Northwestern University majoring in Computer Science and Jazz Studies, \
with a minor in Data Science. I created this site with Next.js, a React framework, \
to showcase some of my projects and interests.";

export default function Home() {
  return (
    <div>
      <NavLinks />
      <div>
        <div className='text-2xl h-screen'>
          <GoogleAnalytics />
          <CustomCursor />
          <div className='first section pb-20'>
            <div className='text-white text-xl md:text-3xl font-bold text-center pt-10 px-20 md:px-0 mx-auto max-w-screen-sm'>
              <div className='bg-mocha/[.85] p-4 rounded-2xl '>
                <TypeWords input={'> Hello! I\'m Liam Powers.'} />
              </div>
            </div>
            <div className="py-10 flex justify-center">
              <Image src="/me.jpg" alt="A picture of me!" width={0} height={0} sizes="100vw" className="w-80 h-auto" />
            </div>
            <div className="mx-auto max-w-screen-xl rounded-2xl text-center text-white px-5">
              <div className="bg-mocha/[.85] p-4 rounded-2xl">
                {bodyText}
              </div>
            </div>
          </div>
  
          <div id="skills" className='text-white pt-[8rem]'>
            <div className="flex justify-center">
              <LangsAndTechs />
            </div>
          </div>
  
          <div id="projects" className="text-white pt-[6rem] mx-auto max-w-screen-xl">
            <div className="pb-10 flex justify-center">
              <div className='bg-mocha/[.85] p-4 rounded-2xl text-center font-bold text-4xl'>
                Projects
              </div>
            </div>
            <div>
              <Projects />
            </div>
          </div>
  
          <div id="contact" className="text-white pt-5 md:pt-[30px] px-10 mx-auto max-w-screen-xl">
            <ContactMe />
          </div>
  
          <div className="text-sm"><Footer /></div>
  
        </div>
      </div>
    </div>
  )
}
