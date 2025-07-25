import React from 'react'

const Contact = () => {
    const isLoggedIn = false;
    if(isLoggedIn){
  return (
    <h1>welcome back</h1>
  )
}
else{
return(
    <h1> if you want to contact me then habibi come to Nepal </h1>
)
}
}


export default Contact