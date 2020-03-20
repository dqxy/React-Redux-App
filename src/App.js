import React from "react";
import "./styles.css";
import DataForm from "./components/DataForm";
import { createStore, applyMiddleware } from "redux";
import { dataReducer as reducer } from "./reducers/dataReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import DataList from "./components/DataList";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Quotes</h1>
        <DataForm />
        <DataList />
      </div>
    </Provider>
  );
}
