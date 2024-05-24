

 const TableComponent = () =>{
    const details={
        th:"name",
        th1:"class",
        th2:"rollno",

        tr:"ramu",
        tr1:"4",
        tr2:"101",

        tr3:"hari",
        tr4:"4",
        tr5:"102"
    }
     return(
        <>
        <table>
            <tr>
                <th>{details.th}</th>
                <th>{details.th1}</th>
                <th>{details.th2}</th>
            </tr>

            <tr>
                <td>{details.tr}</td>
                <td>{details.tr1}</td>
                <td>{details.tr2}</td>
            </tr>

            <tr>
                <td>{details.tr3}</td>
                <td>{details.tr4}</td>
                <td>{details.tr5}</td>
            </tr>
        </table>
        </>
     )
}
export default TableComponent