import { useState,useEffect } from "react";
import Aos from "aos";
//IMAGE ARRAY
const images = [
  {
    id: 1,
    title: '-',
    img : "../assets/images/career/career-1.png",
    alt_txt: "Charge Construct gallery"
  },
  {
    id: 2,
    title: '-',
    img: '../assets/images/career/career-2.png',
    alt_txt: "Charge Construct gallery"
},
{
  id: 3,
  title: '-',
  img : "../assets/images/career/career-3.png",
  alt_txt: "Charge Construct gallery"
},
{
  id: 4,
  title: '-',
  img: '../assets/images/career/career-4.png',
  alt_txt: "Charge Construct gallery"
},
{
  id: 5,
  title: '-',
  img : "../assets/images/career/career-5.png",
  alt_txt: "Charge Construct gallery"
},
{
  id: 6,
  title: '-',
  img: '../assets/images/career/career-6.png',
  alt_txt: "Charge Construct gallery"
},
{
  id: 7,
  title: '-',
  img: '../assets/images/career/career-7.png',
  alt_txt: "Charge Construct gallery"
},
{
  id: 8,
  title: '-',
  img: '../assets/images/career/career-8.png',
  alt_txt: "Charge Construct gallery"
},
// {
//   id: 9,
//   title: '-',
//   img: '../assets/images/career/career-9.png',
//   alt_txt: "Charge Construct gallery"
// },
// {
//   id: 10,
//   title: '-',
//   img: '../assets/images/career/career-10.png',
//   alt_txt: "Charge Construct gallery"
// },
];


function ImageGallery() {

  useEffect(()=>{
    Aos.init();
},[])

    const [imageToShow, setImageToShow] = useState("");
    const [imageIndex,setImageIndex] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
    //looping through our images array to create img elements
    const imageCards = images.map((data,i) => (
      <img className="image-card col-lg-3 col-md-3 col-sm-6 col-6 mb-4" data-aos="zoom-in" data-aos-duration={1000*(i+1)} key={i} onClick={() => showImage(i)} src={data.img} />
    ));
  
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (index) => {
      setImageIndex(index);
      setImageToShow(images[index].img);
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
      if (imageIndex >= images.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = images[imageIndex + 1];
        setImageIndex(imageIndex+1);
        setImageToShow(nextImage.img);
      }
    };
  
    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
     // let currentIndex = images.indexOf(imageToShow);
      if (imageIndex  <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = images[imageIndex  - 1];
        setImageIndex(imageIndex-1);
        setImageToShow(nextImage.img);
      }
    };
    
  
    return (
      <>
        <div className="row">{imageCards}</div>
        {
          lightboxDisplay ? 
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow} className="img-fluid"/>
            <button onClick={showNext}>⭢</button>
          </div>
         : ""
        }
      </>
    );
  }

export default ImageGallery;