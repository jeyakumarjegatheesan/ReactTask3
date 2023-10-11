import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePage from './Components/CreatePage'
import { Route,Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './Features/NoteStore';
import EditPage from './Components/EditPage';
import Sidebar from './Components/Sidebar';




function App() {
  

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3" id="sidebar">
              <Sidebar/>
            </div>
            <div className="col-9" id="note">
              <Provider store={store}>
                <Routes>
                  <Route path="/" element={<CreatePage />} />
                  <Route path="/edit/:id" element={<EditPage />} />
                </Routes>
              </Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
