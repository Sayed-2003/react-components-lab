function Students(){

const students = ['Ahmad','Ali','Husna','Abdullah','Sarah','Zainab','Raghad','Sayed Hamed']

return (
<>
<h1>Students List</h1>
{students.map((oneStudents)=><div key={oneStudents}><ul>{oneStudents}</ul></div>)}

<h1>without sayed hamed</h1>
<p>{students.map((oneStudent)=>oneStudent !=='Sayed Hamed'?<p>{oneStudent}</p>:null)}</p>

</>
)


}

export default Students