'use client'
import NavLinks from "../components/NavLinks";
import FilmShowcaseGrid from "../components/FilmShowcaseGrid";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function Film() {
    return (
        <div>
            <GoogleAnalytics />
            <CustomCursor />
            <NavLinks />
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 pt-10 items-center">
                <div className="text-black text-2xl text-white px-16">
                    <div className="bg-mocha/[.85] p-4 rounded-2xl max-w-[600px]">
                        I like film! I use a Kodak Ektar H35 and any film from Kodak.
                        Shots are all taken from various excursions to San Francisco and San Jose.
                    </div>
                </div>
                <div className="w-3/12 h-auto min-w-[22rem]"><FilmShowcaseGrid /></div>
            </div>

            <div className="text-sm"><Footer /></div>
        </div>
    );
}