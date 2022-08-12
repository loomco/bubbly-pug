import React from 'react'

const Review = ({ content, styles }) => {
    return (
        <div className="w-full bg-[#001B26] p-8">
            <p className={`text-white text-center review__text  mx-auto`}>
                {content}
            </p>
        </div>
    )
}

export default Review