import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div key={props.bookName} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 hover:scale-110">
      <img className="w-full" src={props.imageUrl} alt="Book cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.bookName}</div>
        <p className="text-gray-700 text-base">{props.desc}</p>
        <p className="text-gray-900 text-lg font-semibold">${props.price}</p>
        <p className="text-gray-600 text-sm">ISBN: {props.isbnNumber}</p>
      </div>
    </div>
  );
}

export default Card
