import react, { useEffect, useState, useRef } from "react";
import { useSpring, animated, useScroll, useSpringValue } from "react-spring";

export function UseScroll() {
    const scrollYProgress = useScroll()

    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        if (scrollY >= window.innerHeight / 2) {
            // Trigger animation
        }
    }, [scrollY]);


    return (

        <div className="useScroll">

            <div className="container">
                <h1>useScroll</h1>
                <div>A small utility abstraction around our signature useSpring hook.</div>
                <div>It's a great way to create a scroll-linked animation.</div>
                <div>With either the raw value of distance or a 0-1 progress value.</div>
                <div>You can either use the scroll values of the whole document, or just a specific element.</div>

                <div>創建滑鼠滾輪動畫的好方法</div>
                <div>可以使用整個文件的滾動值，也可以使用特定元素的滾動值</div>
            </div>


            <div className="container">
                <animated.div style={{ opacity: scrollYProgress.scrollY }}>
                    顯示scrollY狀態 {scrollY}
                </animated.div>
            </div>

            <div className="container">
                <animated.div style={{
                    width: 80,
                    height: 80,
                    background: '#ff6d6d',
                    borderRadius: 8,
                    opacity: scrollYProgress.scrollYProgress,
                }} className="fixed">
                </animated.div>
            </div>

        </div>



    )
}


export const MyComponent2 = () => {
    const [scrollY, setScrollY] = useState(0);
    // const ref = useRef(null);
    const ref = useRef<HTMLDivElement>(null);

    const scrollYProgress = useSpring({
        scrollY,
        from: { scrollY: 0 },
        to: { scrollY: 1 },
    });

    const handleScroll = () => {
        // setScrollY(window.scrollY / (ref.current.offsetTop + ref.current.offsetHeight - window.innerHeight / 2));
        setScrollY(ref.current ? window.scrollY / (ref.current.offsetTop + ref.current.offsetHeight - window.innerHeight / 2) : 0);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={ref}>
            <animated.div style={{ opacity: scrollY + "%" }}>
                Hello World
            </animated.div>
        </div>
    );
};

export default MyComponent2;

///////////////////////////  useScroll有沒有進入可視區域  ///////////////////////////
export const UseScrollView = () => {
    const ref = useRef<HTMLDivElement>(null);
    const windowHeight = window.innerHeight;

    const [springProps, setSpringProps] = useSpring(() => ({
        opacity: 0.5
    }));

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
            if (!element) return;

            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const elementHeight = elementBottom - elementTop;
            const triggerPosition = windowHeight - elementHeight / 2;

            const scrollY = window.scrollY;
            const scrollPosition = scrollY + windowHeight;

            if (scrollPosition > elementTop + triggerPosition && elementBottom > 0) {
                // 元素進入了可視區域
                setSpringProps({ opacity: 1 });
            } else {
                // 元素還沒有進入可視區域
                setSpringProps({ opacity: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setSpringProps, windowHeight]);

    return (
        <div className="container">
            <div ref={ref}>
                <animated.div style={springProps}>
                    可視區域測試
                </animated.div>
            </div>
        </div>
    );
};
///////////////////////////  根據滑鼠在裡面的位置給予透明度  ///////////////////////////
export const MouseScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    // const handleMouseMove = (event: MouseEvent) => {
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
        const element = ref.current;
        if (!element) return;

        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementHeight = elementBottom - elementTop;
        const mousePosition = event.clientY - elementTop;
        const scrollY = mousePosition / elementHeight;

        setScrollY(scrollY);
    };

    const opacitySpring = useSpring({ opacity: scrollY, from: { opacity: 0 } });


    return (
        <div className="container">
            <div>根據滑鼠在裡面的位置給予透明度</div>
            <div className="border"
                ref={ref}
                onMouseMove={handleMouseMove}
            >
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...opacitySpring,
                    }}
                />
            </div>
        </div>
    );
};
