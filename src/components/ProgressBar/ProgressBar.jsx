import React, { useEffect, useState } from 'react'

function ProgressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(()=>{

        const handleScroll=()=>{

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercentage = ( scrollY / (documentHeight - windowHeight) ) * 100;

            setScrollPercentage(scrollPercentage);

        }

        window.addEventListener("scroll",handleScroll);

        return()=>{
            window.addEventListener("scroll",handleScroll);
        }

    },[])

  return (
    <div id="progress-container"
        style={{
            zIndex: "1",
            height: "0.7%",
            width: "100%",
            backgroundColor: "transparent",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            borderRadius: "5px"
        }}
    >
        <div className="progress-fill"
            style={{

                height: "100%",
                backgroundImage: "linear-gradient(to right, #4285f4, #b574df, #ef66b5, #ff6b83, #ff8557, #ff8c45, #ff952f, #fd9f09, #fc8916, #f87322, #f25b2c, #ea4335)",
                // backgroundColor: "blue",
                width: `${scrollPercentage}%`,
                borderTopRightRadius: "5px",
                animation: "smooth",
                borderBottomRightRadius: "5px"
            }}
        >

        </div>
    </div>
  )
}

export default ProgressBar