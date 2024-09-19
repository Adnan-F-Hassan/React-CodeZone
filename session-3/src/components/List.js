function List(props) {
    const arr = ["html", "css", "JS"]
    const li = arr.map((el) =>    <li>{el}</li>  )
      return (
        <ul> {li} </ul>
    )
  }
  
  export default List;