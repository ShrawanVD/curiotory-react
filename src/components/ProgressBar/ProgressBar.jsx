import React, { useEffect, useState } from 'react';
import progress from './ProgressBar.module.css';

function ProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

            setScrollPercentage(scrollPercentage);
            document.documentElement.style.setProperty('--scroll-width', `${scrollPercentage}%`);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="progress-container" className={progress.progressContainer}>
            <div className={progress.progressFill}></div>
        </div>
    );
}

export default ProgressBar;
