import './about.css'

export const About = () => {
    return(
        <section id='about'>
            <div id='aboutB'>
                <h1 id='aboutBt'>
                    About Us
                </h1>
            </div>
            <div id='aboutM'>
                <div className='aboutItem'>
                <h1>hi, iam fikayo <span><img /></span></h1>
                <p>
                a wedding photographer based in the vibrant city of Lagos, Nigeria. With a camera in hand and a heart brimming with passion,
                 I document the magic of weddings, capturing the emotions, connections, and joyous celebrations that make your special day truly 
                 unforgettable.Growing up in Lagos, I've always been surrounded by the city's infectious energy and rich cultural tapestry. 
                 This energy is what fuels my creative spirit and translates into my photography. I find immense joy in witnessing love blossom between couples, 
                 and I strive to translate those emotions into timeless visuals that you can cherish for generations to come.
                </p>
                </div>

                <div className='aboutItem'>
                <h1>A Storytelling Approach</h1>
                <p>
                For me, wedding photography is more than just capturing staged poses. It's about weaving a visual story that encapsulates
                 the essence of your love story, from the intimate pre-wedding preparations to the electrifying moments on the dance floor.
                 I believe in capturing candid moments, heartfelt laughter, and the genuine connections that make your wedding day unique.
                </p>
                </div>
               

                <div className='aboutItem'>
                <h1>Your Vision, My Expertise:</h1>
                <p>
                I believe in fostering a collaborative process with my couples. I take the time to understand your vision, preferences,
                 and the overall style of your wedding. Whether you envision a classic and elegant look or a more adventurous and vibrant aesthetic, 
                 I'll work with you to achieve the desired outcome.
                 I offer a blend of creative guidance and technical expertise to ensure your wedding photos are not only stunning but also reflect your unique love story.
                </p>
                </div>              
            </div>
        </section>
    )
}