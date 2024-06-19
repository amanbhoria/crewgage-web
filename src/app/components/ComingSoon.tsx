import { UserIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import UserProfilePopover from './UserProfilePopover'

const ComingSoon: React.FC = () => {
    return (
        <div className="text-white flex items-center justify-center w-full text-center py-40">
            <div className="text-center">
                <div className="flex justify-center mb-8">
                    <WrenchScrewdriverIcon className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-8xl font-bold mb-4 pb-2 gradient-text">
                    CrewGage
                </h1>
                <h2 className="text-2xl font-light mb-4">Gearing Up</h2>
                <div className="flex justify-center pt-20">
                    <div className="w-16 h-16 border-t-4 border-red-100 rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
