import './styles/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Root from "./components/Root";
import Header from "./components/Header";


function App() {
    return(
        <div>
            <Header/>
            <Root/>
        </div>
    )
}

export default App;
