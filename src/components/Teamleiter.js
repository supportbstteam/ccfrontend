import Aos from 'aos';
function TeamLeiter(){
    const teams = [
      {
        id: 1,
        name: 'Natalie-Betsi Keusch',
        founder_img : "team-1.png",
        profession: "Head Finance & Controlling",
        linkedin_profile: "#"
      },
      {
        id: 2,
        name: 'Stefan Lohmeier',
        founder_img : "team-2.png",
        profession: "Head Sales",
        linkedin_profile: "#"
    },
    {
        id: 3,
        name: 'Marcel Zach',
        founder_img : "team-3.png",
        profession: "Head Charge Point Operations",
        linkedin_profile: "#"
    },
    {
        id: 4,
        name: 'Marcel Zach',
        founder_img : "team-4.png",
        profession: "Head Charge Point Operations",
        linkedin_profile: "#"
    },
    {
        id: 5,
        name: 'Nina Fassl',
        founder_img : "team-5.png",
        profession: "Head of Marketing",
        linkedin_profile: "#"
    },
    {
        id: 6,
        name: 'Alexander Hötzel',
        founder_img : "team-6.png",
        profession: "Head Human Relations",
        linkedin_profile: "#"
    },
    {
        id: 7,
        name: 'Michael Hagn',
        founder_img : "team-7.png",
        profession: "Head Construction",
        linkedin_profile: "#"
    },
    {
        id: 8,
        name: 'Martin Hörmann',
        founder_img : "team-8.png",
        profession: "Head Planung und Kalkulation",
        linkedin_profile: "#"
    },
    {
        id: 9,
        name: 'Philipp Knöferl',
        founder_img : "team-9.png",
        profession: "Head Installation",
        linkedin_profile: "#"
    },
    {
        id: 10,
        name: 'Christoph Dietze',
        founder_img : "team-10.png",
        profession: "Head Einkauf",
        linkedin_profile: "#"
    }
    ];

    const board = [
        {
          id: 1,
          name: 'Wulf Schlachter',
          founder_img : "board-1.png",
          profession: "E-Mobility Experte",
          linkedin_profile: "#"
        },
        {
            id: 2,
            name: 'Hans Pütz',
            founder_img : "board-2.png",
            profession: "Unternehmer",
            linkedin_profile: "#"
        },
        {
            id: 3,
            name: 'Hans-Jürgen Sauer',
            founder_img : "board-3.png",
            profession: "Unternehmer",
            linkedin_profile: "#"
        },
        {
            id: 4,
            name: 'Prof. Dr. Georg Schweiger',
            founder_img : "board-4.png",
            profession: "Professor E-Mobilität",
            linkedin_profile: "#"
        },
        {
            id: 5,
            name: 'Kurt Sigl    ',
            founder_img : "board-5.png",
            profession: "Präsident BEM",
            linkedin_profile: "#"
        },
    ];

    return(
        <div className='container teams-boards-member'>
            <div className='row'>
            <h3 className='text-dark'>Teamleiter</h3>
                {teams.map((tab, i) =>
                 <div className='col-lg-3 col-md-4 col-12 text-vs-center mb-5 px-0 member-col' data-aos="fade-up" data-aos-duration={1000*(i+2)} key={i}>
        <img src={`../../assets/images/pages/`+tab.founder_img} className='img-fluid border-6 mb-3'/>
                    <h5><a href={tab.linkedin_profile}>{tab.name}</a></h5>
                    <h6>{tab.profession}</h6>
                    {/* <span class="follow_linked"><a href={tab.linkedin_profile}><img src="../../assets/images/linkedin.png" className='img-fluid'/></a></span> */}
                    </div>
                )}
                
            </div>

            <div className='row'>
            <h3 className='text-dark'>Advisory Board</h3>
                {board.map((tab, i) =>
                 <div className='col-lg-3 col-md-4 col-12 text-vs-center mb-5 px-0 member-col' data-aos="fade-up" data-aos-duration={1300*(i+2)} key={i}>
        <img src={`../../assets/images/pages/`+tab.founder_img} className='img-fluid border-6 mb-3'/>
                    <h5><a href={tab.linkedin_profile}>{tab.name}</a></h5>
                    <h6>{tab.profession}</h6>
                    {/* <span class="follow_linked"><a href={tab.linkedin_profile}><img src="../../assets/images/linkedin.png" className='img-fluid'/></a></span> */}
                    </div>
                )}
                
            </div>

            </div>
    )
}

export default TeamLeiter;