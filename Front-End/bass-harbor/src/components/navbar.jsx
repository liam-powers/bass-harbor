import Link from "next/link"

export default function NavBar () {
    return (
        <div className="">
            <div><Link href="/">home</Link></div>
            <div><Link href="/electric">electric</Link></div>
            <div><Link href="/upright">upright</Link></div>
            <div><Link href="/about">about</Link></div>
        </div>
    )
}