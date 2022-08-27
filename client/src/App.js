import Layout from "./components/Layout/Layout";
import Tickers from "./components/Tickers/Tickers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Tickers />
      </Layout>
    </div>
  );
}

export default App;
