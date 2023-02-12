import { useState } from "react";
import { useSprings, animated } from "react-spring";
import uuid from "react-uuid";
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

    return (
        <div className="useSprings">
            <div className="container">
                <h1>useSprings</h1>
                <div>如果您想使用統一的 API 編排多個 spring，請使用useSprings不要使用沒加s的</div>
            </div>

            <div className="container">
                <div className="border">
                    {springs.map(props => (
                        <animated.div style={props} key={uuid()}>
                            <h1>Hello World</h1>
                        </animated.div>
                    ))}
                </div>
                <button onClick={() => { setShow((show) => !show); }}>Start animation</button>
            </div>
        </div>
    )
}