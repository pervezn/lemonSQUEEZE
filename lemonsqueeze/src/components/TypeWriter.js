import React from 'react';
import Typewriter from 'typewriter-effect';
import {Heading,} from '@chakra-ui/react'

const TypeWriter = () => {
    return (
        <Heading>
            <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString("Hi, I'm Nida :)")
                    .callFunction(() => {
                    console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Welcome to my world!")
                    .callFunction(() => {
                    console.log('All strings were deleted');
                    })
                    .start();
                }}
            />
        </Heading>
    )
}

export default TypeWriter