
import react, { useEffect, useState, useRef } from "react";
import { useSpring, animated, useScroll, useSpringValue } from "react-spring";
import styles from './css/styles.module.scss';

const X_LINES = 40
const PAGE_COUNT = 5
const INITIAL_WIDTH = 20

export default function OfficeFunction() {
    const containerRef = useRef<HTMLDivElement>(null!)
    const barContainerRef = useRef<HTMLDivElement>(null!)

    const [textStyles, textApi] = useSpring(() => ({
        y: '100%',
    }))

    // 設定滾動條的狀態 要甚麼時候改變
    // 我們是根據containerRef的滾動條的位置來改變
    // 當滾動條的位置大於0.7時，我們要改變textStyles的y的值
    // 就會影響到textStyles的y的值 => 這邊的話也就會影響到文字出現的位置
    const { scrollYProgress } = useScroll({
        container: containerRef,
        onChange: ({ value: { scrollYProgress } }) => {            
            if (scrollYProgress > 0.7) {
                textApi.start({ y: '0' })
            } else {
                textApi.start({ y: '100%' })
            }
        },
        default: {
            immediate: true,
        },
    })

    return (
        <div ref={containerRef} className={styles.toplevel}>
            <div className={styles.animated__layers}>                
                <animated.div ref={barContainerRef} className={styles.bar__container}>
                    {Array.from({ length: X_LINES }).map((_, i) => (
                        <animated.div
                            key={i}
                            className={styles.bar}
                            style={{
                                width: scrollYProgress.to(scrollP => {
                                    const percentilePosition = (i + 1) / X_LINES

                                    return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                                }),
                            }}
                        />
                    ))}
                </animated.div>
                <animated.div className={styles.bar__container__inverted}>
                    {Array.from({ length: X_LINES }).map((_, i) => (
                        <animated.div
                            key={i}
                            className={styles.bar}
                            style={{
                                width: scrollYProgress.to(scrollP => {
                                    const percentilePosition = 1 - (i + 1) / X_LINES

                                    return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                                }),
                            }}
                        />
                    ))}
                </animated.div>
                <animated.div
                    className={styles.dot}
                    style={{
                        clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
                    }}
                >
                    <h1 className={styles.title}>
                        <span>
                            <animated.span style={textStyles} className="name">Aha!</animated.span>
                        </span>
                        <span>
                            <animated.span style={textStyles} className="name" >You found me!</animated.span>
                        </span>
                    </h1>
                </animated.div>
            </div>
            {new Array(PAGE_COUNT).fill(null).map((_, index) => (
                <div className={styles.full__page} key={index} />
            ))}
        </div>
    )
}
