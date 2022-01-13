
const Course = ({course})=>{

    const parts = course[0].parts
    let totals = parts.map( element => element.exercises)
    let totalsSum = totals.reduce( ( inicial, final )=> inicial + final)

    const parts2 = course[1].parts
    let totals2 = parts2.map( element => element.exercises)
    let totalsSum2 = totals2.reduce( ( inicial, final )=> inicial + final)

    console.log(totalsSum2)
    return (
        <>
        {parts.map( (courses, i) => 
        <p key={i}>{courses.name}: {courses.exercises}</p>
        )}
        <strong>Total of exercices: { totalsSum }</strong>
        {parts2.map( (courses, i) => 
        <p key={i}>{courses.name}: {courses.exercises}</p>
        )}
        <strong>Total of exercices: { totalsSum2 }</strong>
        </>
    )
}
export default Course