import React, { useState } from 'react'

function hooks() {
    const[color,setColor] = useState('red');
  return (
    <>
    <h1>USE STATE HOOK</h1>
    <p style = {{color:color}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, reprehenderit saepe laboriosam sed corrupti, mollitia quae sint possimus cupiditate incidunt eaque reiciendis! Magnam quidem blanditiis aliquid maxime nostrum praesentium? Fugit?</p>
    </>
  )
}

export default hooks