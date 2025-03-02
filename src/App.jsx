import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  console.log("App component is running!");
  return (
    <div>
       <Header />
       <AllRoutes />
       <Footer />
    </div>
  );
}

export default App;



