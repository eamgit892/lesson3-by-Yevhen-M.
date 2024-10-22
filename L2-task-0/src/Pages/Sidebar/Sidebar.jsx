import "./Sidebar.css";
import { Topics } from "../../components/Topics/Topics";

const Sidebar = ({ data }) => {
    return (
        <nav className="Sidebar">
            <Topics data={data}/>
        </nav>
    )
}

export default Sidebar