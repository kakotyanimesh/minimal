"use client"

import { SVGMotionProps, motion } from "motion/react";


export function Instagram(props: SVGMotionProps<SVGSVGElement>) {
    return (
        <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 18 20'
            {...props}>
            <defs>
                {/* GEMINI WRITTEN CODE THANK YOU  */}

                {/* This defines the gradient that will be used to color the icon.
                  It's a radial gradient that transitions from yellow to red to purple,
                  mimicking the official Instagram color scheme.
                */}
                <radialGradient
                    id='insta-gradient'
                    cx='30%'
                    cy='107%'
                    fx='30%'
                    fy='107%'
                    r='150%'>
                    <stop stopColor='#ffc107' offset='0%' />
                    <stop stopColor='#f99d4b' offset='25%' />
                    <stop stopColor='#f44336' offset='50%' />
                    <stop stopColor='#d32cb7' offset='75%' />
                    <stop stopColor='#9c27b0' offset='100%' />
                </radialGradient>
            </defs>
            <g>
                {/* GEMINI WRITTEN CODE THANK YOU  */}
                {/* This path uses the gradient defined above as its fill.
                  The 'd' attribute contains the complex shape data for the Instagram logo,
                  including the main frame, the inner circle, and the top-right dot.
                */}
                
                <path
                    fill='url(#insta-gradient)'
                    d='M9 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673s.51.615.673 1.035c.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035s-.615.51-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.8 2.8 0 0 1-1.035-.673 2.8 2.8 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035s.615-.51 1.035-.673c.317-.123.794.27 1.671-.31.95-.043 1.234-.052 3.637-.052M9 0C6.556 0 6.25.01 5.29.054 4.33.098 3.676.25 3.104.473A4.4 4.4 0 0 0 1.51 1.51c-.5.5-.809 1.002-1.038 1.594C.25 3.677.097 4.33.053 5.289.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.959.196 1.613.419 2.185.23.592.537 1.094 1.038 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.4 4.4 0 0 0 1.594-1.038c.5-.5.808-1.002 1.038-1.594.223-.572.375-1.226.419-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.4 4.4 0 0 0 16.49 1.51 4.4 4.4 0 0 0 14.895.473C14.323.25 13.67.097 12.711.053 11.75.01 11.444 0 9 0m0 4.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244M9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m5.884-7.804a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0'
                />
            </g>
        </motion.svg>
    );
}
