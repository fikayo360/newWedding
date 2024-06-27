import './splash.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

export const Splash = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        gsap.fromTo("#splashH",
            { opacity: 0 }, 
            {
              opacity:1, 
              duration: 1.6,
              ease: 'power2.in',
              repeat: -1,
              yoyo: true 
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