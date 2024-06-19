import React from 'react'
import { UserIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline' // Adjust the import path as needed
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const UserProfilePopover = ({ user, userName }) => {
    return (
        <div className="inline-block relative group">
            <button className="py-1.5 px-3 text-sm bg-slate-900 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-slate-700">
                {userName}
            </button>
            <div
                className="w-80 inline-block absolute mb-2 bottom-full left-1/2 -translate-x-1/2 z-10 bg-white rounded-xl shadow-md text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible"
                role="tooltip"
                id={`popover-user-profile-${user.username}`}
            >
                <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="block">
                            <h5 className="text-lg text-gray-900 font-medium mb-0">
                                {user.name}
                            </h5>
                            <span className="text-lg text-gray-500 font-normal">
                                @{user.username}
                            </span>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="py-2.5 px-3 text-xs bg-blue-400 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs hover:bg-indigo-700"
                    >
                        Follow
                    </a>
                </div>
                <div className="py-5 px-5">
                    <ul className="block space-y-2">
                        <li className="flex items-center gap-3 text-sm text-gray-900">
                            {/* <UserIcon className="w-4 h-4 transition-none border-black" /> */}
                            <FontAwesomeIcon
                                icon={faUserTie}
                                className="w-4 h-4"
                                color="black"
                            />
                            {user.role}
                        </li>
                        <li className="flex items-center gap-3 text-sm text-blue-400">
                            {/* <BuildingOffice2Icon className="w-4 h-4 transition-none text-gray-900 border-black" /> */}
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="w-4 h-4"
                                color="black"
                            />
                            <a
                                href={user.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {user.link}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePopover
