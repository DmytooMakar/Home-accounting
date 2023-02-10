import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import HeaderAccounting from "./Header/HeaderAccounting";

export default function Accounting() {

    return (<div className="accounting-container">
    <HeaderAccounting />
    <div className="d-flex">
        <Sidebar />
        <Main />
    </div>
    </div>
    )
}