import { TemplateArrayTypes } from "@/lib/types";
import { DisplayTemplates } from "@/components/ui/displayTemplates";

export default async function Dashboard() {
    const imagesArray: TemplateArrayTypes[] = [
        {
            src: "0",
            aespectRatio: "4/5",
            alt: "templateOne",
        },
        {
            src: "1",
            aespectRatio: "9/16",
            alt: "templateTwo",
        },
        {
            src: "2",
            aespectRatio: "1/1",
            alt: "templateThree",
        },
        {
            src: "3",
            aespectRatio: "9/16",
            alt: "templateFour",
        },
        {
            src: "4",
            aespectRatio: "9/16",
            alt: "templateFive",
        },
        {
            src: "5",
            aespectRatio: "9/16",
            alt: "templateSix",
        },
    ];
    return (
        <div className='space-y-10 flex flex-col justify-center text-center items-center w-full mt-10 px-3 '>
            <h1 className='font-dotted text-3xl'>
                What You want to design Today
            </h1>
            <DisplayTemplates imagesArray={imagesArray} />
        </div>
    );
}
