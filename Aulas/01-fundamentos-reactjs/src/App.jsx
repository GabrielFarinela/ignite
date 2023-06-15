import Post from './Post'
import Header from './components/Header'
import styles from './App.module.css'

import './global.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
          author="Gabriel Farinela" 
          content="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
      
        <Post 
          author="Guilherme Farinela" 
          content="Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        />
        </main>
      </div>
    </>
  )
}

export default App
