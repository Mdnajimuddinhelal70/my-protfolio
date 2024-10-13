import './Services.css'
import services_data from '../../../public/services.json'


const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="service-title">
                <h1>~~My Services~~</h1>
            </div>
            <div className="services-container">
            {services_data.map((service, index) => {
                return <div key={index} className='services-format'>
                  <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                </div>
            })}
            </div>
        </div>
    );
};

export default Services;