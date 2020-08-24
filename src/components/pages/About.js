import React from "react";

function About(){
    return(
        <div style={aboutStyle}>
            <h1>About</h1>
            <p>This is my first react project. I will not add many personal details here due to the fact that I followed a
            tutorial and I wouldn't feel at ease counting it as one of my owns.I am still putting it up there thuogh as a mark for
            many other projects I will put up.</p>
        </div>
    )
}

const aboutStyle = {
    textAlign : 'center',
    width : '50%',
    marginLeft : '25%'
}

export default About