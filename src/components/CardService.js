import Button from './Button';
import { fetchData } from "../apiConnection/apiService";
import { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Aos from 'aos';
function ServiceCard() {
  const [animated, setAnimate] = useState(1000);
  const [servicedata, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalBackgroundImage, setModalBackgroundImage] = useState('');

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/services'); // Replace '/data' with the API endpoint you want to fetch
        setData(responseService);
        setLoading(false);
        //Aos.init({duration: 1700});
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, []);

  const onOpenModal = (service) => {
    setSelectedService(service);
    setModalBackgroundImage(service.src_img ? `${process.env.imgpath}/service/${service.src_img}` : '');
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };
//console.log(servicedata);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>

  <div>
      <Modal open={openModal} onClose={onCloseModal} center classNames="w-100" styles={{
    modal: {
      backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(${modalBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
  }}>
          {selectedService && (
            <>
              <h2>{selectedService.src_title}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedService.s_desc }}></div>
            </>
          )}
        </Modal>
    </div>

  {servicedata.map((item, index) => (    
     <div key={index} className='col-lg-3 col-md-6 col-sm-12 cust-responsive col-12'>
        <div className='card-service' data-aos="fade-up" data-aos-duration={1000*(index+1)}> 
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              {item.src_img?<img src={item.src_img?`${process.env.imgpath}/service/${item.src_img}`:''} alt={item.src_title}/>:''}
                {/* <a href={item.ser_btn_txt}>{item.ser_btn_label} <img src="assets/images/refresh.png" className='w-auto'/></a> */}
                <div className='flip-front-card-contents'>
                <h3>{item.src_title}</h3>

                <div dangerouslySetInnerHTML={{ __html: item.src_des.length > 55 ? item.src_des.substring(0, 55) : item.src_des }}>

                </div>
               
                </div>
              </div>

              <div className="flip-card-back">
      <h4>{item.src_title}</h4>
      <div dangerouslySetInnerHTML={{ __html: item.src_des }}></div>
<a  href="#" className="main-btn border-6 cc-button cc-transbutton text-decoration-none" onClick={() => onOpenModal(item)}>{item.ser_btn_label}
    <svg width="18px" height="18px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-212.000000, -159.000000)" fill="#fff" fillRule="nonzero">
            <g id="square-filled" transform="translate(50.000000, 120.000000)">
                <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow">
                </path>
            </g>
        </g>
    </g>
</svg></a>

    </div>
              </div>
          </div>
        </div>
      </div>
       ))}



    </>
  )
}

export default ServiceCard;