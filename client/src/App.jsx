import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Cart from "./pages/public/Cart";
import Checkout from "./pages/public/Checkout";
import Success from "./pages/public/Success";
import PublicLayout from "./components/public/PublicLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PublicLayout />} >
                    <Route index element={<Home />} />
                    <Route path='success' element={<Success />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='checkout' element={<Checkout />} />
                    <Route path='*' element={<h1>Page Not Found</h1>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
