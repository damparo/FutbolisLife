import React from 'react';
import { add } from 'date-fns';
import BannerText from '../BannerText/BannerText';
import Timer from '../Timer/Timer';
// import './WorldCupboard.css';


const futureDate = add(new Date(), {

    years: 0,
    months: 9,
    days: 35,

});

function WorldCupboard() {
    return (
        <div>
            <BannerText/>
            <Timer futureDate={futureDate}/>
        </div>
    )
}

export default WorldCupboard;