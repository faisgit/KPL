import React from 'react'
import Logo from '../assets/logo.png'
export const Header = () => {
    return (
        <header className='flex flex-col justify-between items-center py-3 px-5'>
            <img src={Logo} alt="Logo Not Found!" className='h-40 ' />
            <div className='flex flex-col justify-center items-center mb-4'>
                <h1 className=' font-semibold text-3xl mb-3'>मीडिया खेल महोत्सव</h1>
                <h5 className='font-semibold mb-3'>जनपद-कौशाम्बी</h5>
                <h3 className='font-semibold text-xl'>कौशाम्बी प्रीमियर लीग 12वाँ संस्क्रण</h3>
                <h5 className='font-semibold'>(कैनवास बॉल क्रिकेट टूर्नामेन्ट)</h5>
                <h5 className='font-semibold'>07 मार्च 2024 से 13 मार्च 2024</h5>
                <h4 className='font-semibold text-lg'>स्थान : स्पोर्ट स्टेडियम कौशाम्बी</h4>
            </div>
        </header>
    )
}
