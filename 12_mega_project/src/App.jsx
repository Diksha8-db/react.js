import './App.css'
import conf from './conf/conf';

function App() {
   
  console.log(conf.appwriteUrl);

  return (
    <>
      <h1>This is a test heading</h1>
    </>
  )
}

export default App









// NOTE:
// When app is created using Create-React-app the the env variables are stored as REACT_APP_[NAME] and accessed using process.env.[name of env variable]
