import { Heading } from "@/components/landing/heading";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <div className='lg:mx-15 mx-5 mt-5'>
            <Navbar />
            <Heading />
        </div>
    );
}
