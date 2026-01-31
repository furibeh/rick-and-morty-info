import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainPage from './pages/MainPage'
import CharacterPage from './pages/CharacterPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={MainPage}/>
          <Route path='/character/:id' Component={CharacterPage}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
