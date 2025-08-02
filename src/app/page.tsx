import { FeatureSection } from "@/components/landing/feature";
import { Heading } from "@/components/landing/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <div className='lg:mx-15 mx-5 mt-5 mb-56'>
            <Navbar />
            <div className="space-y-14">
                <Heading />
                <FeatureSection />
            </div>
        </div>
    );
}
