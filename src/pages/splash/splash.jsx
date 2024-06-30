import './splash.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

export const Splash = () => {
    gsap.registerPlugin(useGSAP);
    const isMobile = () => window.innerWidth <= 768;

    useGSAP(()=>{
        gsap.fromTo("#splashH",
            { opacity: 0 }, 
            {
              opacity:1, 
              duration: isMobile()?3:1.6,
              ease: 'power2.in',
              repeat: !isMobile() && -1,
              yoyo: !isMobile() && true 
            }
          );
    })

    

    return (
        <section id="splash">
            <main>
                <img />
                <h2 id='splashH'>
                    Fikayo Adele
                </h2>
            </main>
        </section>
    )
}