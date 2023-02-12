import React from 'react';

interface Props {
    children: React.ReactNode
    set: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean
}

/**
 * 有flex的Common
 * @param param0 傳遞{React.ReactNode}
 * @param set 傳遞{React.Dispatch<React.SetStateAction<boolean>>}
 * @returns 
 */
export const Common: React.FC<Props> = ({ children, set }) => (
    <div className="container">
        <div className="flex">
            {children}
        </div>
        <button onClick={() => set((toggle) => !toggle)}>點我重新看動畫</button>
    </div>
);

/**
 * 沒有flex的Common (不同於Common)
 * @param children 傳遞{React.ReactNode}
 * @param set 傳遞{React.Dispatch<React.SetStateAction<boolean>>}
 * @returns 
 */
export const CommonWithOutFlex: React.FC<Props> = ({ children, set }) => (
    <div className="container">
        {children}
        <button onClick={() => set((toggle) => !toggle)}>點我重新看動畫</button>
    </div>
);


export const CodeBlockBasic = ({ code }: { code: string }) => (
    <pre>
        <code className="language-javascript" >
            {code}
        </code>
    </pre>
);

// 傳遞方式稱為"props children"。
// 它允許父組件將多個元素作為子代傳遞給子組件。
// 傳遞 ReactNode 可以使用內聯 JSX，字符串，組件或其他任何 React 元素。
interface Props1 {
    children: React.ReactNode
}

export const CodeBlock: React.FC<Props1> = ({ children }) => (
    <pre>
        <code className="language-javascript" >
            {children}
        </code>
    </pre>
);

interface Props2 {
    code: string
}

export const CodeBlock2: React.FC<Props2> = ({ code }) => (
    <pre>
        <code className="language-javascript" >
            {code}
        </code>
    </pre>
);


