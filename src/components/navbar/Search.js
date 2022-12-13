import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Searched } from "../../features/filter/filterSlice";

export default function Search() {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.filter);

    const [input, setInput] = useState(search);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Searched(input))

    }
    return (
        <form onSubmit={handleSubmit} >
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                placeholder="Search"
            />
        </form>
    );
}
