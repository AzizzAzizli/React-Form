import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { EditModal } from "./components/modal";
function App() {
  let userData = {
    fullname: "",
    age: "",
    position: "",
    phoneNumber: "",
  };

  let usersArray = JSON.parse(localStorage.getItem("usersArray")) ?? [];
  // const [openModal,setOpenModal]=useState(false)
  const [usersData, setUsersData] = useState(usersArray);
  const [formData, setFormData] = useState(userData);

  function handleInput(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevDatas) => ({ ...prevDatas, [name]: value }));
  }
  let disabled =
    !formData.fullname.trim() ||
    !formData.age.trim() ||
    !formData.position.trim() ||
    !formData.phoneNumber.trim();

  function addData() {
    console.log(formData);

    setFormData(userData);
    setUsersData((prevDatas) => [formData, ...prevDatas]);
    usersArray.push(formData);
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
  }

  function deleteUser(index) {
    setUsersData(
      (prevDatas) => (prevDatas = prevDatas.filter((_, i) => index !== i))
    );
    usersArray = usersArray.filter((_, i) => index !== i);
    // usersArray=usersData
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
  }
//   const [selectedIndex, setSelectedIndex] = useState(null);


//   function editData(item,index){
//     // setOpenModal(prev=>!prev)
//     // setSelectedIndex(index);
// console.log(index);
// console.log(item,index);
// return <EditModal {...item}  i={selectedIndex}/>

//   }



  // console.log(usersData);
  return (
    <div className="App">
         {/* <EditModal  /> */}
         {/* {openModal && selectedIndex !== null && (
      <EditModal {...usersData[selectedIndex]} setUsersData={setUsersData} />
    )} */}
         {/* {openModal &&  editData()} */}
      <header className="App-header">
        <h1>React-Form</h1>
        <nav>
          <a href="https://www.linkedin.com/in/aziz-azizli-3ba24a28a/">
            LinkedIn
          </a>
          <a href="https://github.com/AzizzAzizli/">Git Hub</a>
        </nav>
      </header>

      <div className="contain">
        <div className="contents">
          <div className="inputs">
            <input
              value={formData.fullname}
              placeholder="Fullname"
              name="fullname"
              onChange={handleInput}
              type="text"
            />
            <input
              value={formData.age}
              placeholder="Age"
              name="age"
              onChange={handleInput}
              type="number"
            />
            <input
              value={formData.position}
              placeholder="Position"
              name="position"
              onChange={handleInput}
              type="text"
            />
            <input
              value={formData.phoneNumber}
              placeholder="Phone number"
              name="phoneNumber"
              onChange={handleInput}
              type="number"
            />
            <button
              disabled={disabled}
              onClick={addData}
              onChange={handleInput}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
          <div className="form mt-3 p-5">
            <table className="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Age</th>
                  <th scope="col">Position</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Delete</th>
                  {/* <th scope="col">Edit</th> */}
                </tr>
              </thead>

              <tbody className="maxHeight">
                {!!usersData &&
                  usersData.map((item, index) => {
                    return (
                      <tr key={"row: " + index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.fullname}</td>
                        <td>{item.age}</td>
                        <td>{item.position}</td>
                        <td>{item.phoneNumber}</td>
                        <td>
                          <button
                            onClick={() => deleteUser(index)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                        {/* <td>
                          <button  onClick={()=>editData(item,index) } className="btn btn-success">Edit</button>
                        </td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
