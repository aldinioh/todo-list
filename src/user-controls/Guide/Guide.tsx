import './Guide.css'

import React from 'react'

type GuideProps = {
  text: string;
};

const Guide = ({ text }: GuideProps) => {
  return (
    <div className='guide'>
        <span className="mgc_flag_4_fill"></span>
        <p>{text}</p>
    </div>
  )
}

export default Guide