import { useDispatch, useSelector } from "react-redux";
import { switchReducer } from "./quoteSlice";
import Box from "./Box";

function App() {
  const { text, author } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid h-100 d-flex align-items-center justify-content-center">
        <Box
          textContent={text}
          author={author}
          action={() => dispatch(switchReducer())}
        />
        
    </div>
  );
}

export default App;
