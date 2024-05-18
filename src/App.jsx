import Header from "./components/Header";

import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import Filter from "./components/Filter";

function App() {
  return (
    <>
      <div className=" bg-white">
        <Header />
        <div className="flex m-0  ">
          <Filter />
          <ProductList />
        </div>
     
        <Footer />

      </div>
    </>
  );
}

export default App;
