function List(props) {
    const arr = [{id:1, name:"html"},{id:2, name: "css"}, {id:3,name:"JS"}]
    const li = arr.map((el) =>  ( 
       <li key = {el.id} >{el.name}</li>

    ))
      return (
        <ul> {li} </ul>
    )
  }
  
  export default List;