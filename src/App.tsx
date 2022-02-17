import './App.css';
import MainEx1 from './ex1/Main'
import MainEx2 from './ex2/Main'
import MainEx3 from './ex3/Main'
import MainEx4 from './ex4/Main'
import { Grid, Text, Box } from '@chakra-ui/react'

function App() {
  const mode = '2'
  return (
    <div className="App" style={{background: 'orange'}}>
      <Grid templateColumns={'repeat(2, 1fr)'} gap={'10'} pl={'50'} pt={'30'}>
        <Box>
          <Text>Ex1</Text>
          <MainEx1 />
        </Box>
        <Box>
          <Text>Ex2</Text>
          <MainEx3 />
        </Box>
        <Box>
          <Text>Ex4</Text>
          <MainEx4 />
        </Box>
      </Grid>
      
    </div>
  );
}

export default App;
