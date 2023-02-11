import react from 'react';
import { UseSpring } from '../components/pratice test/useSpring';
import { UseSprings } from '../components/pratice test/useSprings';
// import { FirstComponent } from '../components/pratice test/FirstTest';
// import { SecondComponent } from '../components/pratice test/SecondTest';
// import { ThirdComponent } from '../components/pratice test/ThirdTest';

export const Home = () => {
    return (
        <div className='Home'>
            <h1>Home</h1>
            <UseSpring />
            {/* <UseSprings /> */}
        </div>
    );
};
