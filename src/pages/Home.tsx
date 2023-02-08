import react from 'react';
import { FirstComponent } from '../components/FirstTest';
import { SecondComponent } from '../components/SecondTest';
import { ThirdComponent } from '../components/ThirdTest';

export const Home = () => {
    return (
        <div className='container'>
            {/* <h1>Home</h1> */}
            {/* <FirstComponent /> */}
            {/* <SecondComponent /> */}
            <ThirdComponent />
        </div>
    );
};
