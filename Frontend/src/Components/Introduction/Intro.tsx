import './intro.scss'
import Image from '../../Assets/Introduction/test1.png'
import React from 'react';

export default function Intro(){
    return(
    
        <div className='Intro'>
            <div className='IntroHead'>
                    <div className="shape">
                        <h1>
                            <span>WHAT IS HACKAHOLICS 6.0?</span>
                        </h1>
                    </div>
            </div>
                <div className="text">
                        
                            <p>texttexttexttexttexttexttexttexttexttext<br/>
                               exttexttexttexttexttexttexttexttexttextt<br/>
                               texttexttexttexttexttexttexttexttexttext<br/>
                               texttexttexttexttexttexttexttexttexttext
                            </p>
                        
                </div>
            <div className='Image'>
                <img src={Image} alt="Hackaholics 6.0 Introduction" className='test'/>
            </div>
        </div>
    
    );
}


        