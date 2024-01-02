import { useState,useEffect } from "react";
import { fetchData } from "../apiConnection/apiService";
import Aos from "aos";
//IMAGE ARRAY

function ImageGallery() {

  const [GalleryView, setGalleryView] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseService = await fetchData('/gallery-details');
        setGalleryView(responseService);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    }
    fetchDataFromAPI();
  }, []);

  useEffect(()=>{
    Aos.init();
},[])

    const [imageToShow, setImageToShow] = useState("");
    const [imageIndex,setImageIndex] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
    //looping through our GalleryView array to create img elements
    const imageCards = GalleryView?GalleryView.map((data,i) => (
      <img className="image-card col-lg-3 col-md-3 col-sm-6 col-6 mb-4" data-aos="zoom-in" data-aos-duration={1000*(i+1)} key={i} onClick={() => showImage(i)} src={`${process.env.imgpath}/gallery/${data.image}`} alt="Charge Construct Gallery"/>
    )):'';
  
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (index) => {
      setImageIndex(index);
      setImageToShow(GalleryView[index].image);
      console.log(GalleryView[index].image);
      setLightBoxDisplay(true);
    };
  
    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };
  
    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      // let currentIndex = setImageIndex(index);;
      // console.log(currentIndex);
      if (imageIndex >= GalleryView.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = GalleryView[imageIndex + 1];
        setImageIndex(imageIndex+1);
        setImageToShow(nextImage.image);
      }
    };
  
    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
     // let currentIndex = GalleryView.indexOf(imageToShow);
      if (imageIndex  <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = GalleryView[imageIndex  - 1];
        setImageIndex(imageIndex-1);
        setImageToShow(nextImage.image);
      }
    };
    
  
    return (
      <>
        <div className="row position-relative">
          {
          lightboxDisplay ? 
          <div id="lightbox" onClick={hideLightBox}>
            <div className="popuplight-box">
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={`${process.env.imgpath}/gallery/${imageToShow}`} className="img-fluid" alt="Charge Construct Gallery"/>
            <button onClick={showNext}>⭢</button>
            </div>
          </div>
         : ""
        }
        {imageCards}
          </div>
       
      </>
    );
  }

export default ImageGallery;