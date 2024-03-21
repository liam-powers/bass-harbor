import { HomeIcon } from '@heroicons/react/24/solid';
import { GiGuitarBassHead, GiViolin } from "react-icons/gi";
import Link from 'next/link';
import { IconContext } from "react-icons";


export default function Navbar() {
  return (
    <div className="w-full h-20 bg-blue-300 sticky top-0">
      <div className="h-full flex justify-center items-center">
        <ul className="flex flex-row gap-20">
          <li className="flex items-center">
            <Link href="/">
              <HomeIcon size={55} />
              Home
            </Link>
          </li>
          <li>
            <Link href="./electric" className="flex flex-col items-center">
              <GiGuitarBassHead size={55} />
              Electric
            </Link>
          </li>
          <li>
            <Link href="./upright" className="flex flex-col items-center">
              <GiViolin size={55} />
              Upright
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}