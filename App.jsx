import { useState } from 'react'
import Home from './home';
import VolunteerForm  from './volunteer';
import About from './about';
import './App.css'
function App() {
            const [page, setPage] = useState("home");

            return (
                <div>
                    <header>
                       
                        <h1> NGO</h1>
                        <nav>
                            <button onClick={() => setPage("home")}>Home</button>
                            <button onClick={() => setPage("volunteer")}>Volunteer</button>
                            <button onClick={() => setPage("about")}>About Us</button>
                        </nav>
                    </header>
                    {page === "home" && <Home />}
                    {page === "volunteer" && <VolunteerForm />}
                    {page === "about" && <About />}
                </div>
            );
        }


export default App
