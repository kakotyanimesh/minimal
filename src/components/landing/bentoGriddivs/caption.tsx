import { MotionCard } from "@/components/ui/card";
import { motion } from "motion/react";

export const Caption = () => {
    const captionTextOne =
        "Where clouds kiss the hills, and time slows down. There’s something indescribably magical about places like this — where the air feels softer, the silence is deeper, and the chaos of the world fades into a distant hum";

    return (
        <MotionCard className='bg-foreground/40 text-white relative overflow-hidden text-left py-2 px-3 font-bold flex flex-col justify-between flex-1 pb-3 '>
            <div className="bg-secondary -z-10 size-32 top-0 right-0 blur-2xl absolute"/>
            <h1 className='text-xl font-dotted'>
                <span className='text-4xl'>AI </span> <br />
                Auto Caption
            </h1>
            <div className='text-xs font-sans font-semibold text-background'>
                <p className="">
                    {captionTextOne.split("").map((t, i) => (
                        <motion.span
                            className=""
                            initial={{ opacity: 0, filter : "blur(1px)" }}
                            whileInView={{ opacity: 1 , filter : "blur(0px)"}}
                            transition={{ delay: i * 0.04, ease : "linear" }}
                            key={i}>
                            {t}
                        </motion.span>
                    ))}
                </p>
                
            </div>
        </MotionCard>
    );
};
