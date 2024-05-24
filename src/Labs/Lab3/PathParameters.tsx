import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";
export default function PathParameters() {
    return (
        <div id="wd-path-parameters">
            <h2>Path Parameters</h2>
            <Link to="/Labs/Lab3/add2/1/2">1 + 2</Link> <br />
            <Link to="/Labs/Lab3/add2/3/4">3 + 4</Link>
            <Routes>
                <Route path="add2/:a/:b" element={<AddPathParameters />} />
            </Routes>
        </div>
    );
}
