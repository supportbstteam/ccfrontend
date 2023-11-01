"use client"
import InputField from "./Forms/InputField";
import ContactDetails from "./GeneralDetails/ContactDetails";
import SocialProfile from "./GeneralDetails/SocialProfile";
function footer(){

//     const [footerdata, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchDataFromAPI() {
//       try {
//         const responsefooter = await fetchData('/footer'); // Replace '/data' with the API endpoint you want to fetch
//         setData(responsefooter);
//         setLoading(false);
//         Aos.init({duration: 1700});
//         console.log(responsefooter);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }

//     fetchDataFromAPI();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

return(
    <footer>
        <div className="container">
        <div className="row mb-4">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
               <img src="assets/images/footer_logo.png" className="footer-logo" alt="Charge construct power on"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-7 footer-col">
                <h3>Insights & Neuigkeiten</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-5 footer-col contact-details">
                <h3>Kontakt</h3>
                <ContactDetails/>
                {/* <ul>
                <li><a href="tel:+4984149399122">ST-541, Sky Tower In West</a></li>
                    <li><a href="mailto:info@chargeconstruct.de">info@chargeconstruct.de</a></li>
                    <li><a href="tel:+4984149399122">+49 841 49399122</a></li>
                </ul> */}
                 </div>
        </div>

        <div className="row mb-4">
        <div className="col-lg-4 col-md-6 col-sm-7 col-12 footer-col">
            <h5>Socials</h5>
            <SocialProfile/>
        </div>

        <div className="col-lg-5 col-md-5 col-sm-5 col-12 footer-col">
            <h5>Newsletter</h5>
            <form className="draht-forms newsletter-form row"> 
            <div className='col-lg-6 col-md-12 col-12'>
            
      <InputField
        label=""
        type="text"
        placeholder="Ihr Name *"
        required="true"
        minLength={5}
        maxLength={20}
        id="newsletter_form_name"
      />
      
            </div>
            <div className='col-lg-6 col-md-12 col-12'>
            <InputField
        label=""
        type="email"
        placeholder="Email Adresse *"
        required="true"
        minLength={5}
        maxLength={20}
        id="newsletter_form_mail"
      />
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 form-fields check-fields">
                <input placeholder="" id="acceptcondition" type="checkbox" value=""/>
                <label htmlFor="acceptcondition">Ich kenne die Datenschutzrichtlinien und bin. *</label>
            </div>
            </form>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-12 footer-col">
            <h5>Menu</h5>
            <div className="footer-menu">
            <ul className="col-foot-1">
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Referenzen</a></li>
                <li><a href="#">Newsroom</a></li>
            </ul>
            <ul className="col-foot-2">
                <li><a href="#">Über Uns</a></li>
                <li><a href="#">Karriere</a></li>
                <li><a href="#">Karriere</a></li>
            </ul>
            </div>
        </div>
        </div>

        <div className="row last-footer">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
            <h5>INFO</h5>
            <div className="footer-menu">
            <ul className="info-menu">
                <li><a href="#">Impressum </a></li>
                <li><a href="#">Datenschutz</a></li>
            </ul>

            <ul className="info-menu">
                <li><a href="#">AGB</a></li>
                <li><a href="#">Cookies verwalten</a></li>
            </ul>
            </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 footer-review">
            <ul className="footer-awards">
                <li><img src='../../assets/images/bem.png'/></li>
                <li><img src='../../assets/images/grow.png'/></li>
            </ul>
            <div className="gloabl_rating">
            <ul>
                <li><img src='../../assets/images/star.png'/></li>
                <li><img src='../../assets/images/star.png'/></li>
                <li><img src='../../assets/images/star.png'/></li>
                <li><img src='../../assets/images/star.png'/></li>
                <li><img src='../../assets/images/star.png'/></li>
                <li><span><a href="">1000 Bewertungen auf ProvenExpert.com</a></span></li>
            </ul>
            <p className="copyright_txt">© 2023 Charge Construct GmbH</p>
            </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12"></div>
        </div>
        </div>
    </footer>
)
}

export default footer;