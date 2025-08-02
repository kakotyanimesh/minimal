import { TemplateArrayTypes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export const DisplayTemplates = ({
    imagesArray,
}: {
    imagesArray: TemplateArrayTypes[];
}) => {
    return (
        <div className='md:columns-3 gap-0.5 space-y-0.5 columns-1'>
            {imagesArray.map((img, key) => (
                <div
                    key={key}
                    style={{ aspectRatio: img.aespectRatio }}
                    className='border border-primary group size-fit break-inside-avoid'>
                    <Link href={`editor/${img.src}`} target="_blank">
                        <div className='overflow-hidden relative'>
                            <Image
                                src={`/corosol/${img.src}.webp`}
                                width={300}
                                loading="lazy"
                                height={300}
                                alt={img.alt}
                                className='group-hover:scale-102 transition-all duration-300 ease-out'
                            />
                            <div className='absolute inset-0 bg-primary/1 transition-all duration-500 ease-out backdrop-blur-xs opacity-0 group-hover:opacity-90 flex justify-center items-center'>
                                <span className='bg-primary px-2 font-dotted'>
                                    Start Editing
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};
