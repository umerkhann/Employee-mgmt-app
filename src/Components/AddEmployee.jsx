function AddEmployee(props){

    return(
        <>
        <button className="add-emp-btn" onClick={props.addEmp}> Add Employee </button>
        </>
    )
}

export default AddEmployee;