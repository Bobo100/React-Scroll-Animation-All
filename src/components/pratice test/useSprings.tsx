import { useSprings, animated } from "react-spring";
export function UseSprings() {
    const [springs, api] = useSprings(
        // 這邊的數字是指有幾個animated.div
        4,
        () => ({
            from: { opacity: 0 },
            to: { opacity: 0.5 },
        }),
        []
    )

    return (
        <div>
            {springs.map(props => (
                <animated.div style={props}>
                    <h1>Hello World</h1>
                </animated.div>
            ))}
        </div>
    )
}