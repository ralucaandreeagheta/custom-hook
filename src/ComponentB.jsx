import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';

function ComponentB() {
    const isMobile = UseIsMobile();
    console.log(isMobile)
    return <></>
}

export default ComponentB