import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-white py-4">
            <div className="container mx-auto text-center">
                <p>
                    ©{new Date().getFullYear()} All Rights Reserved. CrewGage.
                </p>
                <div className="text-center justify-center">
                    <p className="text-lg flex-col items-center">
                        Contact Us:{' '}
                        <a
                            href="mailto:crewgagedevs@gmail.com"
                            className="text-blue-300 hover:text-blue-400 font-bold ml-2 cursor-pointer"
                        >
                            crewgagedevs@gmail.com
                        </a>
                        <div className="mt-4">
                            Follow us on:
                            <div className="flex justify-center items-center gap-4 mt-2">
                                <a
                                    href="https://github.com/amanbhoria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="hover:text-gray-400 cursor-pointer text-slate-300 w-6 h-6"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/crewgage/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="hover:text-gray-400 cursor-pointer text-slate-300 w-6 h-6"
                                    />
                                </a>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
