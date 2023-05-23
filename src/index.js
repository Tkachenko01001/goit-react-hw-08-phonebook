import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "Redux/store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
