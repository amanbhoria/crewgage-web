import Navbar from '../components/Navbar'

import users from '../../../users.json'
import UserProfilePopover from '../components/UserProfilePopover'
import Footer from '../components/Footer'
import * as styles from '../styles.module.css' // Import CSS module

const AboutPage = () => {
    return (
        <main className="bg-black text-white min-h-screen p-8">
            {/* scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll */}
            <Navbar />
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-8">About CrewGage</h1>
                <p className="text-2xl font-semibold mb-6">
                    <span className="underline">
                        Revolutionising On-field Contractor Management
                    </span>
                </p>
                {/* {users.map((user, index) => ( */}
                {/* <div> */}
                <p className="text-xl mb-4">
                    Hello, I’m{' '}
                    <span className="font-semibold">
                        {/* Aman Bhoria */}{' '}
                        <UserProfilePopover
                            key={users[0].index}
                            user={users[0]}
                            userName={'Aman Bhoria'}
                        />
                    </span>
                    , and along with{' '}
                    <span className="font-semibold">
                        {/* Rajat Joshi */}{' '}
                        <UserProfilePopover
                            key={users[1].index}
                            user={users[1]}
                            userName={'Rajat Joshi'}
                        />
                    </span>
                    , we are thrilled to unveil our latest project, CrewGage! 🎉
                </p>
                {/* </div> */}
                {/* ))} */}
                <p className="text-xl font-semibold mb-4">
                    What are we building?
                </p>
                <p className="text-lg mb-4">
                    CrewGage is a management tool designed to help on-field
                    contractors manage their teams and projects more
                    efficiently. Unlike the IT industry, which has tools like
                    Jira, the contracting world often relies on outdated
                    methods, leading to inefficiencies and communication issues.
                </p>
                <p className="text-xl inline-block font-semibold mb-4 bg-slate-900 px-2 py-1.5 text-white rounded-md gradient-background">
                    🌟 Our Vision:
                </p>
                <p className="text-lg mb-4">
                    CrewGage aims to bridge this gap with an intuitive,
                    user-friendly platform that enhances efficiency and
                    streamlines communication for contractors.
                </p>
                <p className="text-xl font-sm inline-block bg-slate-900 text-white px-2 py-1.5 rounded-md semibold mb-4 gradient-background">
                    📱 Exciting News!
                </p>
                <p className="text-lg mb-4">
                    We're about to launch our app on the Google Play Store,
                    making it even easier to access our tools on the go.
                </p>
                <p className="text-xl inline-block font-semibold mb-4 bg-slate-900 px-2 py-1.5 text-white rounded-md gradient-background">
                    🔗 Join us!
                </p>
                <p className="text-lg">
                    Join us on this journey as we bring innovative solutions to
                    the contracting world. Stay tuned for more updates!
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default AboutPage
