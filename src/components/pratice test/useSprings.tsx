import { useEffect, useState } from "react";
import { useSprings, animated } from "react-spring";
import uuid from "react-uuid";
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript' // Language
import 'prismjs/themes/prism-tomorrow.css' // Theme
// import 'prismjs/themes/prism-okaidia.css' // Theme

export function UseSprings() {
    // const [springs, api] = useSprings(
    //     // 這邊的數字是指有幾個animated.div
    //     4,
    //     () => ({
    //         from: { opacity: 0 },
    //         to: { opacity: 0.5 },
    //     }),
    //     []
    // )

    const [show, setShow] = useState(true);
    const [springs, api] = useSprings(
        // 這邊的數字是指有幾個animated.div
        4,
        () => ({
            from: { opacity: show ? 0 : 1 },
            to: { opacity: show ? 1 : 0 },
        }),
        [show]
    )

    const [toggle, setToggle] = useState(false);
    const [props2, api2] = useSprings(
        2,
        () => ({
            to: {
                x: toggle ? 400 : 0,
            }
        }),
        [toggle]
    );

    const [toggle4, setToggle4] = useState(false);
    const [props4, apitest] = useSprings(
        2,
        () => ({
            from: { x: 0 },
            to: async (next) => {
                await next({ x: 100 });
                await next({ x: 0 });
            },
        }),
        [toggle4]
    )

    // Init

    useEffect(() => {
        Prism.highlightAll()
    }, [])


    return (
        <div className="useSprings">
            <div className="container">
                <h1>useSprings</h1>
                <div>如果您想使用統一的 API 編排多個 spring，請使用useSprings不要使用沒加s的</div>
            </div>

            <div className="container">
                <div className="flex">
                    <div className="border">
                        {springs.map(props => (
                            <animated.div style={props} key={uuid()}>
                                <h1>Hello World</h1>
                            </animated.div>
                        ))}
                    </div>
                    <pre>
                        <code className="language-javascript" >
                            {`const [show, setShow] = useState(true);
const [springs, api] = useSprings(
    // 這邊的數字是指有幾個animated.div
    4,
    () => ({
        from: { opacity: show ? 0 : 1 },
        to: { opacity: show ? 1 : 0 },
    }),
    [show]
)`}
                        </code>
                    </pre>
                </div>
                <button onClick={() => { setShow((show) => !show); }}>Start animation</button>
            </div>

            <div className="container">
                <div className="flex">
                    <div className="">
                        {props2.map(props => (
                            <animated.div style={{
                                width: 80, height: 80,
                                background: '#ff6d6d',
                                borderRadius: 8,
                                margin: 10 + 'px',
                                transform: props.x.to(x => `translate3d(${x}px,0,0)`),
                            }} key={uuid()}>
                            </animated.div>
                        ))}
                        移動的動畫
                    </div>
                    <pre>
                        <code className="language-javascript" >
                            {`const [toggle, setToggle] = useState(false);
const [props2, api2] = useSprings(
    2,
    () => ({
        to: {
            x: toggle ? 400 : 0,
        }
    }),
    [toggle]
);`}
                        </code>
                    </pre>
                </div>
                <button onClick={() => { setToggle((toggle) => !toggle); }}>Start animation</button>
            </div>


            <div className="container">
                <div className="">
                    {props4.map(props => (
                        <animated.div style={{
                            width: 80, height: 80,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            margin: 10 + 'px',
                            transform: props.x.to(x => `translate3d(${x}px,0,0)`),
                        }} key={uuid()}>
                        </animated.div>
                    ))}
                    來回移動的動畫
                </div>
                <button onClick={() => { setToggle4((toggle4) => !toggle4); }}>Start animation</button>
            </div>
        </div>
    )
}