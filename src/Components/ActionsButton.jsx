const ActionsButtons = () =>{
    const deleteUser = () =>{
        alert("Employee has been deleted!");
    }
    const updateUser = () =>{
        alert("Employee data has been updated!");
    }
    const viewUser = () =>{
        alert("An Employee!");
    }
    return(
        <>
        <button className="update-view-btn" onClick={updateUser}> Update </button>
        <button className="del-emp-btn" onClick={deleteUser}> Delete </button>
        <button className="update-view-btn" onClick={viewUser}> View </button>
        </>
    )
}

export default ActionsButtons;