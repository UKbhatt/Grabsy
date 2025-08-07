import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/navigation";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store.js"

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Provider store={store}>
      <main className="py-3">
        <Outlet />
      </main>
      </Provider>
    </>
  );
};

export default App;
