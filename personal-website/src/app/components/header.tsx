import React, { useEffect, useState } from 'react';

const Header = () => {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        // Trigger the fade-in animation after the component is mounted
        setFadeIn(true);
        }, []);
    return (
        <h1 className={`${fadeIn ? 'fadeIn' : ''} header font-[family-name:var(--font-montserrat)]  mt-10 sm:text-center`} >
            Welcome to My Page!
        </h1>
    );
};

export default Header;

