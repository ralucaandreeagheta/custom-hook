import { useEffect, useState } from 'react';

function UseIsMobile() {
    const [isMobile, setIsMobile] = useState(null);

    const calculateIsMobile = () => {
        if (window.innerWidth <= 768) return setIsMobile(true); setIsMobile(false)
    };

    window.addEventListener('resize', calculateIsMobile);
 
    useEffect(() => {
        calculateIsMobile();
    }, []);
    return isMobile;
}

export default UseIsMobile