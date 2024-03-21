import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center text-xl text-center gap-10">
        <div>Welcome to Bass Harbor, a site to help you shop for upright and electric basses using
          a variety of filters to help you find the perfect bass for you. We have a wide selection of
          instruments pulled from around the web. Bass Harbor doesn't take any cut of the sale and simply
          provides a platform directing you to your ideal sale from whatever website it may be on.
        </div>

        <div className="flex flex-col gap-4">
          What are you looking for?
          <div className="flex flex-row justify-center gap-4 bg-green-300">
            <Link href="./upright">Upright Basses</Link>
            <Link href="./electric">Bass Guitars</Link>
          </div>
        </div>

        <div className="w-full h-screen bg-green-300">filling whole screen</div>
      </div>
    </div>
  )
}