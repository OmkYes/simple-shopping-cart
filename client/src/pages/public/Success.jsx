import React, { useEffect } from 'react'
import Lottie from "lottie-react"
import successAnimation from "./../../assets/success.json"
import successMusic from "./../../assets/1.mp3"
import { useNavigate } from 'react-router-dom'
const Success = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
    }, 5000);
    useEffect(() => {
        const audio = new Audio(successMusic)
        audio.play()
        return () => {
            audio.pause()
        }
    }, [])
    return <>
        <div className='d-flex jsutify-item-center flex-column align-items-center' >
            <div style={{ height: 400, width: 400 }} >
                <Lottie animationData={successAnimation} loop={true} />
            </div>
            <button type="button" class="btn btn-primary">Continue Shoping</button>
        </div>
    </>
}

export default Success