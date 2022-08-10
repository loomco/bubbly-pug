import React from 'react'

const Review = ({ content }) => {
    return (
        <div className="w-full bg-[#001B26] p-8">
            <p className="text-white text-center review__text max-w-2xl mx-auto">
                {content}
            </p>
        </div>
    )
}

export default Review