/* eslint-disable prettier/prettier */

// import 'bootstrap/scss/bootstrap.scss'
import './styles/main.scss'

function App() {
  return (
    <div className="main_container">
      <aside className="navigation"> LEFT SIDE BAR </aside>
      <main>
        Main Content
        {/* <div className="t1"> T1 </div>
        <div className="t2"> T2 </div> */}
      </main>
      <aside className="navigation_right "> RIGHT PROFILE BAR </aside>
    </div>
  )
}

export default App
