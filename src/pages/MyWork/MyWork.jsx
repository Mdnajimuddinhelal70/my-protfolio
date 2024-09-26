import React from 'react';
import './MyWork.css'
import mywork_data from '../../../public/my-work.json'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
        </div>
    );
};

export default MyWork;