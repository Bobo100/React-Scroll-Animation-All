import react from 'react';
import { UseSpring } from '../components/useSpring';
import { UseSprings } from '../components/useSprings';
import { UseTransition, MyComponent } from '../components/useTransition';
import { UseScroll, MyComponent2, UseScrollView, MouseScrollY } from '../components/useScroll';
import OfficeFunction from '../components/useScroll_official';
import "./css/Home.css"
// import { FirstComponent } from '../components/pratice test/FirstTest';
// import { SecondComponent } from '../components/pratice test/SecondTest';
// import { ThirdComponent } from '../components/pratice test/ThirdTest';

export const Home = () => {
    return (
        <div className='Home'>
            <h1>Home</h1>
            <UseSpring />
            <UseSprings />
            <UseTransition />
            <MyComponent />
            <UseScroll />
            <MyComponent2 />
            <UseScrollView />
            <MouseScrollY />


            <OfficeFunction />
        </div>
        // <OfficeFunction />

    );
};
