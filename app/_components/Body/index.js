"use client";

import { useEffect, useState } from 'react'
import './index.css'
import ServicesDataList from '@/app/servicesData/ServicesData';
import ServiceItem from '../ServiceItem';

const Body = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prevToggle => !prevToggle);
        }, 3000);

        return () => clearInterval(interval);    
    });

    const imageUrl = toggle ? 
        "https://res.cloudinary.com/dhoeemazz/image/upload/v1727809955/joytrs-home-3_kb9bwx.jpg" :
        "https://res.cloudinary.com/dhoeemazz/image/upload/v1727809964/slider-1-1_dapohj.png"

    return(
        <div className='body-section-container'>
            <div className='body-main-container' >
                <div className='body-container'>
                    <div className='greating-container'>
                        <h3>WELCOME TO JOYRTS</h3>
                        <h1> We Make <em className='span1'>Digital Ideas</em> & <em className='span2'>SEO</em> Marketing </h1>
                        <p>Our team of experts has years of experience in the digital space and a deep understanding of the latest technologies and best practices. </p>
                    </div>
                    <div className='carousel-image-container'>
                        <img src={imageUrl} alt="carousel" />
                    </div>
                </div>
            </div>
            <div className='about-section-container' id='AboutSection'>
                <div className='about-main-container'>
                    <img className='about-image' src='https://res.cloudinary.com/dhoeemazz/image/upload/v1727894333/services-left-image_rfuh9c.jpg' alt='about' />
                    <div className='about-container'>
                        <h4>Welcome to Joyrts</h4>
                        <h1>About Us</h1>
                        <p>Joyrts is a full-service digital solutions provider that helps businesses grow and succeed in today's fast-paced and constantly evolving digital landscape. With a commitment to quality, integrity, and excellence, we deliver innovative and effective digital marketing, web designing, application development, application support, and cloud hosting services that empower our clients to reach their full potential.</p>
                        <p>Our team of experts has years of experience in the digital space and a deep understanding of the latest technologies and best practices. Whether you need help with your online presence, application development, or cloud hosting, we have the expertise and resources to help you succeed.</p>
                        <p>At Joyrts , we believe that technology is the only tool for progress, and we are dedicated to helping our clients harness its power to drive their success. We are passionate about delivering results that exceed expectations and creating long-lasting partnerships with our clients.</p>
                    </div>
                </div>
            </div>
            <div className='our-services-section-container' id='ServiceSection'>
                <h1>Our Services</h1>
                <p>Joyrts offers a comprehensive range of digital solutions to help businesses grow and succeed. Our services include:</p>
                <div className='service-main-conatiner'>
                    <ul className='service-items-conatiner'>
                        {ServicesDataList. map(eachService => (
                            <ServiceItem key={eachService.id} serviceItem={eachService} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Body