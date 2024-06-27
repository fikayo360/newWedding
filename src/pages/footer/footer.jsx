import './footer.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
    const { ref, inView } = useInView({threshold:0.1});
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        gsap.fromTo(".upp",
            { y: 0 },
            {
              y: -7, 
              duration: 0.8,
              ease: "bounce",
              repeat: -1, 
              yoyo: true 
            }
          );
    })

    useGSAP(()=>{
        gsap.from(".fT",{
            y:'-80',
            duration:2,
            ease:'power1.in'
        });
    },[inView])
   

    return(
        <section id='footer'>
            <header>
                <div id='hW'>
                <h1>want to work together on your project? </h1>
                <div id='hb'>
                    <textarea name="" id="" placeholder='send a message'></textarea>
                    <div id='hbic'>
                        <div className='cover'></div>
                        <img src='./right-arrow.png'/>
                    </div>
                </div>
                </div>
            </header>

            <main>
                <div id='mwrap'>
                    <div className='mwrapi'>
                        <h1>useful links</h1>
                    </div>

                    <div  className='mwrapi'>
                        <h1>contact</h1>
                        <p>
                            you can find our office address @ 27, glourious hope avenue mobalaji thomas roundabout off iyana ejigbo close agric,Ikorodu lagos state nigeria
                        </p>
                    </div>

                    <div  className='mwrapi'>
                        <h1>sitemap</h1>
                        <ul>
                            <li><a href='#hero'>Home</a></li>
                            <li><a href='#about'>about</a></li>
                            <li><a href='#reviews'>testimonials</a></li>
                            <li><a href='#works'>works</a></li>
                            <li><a href='#services'>services</a></li>
                        </ul>
                    </div>

                    <div  className='mwrapi'>
                        <h1>follow us</h1>
                        <ul>
                            <li><a href="">instagram</a></li>
                            <li><a href="">facebook</a></li>
                            <li><a href="">linkedin</a></li>
                            <li><a href="">pintrest</a></li>
                            <li><a href="">dribble</a></li>
                        </ul>
                    </div>

                </div>

                <div id='mfb'>
                    <h1 className='fT' ref={ref}>Fikayo Adele </h1>
                    <div id='mfbL'>
                        <p>All rights reserved 2024</p>
                        <div id='lr'>
                            <span><a href='#hero'>back to top</a></span>
                            <div id='lrb'><img className='upp' src='./upp.png' /></div>
                        </div>
                    </div>
                </div>
            </main>
            
        </section>
    )
}