import { useEffect, useState, useRef } from 'react';

export function LazyVideo() {
    const VIDEO_REF = useRef()
    const [ isVisible, setIsVisible ] = useState(false)
    
    useEffect( () => {
        const videoControl = (entries) => {
            const SECTION = entries[0]
            if (SECTION.isIntersecting) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        const observer = new IntersectionObserver( videoControl, {
            rootMargin: '10px'
        } )

        observer.observe(VIDEO_REF.current)
    })

    useEffect( () => {
        !isVisible ? 
            VIDEO_REF.current.pause() 
            : 
            VIDEO_REF.current.play()
    }, [isVisible])

    return (
        <video  ref={VIDEO_REF} 
                poster="https://i.ibb.co/6BkDsJY/videoImg.jpg" 
                controls 
                src={require("../Home/imagenes/VideoAve.mp4")}
            >
        </video>
    )
}