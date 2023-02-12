import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import { Common, CommonWithOutFlex, CodeBlock } from "./Common";

export const UseSpring = () => {
    const [show, setShow] = useState(true);
    const props = useSpring({
        // 假如show是true，就會從0.5變成1，反之則是1變成0.5
        // show的初始值是true
        from: { opacity: show ? 0.5 : 1 },
        opacity: show ? 1 : 0.5,
    });

    // const props2 = useSpring({
    //     from: { x: 0 },
    //     to: async (next) => {
    //         await next({ x: 100 });
    //         await next({ x: 0 });
    //     }
    // });

    // const [props2, api2] = useSpring({
    //     from: { x: 0 },
    //     to: async (next) => {
    //         await next({ x: 100 });
    //         await next({ x: 0 });
    //     }
    // }, []);


    const [toggle, setToggle] = useState(false);
    // const [startToggling, setStartToggling] = useState(false);
    const props2 = useSpring({
        to: {
            x: toggle ? 400 : 0,
        }
        // onRest: () => {
        //     if (!startToggling) {
        //         setToggle((toggle) => !toggle);
        //         setStartToggling((startToggling) => !startToggling);
        //     } else {                
        //         setStartToggling((startToggling) => !startToggling);
        //     }
        // },
    });

    const [open, setOpen] = useState(false);
    const props3 = useSpring({ width: open ? 240 : 40 });


    const [toggle4, setToggle4] = useState(false);
    const [props4, apitest] = useSpring(
        () => ({
            from: { x: 0 },
            to: async (next) => {
                await next({ x: 100 });
                await next({ x: 0 });
            },
        }),
        [toggle4]
    )

    // 下面兩個useEffect都可以達到相同的效果 但並不需要寫在useEffect裡面 單純在測試
    // const [props4, apitest] = useSpring(
    //     () => ({
    //     }),
    //     []
    // )    
    // useEffect(() => {
    //     apitest.start({
    //         from: { x: 0 },
    //         to: async (next) => {
    //             await next({ x: 100 });
    //             await next({ x: 0 });
    //         },
    //         reset: true,
    //     });
    // }, [toggle4, apitest]);

    // useEffect(() => {
    //     let direction = 'right';
    //     apitest.start({
    //         to: async (next) => {
    //             if (direction === 'right') {
    //                 await next({ x: 100 });
    //                 await next({ x: 0 });
    //                 direction = 'left';
    //             } else {
    //                 await next({ x: 0 });
    //                 await next({ x: 100 });
    //                 direction = 'right';
    //             }
    //         },
    //         reset: true,
    //     });
    // }, [toggle4, apitest]);

    return (
        <div className="useSpring">
            <div className="container">
                <h1>useSpring</h1>
                <div>最基本的component，就如同transition一樣，可以用來做動畫
                </div>
                <div>可以用來做動畫，也可以用來做一些簡單的效果</div>
                <div>下面我寫了一些小範例，並且可以使用button去看動畫</div>
            </div>

            {/* --------------------------------------- */}
            <Common set={setShow} toggle={show}>
                <animated.div style={props}>
                    <h1>設立了一個透明度的useSpring</h1>
                </animated.div>
                <CodeBlock>
                    {`const [show, setShow] = useState(true);
const props = useSpring({
    // 假如show是true，就會從0.5變成1，反之則是1變成0.5
    // show的初始值是true
    from: { opacity: show ? 0.5 : 1 },
    opacity: show ? 1 : 0.5,
});`}</CodeBlock>
            </Common>

            {/* --------------------------------------- */}
            <CommonWithOutFlex set={setToggle} toggle={toggle}>
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...props2,
                    }}
                >
                </animated.div>
                移動的動畫
                {/* 不安全的寫法 下面的 */}
                {/* 如果其他代码在该函数调用期间更改了 toggle 值 就會有問題 */}
                {/* 簡單的測試就是 自己button連點 就會發現錯誤 */}
                {/* <button onClick={() => setToggle(!toggle)}>點我重新看動畫</button> */}
            </CommonWithOutFlex>

            {/* --------------------------------------- */}
            <CommonWithOutFlex set={setOpen} toggle={open}>
                <animated.div
                    style={{
                        lineHeight: '40px',
                        textAlign: 'center',
                        height: 40,
                        backgroundColor: 'azure',
                        border: '1px solid darkslategrey',
                        borderRadius: 8,
                        cursor: 'pointer',
                        ...props3,
                    }}
                    onClick={() => setOpen((open) => !open)}
                >
                    {props3.width.to((x) => x.toFixed(0))}
                </animated.div>
                直接點擊40也會觸發動畫，會將div變寬
            </CommonWithOutFlex>


            {/* --------------------------------------- */}
            <CommonWithOutFlex set={setToggle4} toggle={toggle4}>
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...props4
                    }}
                >
                </animated.div>
                來回移動的動畫
            </CommonWithOutFlex>

        </div>

    );
};

// function ParentComponent() {
//     const [props4, api4] = useSpring(() => ({ from: { opacity: 1 }, to: { opacity: 0.5 } }), []);

//     return (
//         <>
//             <animated.div style={props4}>Hello World</animated.div>
//             <ChildComponent api={api4} />
//         </>
//     );
// }

// interface ChildProps {
//     api: any;
// }

// function ChildComponent({ api }: ChildProps) {
//     console.log(api);
//     return (
//         <>
//             <button onClick={() => api.start()}>Start animation</button>
//         </>
//     );
// }