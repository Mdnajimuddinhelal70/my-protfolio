import myImg from '../../assets/my-pic/najim.jpg';
import './HomeBanner.css';
const HomeBanner = () => {
    return (
        <>
           <div id='home' className="container home">
            <div className="left">
            <h1 className="text-5xl font-bold"><span className='my-name1'>
            Hello, I'm
                </span> <span className='my-name'>Najim Uddin</span></h1>
            <p className="text-xl mt-4 font-bold my-namep">As a Junior MERN Stack Web Developer (MongoDB, Express.js, React, Node.js), I have the ability to create functional and operational websites.</p>
            </div>
            <div className="right">
             <div className="img">
                <img className='w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-500' src={myImg} alt="" />
             </div>
            </div>
           </div> 
        </>
    );
};

export default HomeBanner;