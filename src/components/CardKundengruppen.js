import Button from "./Button";
import { fetchData } from "@/apiConnection/apiService";
import { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
function KundengruppenCard(){
  const [animated, setAnimate] = useState(1000);
    const [kundengruppendata, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalBackgroundImage, setModalBackgroundImage] = useState('');
    useEffect(() => {
        async function fetchDataFromAPI() {
          try {
            const responseService = await fetchData('/customerGroup'); // Replace '/data' with the API endpoint you want to fetch
            setData(responseService);
            setLoading(false);
           // Aos.init({duration: 1700});
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
    
        fetchDataFromAPI();
      }, []);
    
      const onOpenModal = (service) => {
        setSelectedService(service);
        setModalBackgroundImage(service.image ? `${process.env.imgpath}/customerGroup/${service.image}` : '');
        setOpenModal(true);
      };
    
      const onCloseModal = () => {
        setOpenModal(false);
        setSelectedService(null);
      };

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


    return(
        <> 

<CustomModal
          show={openModal}
          onClose={onCloseModal}
          backgroundImage={modalBackgroundImage}
        >
          {selectedService && (
            <>
              <h2>{selectedService.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: selectedService.description }}></div>
            </>
          )}
        </CustomModal>

      
        {kundengruppendata.map((item, index) => (
 <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12 ' data-aos="fade-up"
 data-aos-anchor-placement="top-bottom" data-aos-duration={1000*(index+1)}>
  <div className="kundengrup-card">
  <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              {item.image?<img src={item.image?`${process.env.imgpath}/customerGroup/${item.image}`:''} alt={item.title}/>:''}
                <div className='flip-front-card-contents'>
                {item.title?<h3>{item.title}</h3>:''}
                {/* <p>{item.src_des}</p> */}
                </div>
              </div>

              <div className="flip-card-back">
              {item.title?<h4>{item.title}</h4>:''}
              <div dangerouslySetInnerHTML={{ __html: item.s_description }}></div>

      <button className="main-btn border-6 cc-button cc-transbutton text-decoration-none" onClick={() => onOpenModal(item)}>{item.button}
    <svg width="18px" height="18px" viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-212.000000, -159.000000)" fill="#fff" fillRule="nonzero">
            <g id="square-filled" transform="translate(50.000000, 120.000000)">
                <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow">
                </path>
            </g>
        </g>
    </g>
</svg></button>
    </div>
              </div>
          </div>
  </div>
    </div>
        ))}
        </>
    )

}
export default KundengruppenCard;