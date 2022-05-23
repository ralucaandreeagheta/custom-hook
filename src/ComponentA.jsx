import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';

function ComponentA() {
    const isMobile = UseIsMobile();
    console.log(isMobile)
    return <>
        <p>
            ComponentA
        </p>
    </>
}

export default ComponentA