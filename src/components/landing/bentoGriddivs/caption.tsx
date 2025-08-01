import { MotionCard } from "@/components/ui/card";
import { motion } from "motion/react";

export const Caption = () => {
    const captionTextOne =
        "Where clouds kiss the hills, and time slows down...#ThumjangDiaries #HiddenAssam #InfiniteCarousel";

    return (
        <MotionCard className='bg-foreground/40 text-white size-full text-left py-2 px-3 font-bold flex flex-col justify-between'>
            <h1 className='text-xl font-dotted'>
                <span className='text-4xl'>AI </span> <br />
                Auto Caption
            </h1>
            <div className='text-xs font-sans font-semibold'>
                <p>
                    {captionTextOne.split("").map((t, i) => (
                        <motion.span
                            initial={{ opacity: 0, filter : "blur(3px)" }}
                            whileInView={{ opacity: 1 , filter : "blur(0px)"}}
                            transition={{ delay: i * 0.02, ease : "linear" }}
                            key={i}>
                            {t}
                        </motion.span>
                    ))}
                </p>
                
            </div>
        </MotionCard>
    );
};
