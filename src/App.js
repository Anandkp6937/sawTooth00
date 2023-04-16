import {React,Component} from 'react'
import {useState,useEffect} from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Components/logo/Logo'
import Navigation from './Components/navigation/Navigation'
import Taskcard from './Components/taskcard/Taskcard'
import Profile from './Components/profile/Profile'
import Notask from './Components/notask/Notask'
import Addtask from './Components/Addtask/Addtask'
import Homepage from './Components/homepage/Homepage'
import Mainlogo from './Components/mainlogo/Mainlogo'
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'
import Addtasked from './Components/taskcard/Addtasked'
import Modal from './Components/modal/Modal'
import Deletemodal from './Components/Deletemodal/Deletemodal'
const App=()=>{

  const [listdata,setListdata]=useState();
  const[notask,setNotask]=useState(true)
  const[submit,setSubmit]=useState(false);
  const[addtask,setAddtask]=useState(false)
  const callAddtask=()=>{setAddtask(true)}
  const closeAddtask=()=>{setAddtask(false)}
  const [delModel,setdelModal]=useState(false);
  const [id,setId]=useState(0)
  const [title,setTitle]=useState('')
  const[dialogeType,setDialogetype]=useState("done");
  // console.log("rendered");

useEffect(()=>{
  if(listdata){
    setNotask(false)
    // console.log("hii");
  }
else{
  setNotask(true)
  // console.log("hello");
}
})
  let date=new Date();
  let day=date.getDate();
  let month=date.getMonth();
  let year=date.getFullYear();
  let createdDate00=`${day}-${month}-${year}`;
  let dta;
const fetchdata=()=>{
  fetch('http://localhost:7000/task',{
    method:"GET",
    headers:{"Content-Type":"application/json"}
  })
  .then(response=>response.json())
  .then(data=>{
    setListdata(data.rows.reverse())
  }
)
}
    useEffect(()=>{
fetchdata()
},[submit])

  const[data,setData]=useState({
    title:'',
    desc:'',
    date:'',
    createdDate:createdDate00
  })

  const handleTilte=(e)=>{
    setData({...data,title:e.target.value});
    console.log("title1")
  }

  const handleDesc=(e)=>{setData({...data,desc:e.target.value}) ;console.log("desc")}
  const handleDate=(e)=>{
    console.log("rendered");
    setData({...data,date:e.target.value});
    console.log(e.target.value);
    console.log(data);
}
const onSub=async(e)=>{
  e.preventDefault();
    if(data.title!='' || data.desc!=''){
      console.log(data);
      setData({
        title:'',
        desc:'',
        date:'',
        createdDate:createdDate00
      })
    closeAddtask()
      let response=await fetch('http://localhost:7000/addtask',{
        method:"POST",
        headers:{'Content-type':"application/json"},
        body:JSON.stringify(data)
      })
      console.log(response);
      await fetchdata()
  }
    else{
      alert("please complete the required fields")
    }
  }
  const showDelmodel=(taskcard_id,taskcard_title)=>{
    setdelModal(true)
    setDialogetype('delete');
    setId(taskcard_id);
    setTitle(taskcard_title);
  }
  const showDonemodel=(taskcard_title,taskcard_id)=>{
  console.log("doned");
  setdelModal(true)
  setDialogetype('done');
  setId(taskcard_id);
  setTitle(taskcard_title);
  }

  const cancelDelmodal=()=>{
    setdelModal(false);
    // console.log("removed delmodal");
  }
  const deleteItem=async(id)=>{
    console.log("itemdeleted",id);


    // write request code with del id
    let response=await fetch(`http://localhost:7000/tasks/delete/${id}`,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}

    });
    console.log(await response);
    await fetchdata();
   setdelModal(false);
  }

  //doned code :current its is same as delete
  const donedItem=async(id)=>{
    console.log("itemdeleted",id);

    // write request code with del id
    let response=await fetch(`http://localhost:7000/tasks/done/${id}`,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}

    });
    console.log(await response);
    await fetchdata();
   setdelModal(false);
  }

  return(
    <div>
    <Logo/>
    <Navigation callAddtask={callAddtask}/>
    {notask&&<Notask/>}
    <Addtasked listdata={listdata} showDelmodel={showDelmodel} showDonemodel={showDonemodel} />
    {delModel&&<Deletemodal id={id} title={title} cancelDelmodal={cancelDelmodal}
    deleteItem={deleteItem} dialogeType={dialogeType} donedItem={donedItem}/>}
    {addtask&&<Modal closeAddtask={closeAddtask}
     handleTilte={ handleTilte} handleDesc={handleDesc}
    handleDate={handleDate}
    onSub={onSub}/>}
    </div>
  )
}
export default App;
