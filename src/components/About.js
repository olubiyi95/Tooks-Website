import React from 'react';
import image1 from '../assets/about1.png';
import image2 from '../assets/about2.png';
import image3 from '../assets/about3.jpeg';
import image4 from '../assets/about4.jpeg';
import image5 from '../assets/about5.png';
import image6 from '../assets/about6.jpeg';
import image7 from '../assets/about7.jpeg';
import image8 from '../assets/about8.jpeg';
import image9 from '../assets/about9.jpeg';
import image10 from '../assets/about10.jpeg';
import image11 from '../assets/about11.jpeg';
import image12 from '../assets/about12.jpeg';
import image13 from '../assets/about13.jpeg';
import image14 from '../assets/about14.jpeg';
import imageb from '../assets/indeed.svg';


const items = [
    {image:image1, imageb:imageb, name: "Mark Goldberg", role:"Co-Founder and CEO"},
    {image:image2, imageb:imageb, name: "Steven Segel", role:"Co-Founder and COO"},
    {image:image3, imageb:imageb, name: "Owen White", role:"Co-Founder and CTO"},
    {image:image4, imageb:imageb, name: "Beck Peters", role:"Head of Engineering and R&D"},
    {image:image5, imageb:imageb, name: "Kai Spassov", role:"iOS Team Lead"},
    {image:image6, imageb:imageb, name: "James White", role:"Backend Team Lead"},
    {image:image7, imageb:imageb, name: "Eli Serrano", role:"Android Team Lead"},
    {image:image8, imageb:imageb, name: "Jaini Godri", role:"UI/UX Designer"}
]

const items2 = [
{image:image9, imageb:imageb, name:"Michael Hackel", role:"Complex Business Models and Platforms", text:"DiningIn.com (Founder & CEO)", text1:"Liquidity event from GrubHub/Seamless", text2:"Young President Organization (Chairman)"},
{image:image10, imageb:imageb, name:"Adam Kanner", role:"B2B2CMaeketplaces and Growth Capital", text:"ScoreBig (Founder & CEO)", text1:"Raised over $100M in equity capital", text2:"NBA (Fmr. VP, Biz Dev)"},
{image:image11, imageb:imageb, name:"Blake Indusky", role:"Labels and Artists Relations", text:"LiveXLive (Chief Business Officer & EVP)", text1:"Sony Music (Fmr. VP, Biz Dev)", text2:"Viacom (Fmr. Executive Consultant)"},
{image:image12, imageb:imageb, name:"Phil Wierzbinski", role:"Monetization and Growth Strategy", text:"Pandora (VP, Audience Extension Strategy)", text1:"Sirius XM (VP, Audience Extension Strategy)", text2:"Quantcast (Fmr. Director, Marketer Dev)"},
{image:image13, imageb:imageb, name:"Mike Bebel", role:"Labels and Artists Relations" , text:"LiveXLive (EVP, Corporate Development)", text1:"MixRadio (Fmr. COO)", text2:"Napster (Fmr. President & COO)"},
{image:image14, imageb:imageb, name:"Seth Schachner",role:"Music Distribution and International Growth",  text:"Strat Americas (Managing Director)", text1:"Smule (Americas Partnership)", text2:"Microsoft (Fmr. Director, Biz Dev)"}
]


const About = () => {
  return (
    <div className='about'>
        <div className="container-fluid ">
            <div className="row">
                <div className=" col-sm-12 col-md-12 col-lg-7 col-xl-7 flex-row-reverse flex-md-reverse">
                    <div className='about-firstcard'>
                        
                    </div>
                </div>
                <div className=" col-sm-12 col-md-12 col-lg-5">
                    <div className='about-secondcard'>
                        <h3>HOW IT STARTED</h3>
                        <h1>Our Story</h1>
                        <p className='pt-3'>Finding good new music is hard. Gen-Z's and Millennials live busy lives and want a quick and entertaining way to find & share new music with friends.</p>
                        <p className='pt-3'>Over the years of listening to their favorite artists and struggling to find a social-music experience, Max Goldberg and Steven Segel created HotDrop as Juniors at Indiana University. Within 2 weeks of launch, HotDrop helped users discover 1 million new songs.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='about-two'>
                <h3>Our Team</h3>
                <h1>We have climbed a long way, and the journey is just getting started.</h1>
            </div>
            <div className='about-cards'>
            <div className="container text-center">
                <div className="row">
                {items.map((item => {
                   return <div className="col-sm-12 col-md-6 col-lg-4 gap-0">
                      <div className=' aboutcard'>
                    <img className='aboutcard-image1' src={item.image}></img>
                    <div className='aboutcard-inner'>
                        <img className='aboutcard-inner-image' src={item.imageb}></img>
                        <div>
                            <h6>{item.name}</h6>
                            <p>{item.role}</p>
                        </div>
                    </div>
                </div>
                </div>
                }))}
                    </div>
                </div>
            </div>

            <div className='container'>
            <div className='about-two2'>
                <h3>Board</h3>
                <h1>Advised by experts</h1>
                <p className=''>Our advisory board is filled with music enthusiasts who share our vision for building disruptive mobile platforms. Combined, they have over 150 years of start-up and music-industry experience.</p>
                <p>If you are interested in HotDrop and would like to learn more about investment opportunities, please contact us at invest@hotdropapp.com.</p>
            </div>
            <div className='about-cards2'>
            <div className="container text-center">
                <div className="row">
                {items2.map((item2 => {
                   return <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 gap-0">
                      <div className=' aboutcard2'>
                    <img className='aboutcard-image2' src={item2.image}></img>
                    <div className='aboutcard-inner2'>
                        <img className='aboutcard-inner-image2' src={item2.imageb}></img>
                        <div>
                            <h6>{item2.name}</h6>
                            <p>{item2.role}</p>
                        </div>
                    </div>
                    <p className='aboutcard-inner-text'>{item2.text}</p>
                    <p className='aboutcard-inner-text'>{item2.text1}</p>
                    <p className='aboutcard-inner-text'>{item2.text2}</p>
                </div>
                </div>
                }))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About