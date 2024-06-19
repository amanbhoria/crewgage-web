'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import ComingSoon from './components/ComingSoon'
import Navbar from './components/Navbar'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Footer from './components/Footer'

export default function Signup() {
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('/api/subscribe', { email })
            if (response.status === 200) {
                // Email sent successfully, redirect to success page
                router.push('/success')
                setEmail('')
            } else {
                console.error('Error sending email:', response.data)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        // <div className="container mx-auto px-4 py-16">
        //   <h1 className="text-3xl font-bold text-center mb-8">Subscribe to My Newsletter</h1>
        //   <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
        //     <input
        //       type="email"
        //       placeholder="Enter your email address"
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //       className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        //       required
        //     />
        //     <button
        //       type="submit"
        //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-sm"
        //     >
        //       Subscribe
        //     </button>
        //   </form>
        // </div>
        <main className="bg-black min-h-screen p-8">
            <Navbar />
            <ComingSoon />
            <Footer />
        </main>
    )
}
