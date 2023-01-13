import { store } from "./store";
import { Provider } from "react-redux";
import Counter from "./component/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
