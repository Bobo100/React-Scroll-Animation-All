import React, { useState, useEffect } from 'react';
import { useSpring, animated, useScroll } from '@react-spring/web';
import "./css/ThirdTest.css"
import uuid from 'react-uuid';

//----------------- 1 -----------------
// function Square({ index }: { index: number }) {
//     const { x } = useSpring({
//         from: { x: index % 2 === 0 ? window.innerWidth - 200 : 0 },
//         to: { x: window.innerWidth / 2 },
//         config: { duration: 1000 }
//     });

//     return (
//         <animated.div
//             className='square'
//             style={{
//                 width: 200,
//                 height: 80,
//                 margin: '20px 0',
//                 background: '#ff6d6d',
//                 borderRadius: 8,
//                 transform: x.to(x => `translate3d(${x}px, 0, 0)`)
//             }}
//         />
//     );
// }
// export const ThirdComponent = () => {
//     const [width, setWidth] = useState(0);

//     useEffect(() => {
//         setWidth(window.innerWidth);
//     }, []);

//     return (
//         <>
//             {[...Array(5)].map((_, i: number) => (
//                 <Square key={uuid()} index={i} />
//             ))}
//         </>
//     );
// };
// export default ThirdComponent;

//----------------- 2 -----------------
function Square({ index }: { index: number }) {
    const [x, setX] = useState(index % 2 === 0 ? window.innerWidth - 200 : 0);
    const { scrollX } = useScroll();
    const scollx = scrollX.get();
    console.log("scrollX", scrollX)
    console.log("scollx", scollx);
    useEffect(() => {
        setX(scollx / 2 + (index % 2 === 0 ? window.innerWidth - 200 : 0));
        console.log("useEffect");
    }, [scollx, index]);

    return (
        <animated.div
            className='square'
            style={{
                width: 200,
                height: 80,
                margin: '20px 0',
                background: '#ff6d6d',
                borderRadius: 8,
                transform: `translate3d(${x}px, 0, 0)`
            }}
        />
    );
}

export const ThirdComponent = () => {
    return (
        <>
            {[...Array(5)].map((_, i: number) => (
                <Square key={i} index={i} />
            ))}
        </>
    );
};



// 往下滑動，元件會跟著往下移動 且 透明度會隨著滾動而改變
// import { useState, useEffect } from 'react';
// import { useScroll, animated, useSpring } from '@react-spring/web'

// export function ThirdComponent() {
//     const { scrollYProgress } = useScroll()

//     const [scrollY, setScrollY] = useState(0)

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY)
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     const { y } = useSpring({
//         from: { y: 0 },
//         to: { y: scrollY },
//         config: { duration: 1000 }
//     })


//     return (
//         <animated.div style={{
//             opacity: scrollYProgress,
//             transform: y.to(y => `translate3d(0,${y + 100}px,0)`),
//             border: '1px solid red',
//         }}>
//             Hello World123
//         </animated.div>
//     )
// }