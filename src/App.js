import AboutMe from './components/aboutMe/aboutMe';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
// import './app.css'


function App() {
  return (
    <>
      <view className="container">
        <section>
          <NavBar />
        </section>

        <section>
          <Home />
        </section>
        
        <section>
          <AboutMe />
        </section>


      </view>
    </>
  );
}

export default App;
