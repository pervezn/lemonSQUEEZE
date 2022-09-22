import './App.css';
import { Box, ChakraProvider, Heading, Text, Button, VStack } from '@chakra-ui/react'
import CardContainer from './components/Card'
import React, {useState} from 'react';


function App() {
  const [contentStr, setContentStr] = useState('')
  const [content, setContent] = useState(<Heading >Hi, I'm Nida :)</Heading>)

  function handleNav(e) {
    console.log("here")
    let target = e.target.innerText 
    setContentStr(target) 
    console.log(target)
    if(target === 'Home'){
      setContent(<Heading >Hi, I'm Nida :)</Heading>)
    } 
    if(target === 'Projects'){
      setContent(<CardContainer />)
    }
  }

  return (
    <ChakraProvider>
      <div>
        <div style={styles.navBtnContainer} >
        <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Home</Button>
        <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>Projects</Button>
        <Button style={styles.navBtn} variant='link' onClick={(e) => handleNav(e)}>About</Button>
        </div>
        <div style={contentStr === 'Projects' ? styles.headingProjects : styles.heading}>
          {/* <ColoredLine color="red"/> */}
          {content}
        </div>
        <div style={{paddingLeft: "12px", paddingRight: "12px"}}>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;


const styles = {
  heading: {
    display: "flex",
    flex: "1 1 auto !important",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  headingProjects: {
    display: "flex",
    flex: "1 1 auto !important",
    justifyContent: "center",
    alignItems: "center",
    // width: "100vw",
    // height: "100vh",
  },
  border: {
    color: "blue",
  },
  navBtn:{
    padding: '5px',
    margin: '10px',
  },
  navBtnContainer :{
    // display: 'flex',
    // justifyContent: 'end',
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: '10px',
  }
}



// const ColoredLine = ({ color }) => (
//   <hr
//       style={{
//           color: color,
//           backgroundColor: color,
//           height: 1,
//           marginLeft: 0,
//           marginRight: 0
//       }}
//   />
// );