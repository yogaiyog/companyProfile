import { AcademicCapIcon, GlobeAmericasIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/outline";


export default function Numbers() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                    <AcademicCapIcon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900">1M</h1>
                    <h2 className="text-lg font-medium text-gray-600">Future Champion</h2>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                    <UserGroupIcon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900">300+</h1>
                    <h2 className="text-lg font-medium text-gray-600">Professional Coaches</h2>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                    <GlobeAmericasIcon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900">20+</h1>
                    <h2 className="text-lg font-medium text-gray-600">Countries</h2>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg">
                    <StarIcon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900">4.8/5</h1>
                    <h2 className="text-lg font-medium text-gray-600">User Ratings</h2>
                </div>
            </div>
        </div>
    );
}
