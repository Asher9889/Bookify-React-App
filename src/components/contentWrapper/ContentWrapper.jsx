import React from 'react';


const ContentWrapper = (props) => {
    return (
        <div className='w-[100%] max-w-[1200px] mx-auto px-[20px]'>
            {props.children}
        </div>
    )
}

export default ContentWrapper;