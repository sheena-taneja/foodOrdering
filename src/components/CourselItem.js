import React from 'react'

function CourselItem({ offer, code }) {
    return (
        <div className="flex m-4">
            <button
                className="block rounded-lg bg-gray-200 text-center dark:bg-neutral-700 h-36 w-80 flex-shrink-0">
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {offer}
                    </h5>
                </div>
                <div
                    className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                    {code}
                </div>
            </button>
        </div>
    )
}

export default CourselItem
