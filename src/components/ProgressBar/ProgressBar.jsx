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
                backgroundImage: "linear-gradient(to right, #3c59c0, #3563c7, #2d6cce, #2675d4, #1f7ed9, #587dd9, #7a7bd7, #957ad3, #c36db9, #dd6596, #e56972, #dc7651)",
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