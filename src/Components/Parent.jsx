import Header from "./Header";
import AddEmployee from "./AddEmployee";
import EmployeeTable from "./EmployeeTable";
import Footer from "./Footer";


const Parent = () => {

    const addEmp = () => {
        alert("Employee has been added successfully!");
    }

    return(
        <>
        <div>
            <Header/>
            <h1 className="center">Employees List</h1>
            <div className="table-margin">
                <AddEmployee addEmp = {addEmp}/>
                <div className="table-container">
                <EmployeeTable/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Parent;