
import './index.css'

const ServiceItem = ({serviceItem}) => {
    return(
        <li className="service-item">
            <img src={serviceItem.imageUrl} alt='service'/>
            <div className='service-text-container'>
                <h4>
                    {serviceItem.title}
                </h4>
                <p>
                    {serviceItem.description}
                </p>
            </div>
        </li>
    
    )
}

export default ServiceItem