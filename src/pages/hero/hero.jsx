import './hero.css'
import { useState,useRef, useEffect } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const Hero =  () => {
    const { ref, inView } = useInView({threshold:0.1});
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger) 

    const navMRef = useRef(null)

    const showMobileNav = () => {
        navMRef.current.classList.add('active')
    }

    const hidMobileNav = () => {
        navMRef.current.classList.remove('active')
    }

    const [currentImage, setCurrentImage] = useState(0);
    const [images] = useState([
        './ph5.jpg',
        './ph6.jpg',
        './ph7.jpg',
    ])

    const [mimages] = useState([
        './mph4.jpg',
        './mph6.jpg',
        './mph8.jpg'
    ])

    const isMobile = () => window.innerWidth <= 768;

    const imageRef = useRef(null);

    const handleNext = () => {
        let nextIndex

        if(isMobile){
            nextIndex = (currentImage + 1) % mimages.length;
        }

        nextIndex = (currentImage + 1) % images.length;
        setCurrentImage(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, isMobile()?20000:15000);

        return () => clearInterval(interval);
    }, [currentImage]); 

    useGSAP(()=>{
        gsap.from('.mbi',{
            duration: 1,
            x: '-120%',
            stagger: 0.1, 
            ease: 'power3.inOut',
        })
    },[inView])

    useGSAP(()=>{
        gsap.from('#hHead',{
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top', 
            },
            duration: 0.5,
            y:isMobile()?'-20':'-40',
            ease:'power2.in'
        })
    },[])

    useGSAP(()=>{
        gsap.from('.main',{
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top', 
            },
            duration:0.5,
            y:isMobile()?'20':'70',
            ease:'power2.in'
        })
    },[])

    return (
        <section id='hero'
         style={{ backgroundImage: `url(${isMobile() ? mimages[currentImage] : images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center'}} ref={imageRef} 
         className=''>
            <div className='navMobile' ref={navMRef}>
            <header>
                    <div id='hWrap'>
                        <h1 >
                            manish.
                        </h1>
                        <img src='x.png' onClick={hidMobileNav}/>
                    </div>
                </header>
                
                <main id='nmain' ref={ref}>
                    <ul>
                        <li className='mbi' onClick={hidMobileNav} ><a href='#hero'>home</a></li>
                        <li className='mbi' onClick={hidMobileNav}><a href='#about'>about</a></li>
                        <li className='mbi' onClick={hidMobileNav}><a href='#services'>services</a></li>
                        <li className='mbi' onClick={hidMobileNav}><a href='#works'>works</a></li>
                        <li className='mbi' onClick={hidMobileNav}><a href='#reviews'>reviews</a></li>
                        <li className='mbi' onClick={hidMobileNav}><a href='#footer'>contact</a></li>
                    </ul>
                </main>
            </div>

            <header id='hHead'>
                <nav>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#reviews'>reviews</a></li>
                        <li><a href='#works'>works</a></li>
                    </ul>
                    <h2>Manish spence photo</h2>
                    <ul>
                        <li><a href='#services'>services</a></li>
                        <li><a href='#footer'>contact </a></li>
                        <li><a href='#faq'>faqs</a></li>
                    </ul>
                    <img onClick={showMobileNav} src='./burger.png' />
                </nav>
            </header>
            <main className='main'>
                <h2>Splendid wedding photography</h2>
                <p>
                Discover the art of storytelling through the lens. We transform fleeting moments into timeless memories. 
                Whether it's the intricate details of a wedding, the candid joy of a family reunion, or the serene beauty of nature, our passion for 
                photography brings every scene to life. 
                Explore our portfolio and let us help you capture your story
                </p>
                <div className='button'>
                    <div className='btnOver'></div>
                    <span>contact</span>
                </div>
            </main>
        </section>
    )
}