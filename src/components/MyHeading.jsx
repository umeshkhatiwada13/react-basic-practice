import React from 'react'

const MyHeading = ({name, sur, value}) => {
  return (
    <div>MyHeading
        <h1>Name : {name}</h1>
        <h1>Surname : {sur}</h1>
        <MyHeading2 value={value}/>
    </div>
  )
}

const MyHeading2 = ({value}) => <h2>Heading 2 Price : {value}</h2>
const MyHeading3 = () => <h2>Heading 2</h2>

export default MyHeading;
export {MyHeading2, MyHeading3};