import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "Redux/store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
