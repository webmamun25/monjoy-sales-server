
import React from 'react';
import advice from '../../images/advice.jpg'
import Menubar from '../../Shared/Menubar';
const Advice = () => {
    return (
        <>
        <Menubar></Menubar>
        <div style={{width:"400px",height:"500px",margin:"0 auto" ,marginTop:"30px"}}>
            <img style={{width:"inherit"}} src={advice} alt="" />
            <div>
            <h1> CYCLING IMPROVES MENTAL WELL-BEING</h1>
     <p> A study by the YMCA showed that people who had a physically active lifestyle had a wellbeing score 32 per cent higher than inactive individuals.
     There are so many ways that exercise can boost your mood: there's the basic release of adrenalin and endorphins, and the improved confidence that comes from achieving new things (such as completing a sportive or getting closer to that goal).

Cycling combines physical exercise with being outdoors and exploring new views. You can ride solo - giving you time to process worries or concerns, or you can ride with a group which broadens your social circle.

Former Hour Record holder Graeme Obree has suffered from depression through much of his life, and told us: “Getting out and riding will help [people suffering with depression]... Without cycling, I don’t know where I would be."
     
     
     
     
     </p>

            </div>
        </div>
        </>
    );
};

export default Advice;