import React, { useEffect, useState } from 'react'
import { Facebook, Twitter, Youtube } from 'lucide-react'
import { WebData } from '../../services/api'
const Footer = () => {
    const [socials, setSocials] = useState({
        siteX: "https://twitter.com/",
        siteYoutube: "https://www.youtube.com/",
        siteFacebook: "https://www.facebook.com/",
    })
    const checkSocials = async () => {
        try {
            const res = await WebData();
            const siteDataRes = res.data;
            if (Array.isArray(siteDataRes) && siteDataRes.length > 0) {
                return setSocials({
                    siteX: siteDataRes[0].siteX,
                    siteYoutube: siteDataRes[0].siteYoutube,
                    siteFacebook: siteDataRes[0].siteFacebook
                })
            }
        } catch (error) {
            console.error("Error fetching site data:", error);
        }
    };
    useEffect(() => {
        checkSocials();
    }, []);
    return (
        <>
            <div className='w-full bg-white flex items-center justify-center h-16 shadow-md shadow-orange-200 absolute bottom-0 left-0 border-orange-200/30 border-2'>
                <div className='w-5/6 flex items-center justify-between'>
                    <h1 className='w-2/4 font-bold'>
                        ©
                        <span className='text-orange-500 px-2'>
                            Max Quiz
                        </span>
                        2024
                    </h1>
                    <ul className='flex w-2/4 justify-end items-center font-bold gap-10'>
                        <Facebook className='text-blue-500 cursor-pointer' onClick={() => window.location.href = `${socials.siteFacebook}`} />
                        <Twitter className='text-sky-500 cursor-pointer' onClick={() => window.location.href = `${socials.siteX}`} />
                        <Youtube className='text-red-500 cursor-pointer' onClick={() => window.location.href = `${socials.siteYoutube}`} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer