import './App.css'
import Experience from './components/Experience'
import Education from './components/Education'
import Project from './components/Project'
import Skills from './components/Skills'
import { DataProvider } from './context/data'
import ViewContent from './components/ViewContent'

function App() {
  return (
    <>
      <DataProvider>
        <div id='select'>
          <Experience />
          <Project />
          <Education />
          <Skills />
        </div>
          <ViewContent />
      </DataProvider>
    </>
  )
}

export default App
