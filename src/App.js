import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"

function App() {
    return (
        <section>
            <NavBar/>
            <ItemListContainer greeting="Bienvenidos"/>
        </section>
    )
}

export default App