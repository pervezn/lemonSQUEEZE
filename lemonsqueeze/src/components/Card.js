import React from 'react';
import { Box, ChakraProvider, Heading, Text, Button, VStack } from '@chakra-ui/react'


const Card = () => {
    return (
      <Box style={styles.cardWrapper}>
        <Heading>Test</Heading>
        <Text style={{paddingBottom: "10px"}}>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <hr />
        <div style={{paddingTop: "10px"}}>
          <Button style={{display: "block"}} variant='ghost'>Github</Button>
          <Button style={{display: "block"}} variant='ghost'>Instagram</Button>
        </div>
      </Box>
    )
}

const CardContainer = () => {
    return (
        <div style={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )

}

export default CardContainer

const styles = {
    cardWrapper: {
      width: "400px",
      height: "500px",
      borderRadius: "30px",
      boxShadow: '1px 2px 9px #bbbbbf',
      padding: "20px",
      backgroundColor: "#f3f1fd",
      margin: "20px",
    },
    cardContainer: {
        display: 'flex',
        width: '900px',
        flexWrap: 'wrap',
        marginTop: '100px',
    }

  }