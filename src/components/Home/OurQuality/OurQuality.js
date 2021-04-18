import React from 'react';
import Quality from '../Quality/Quality';

const OurQuality = () => {
    const quality = [
        {title: '250+ Channels',icon:<i className="fal fa-tv mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>    },
        {title: 'Speed Seamless',icon: <i className="fal fa-rocket mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>},
        {title: 'Free Installation',icon: <i className="fal fa-server mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>},
        {title: '4K & 8K Quality',icon: <i className="fab fa-chromecast mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>},
        {title: 'Flexible Tariff Plans',icon: <i class="fal fa-wallet mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>},
        {title: 'Fast Support 24/7',icon: <i className="fal fa-headset mb-3" style={{fontSize:'40px',color:'#339AF0'}}></i>},
    ]
    return (
        <section className="py-4" style={{borderBottom:'1px solid #efefef'}}>
          <div className="container">
              <div className="row gx-0 gy-4">
                {
                 quality.map((quality,index) => <Quality key={index} quality={quality}></Quality>)   
                }      
            </div>
            </div>  
        </section>
    );
};

export default OurQuality;