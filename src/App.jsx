import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/styles";
import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#2c2c3c",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
