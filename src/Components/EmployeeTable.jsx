import ActionsButtons from "./ActionsButton";

function EmployeeTable(){
    return(
        <>
        <table>
            <th>
                First Name
            </th>
            <th>
                Second Name
            </th>
            <th>
                Email id
            </th>
            <th>
                Actions
            </th>
            <tr>
            <td>
                Umer
            </td>
            <td>
                Khan
            </td>
            <td>
                Gmail
            </td>
            <td>
                <ActionsButtons/>
            </td>
            </tr>
            <tr>
            <td>
                Umer
            </td>
            <td>
                Khan
            </td>
            <td>
                Gmail
            </td>
            <td>
                <ActionsButtons/>
            </td>
            </tr>
            <tr>
            <td>
                Umer
            </td>
            <td>
                Khan
            </td>
            <td>
                Gmail
            </td>
            <td>
                <ActionsButtons/>
            </td>
            </tr>
            <tr>
            <td>
                Umer
            </td>
            <td>
                Khan
            </td>
            <td>
                Gmail
            </td>
            <td>
                <ActionsButtons/>
            </td>
            </tr>
        </table>
        </>
    )
}

export default EmployeeTable;