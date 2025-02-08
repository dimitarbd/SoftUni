import Search from "../search/Search";
import Pagination from "./pagination/Pagination";

export default function UserList() {
    return (
        <section className="card users-container">
            <Search />

            <UserList />

            {/* <!-- New user button  --> */}
            <button className="btn-add btn">Add new user</button>

            <Pagination />
        </section>
    )
};
