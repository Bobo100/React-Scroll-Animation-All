import React from "react";
import { useTransition, animated } from "react-spring";

export function UseTransition({ data = [1, 2, 5] }) {
    const [transitions, api] = useTransition(data, () => ({
        from: { opacity: 0 },
        enter: { opacity: 0.5 },
        leave: { opacity: 0 },
        // to: { opacity: 0.5 },
    }), [data])


    return (
        <div className="useTransition">
            <div className="container">
                <h1>useTransition</h1>
                <div>This hook is best suited for animating in & out datasets or items you don't particularly want to be left in the DOM, e.g. a dialog.</div>
                <div>這個鉤子最適合動畫進出數據集或你不想留在 DOM 中的項目，例如。 一個對話框。</div>
                <h2>用法</h2>
                <div>useTransition depends on an array of data.</div>
                <div>That data can be anything you want, we use a lot of internals to track each datum including inferring the keys, this is the first argument. </div>
                <div>The second is a config object, which is different to useSpring or useSprings so take note!</div>
                <div>useTransition 取決於一組數據。</div>
                <div>該數據可以是您想要的任何內容，我們使用大量內部機制來跟踪每個數據，包括推斷鍵，這是第一個參數。</div>
                <div>第二個是配置對象，它與 useSpring 或 useSprings 不同，所以請注意！</div>
            </div>

            <div className="container">
                {/* {transitions((style, item) => (
                    <animated.div style={style}>{item}</animated.div>
                ))} */}              
             
            </div>
        </div>
    )
}

export function MyComponent({ data = [1, 2, 3] }) {
    const transitions = useTransition(data, {
        from: { opacity: 0 },
        enter: { opacity: 0.8 },
        leave: { opacity: 1 },
    })

    return transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
    ))
}