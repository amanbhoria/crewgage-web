import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    ©{new Date().getFullYear()} All Rights Reserved. CrewGage.
                </p>
                {/* <Link href={'https://github.com/amanbhoria'}>
                    Hand-crafted and made by{' '}
                    Aman Bhoria
                </Link> */}
                <div className="text-center justify-center">
                    <p className="text-lg flex-col items-center">
                        Contact Us:{''}
                        <a
                            // href="mailto:crewgagedevs@gmail.com"
                            className="text-blue-300 hover:text-blue-400 font-bold ml-2 cursor-pointer"
                        >
                            crewgagedevs@gmail.com
                        </a>
                        <span className="ml-4 follow-us">
                            Follow us on:{' '}
                            <a
                                href="https://github.com/amanbhoria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="hover:text-gray-400 cursor-pointer text-slate-300
                            w-5 h-5"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/crewgage/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    color="red"
                                    className="hover:text-gray-400 cursor-pointer text-slate-300
                            w-5 h-5"
                                />
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
