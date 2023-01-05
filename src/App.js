import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const dispatch=useDispatch();


  const [items, setItems] = useState([]);
  let obj={"id":0,"email":"placeholder.placeholder@place.in","first_name":"Placeholder","last_name":"placeholder","avatar":"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"};

  const [profile,setProfile]=useState(obj);
 const[loading,setloading]=useState(true);


  const [pageCount, setpageCount] = useState(null);
  function dispatchuserprofiles(user){
    dispatch({type:"ADDPROFILE",payload:user});
          
  }
  
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
       
        `https://reqres.in/api/users?page=1`
      );
      const data = await res.json();
      const total = data.data.length;
      console.log(total);
      setpageCount(data.data.length);
      setItems(data.data);
      console.log(data.data);
        data.data.map(dispatchuserprofiles);
        
    };

    getComments();
  }, []);


  useEffect(() => {
    
  }, [profile]);


  


  


  const fetchProfile = async (currentPage) => {
    const res = await fetch(
      `https://reqres.in/api/users/${currentPage}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchProfile(currentPage);

   
    console.log(commentsFormServer.data.email)
     setProfile(commentsFormServer.data);

  };
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" class="rounded" src={profile.avatar} />
  <Card.Body>
    <Card.Title>NAME: {profile.first_name} {profile.last_name}</Card.Title>
    <Card.Text>
      USER INFO
    </Card.Text>
   Email:{profile.email} \n
   ID:{profile.id}
  </Card.Body>
</Card>
  return (
    <div className="container">
      <div className="row m-2">
        <div >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" class="rounded" src={profile.avatar} />
  <Card.Body>
    <Card.Title>NAME: {profile.first_name} {profile.last_name}</Card.Title>
    <Card.Title>
      USER INFO
    </Card.Title>
    <Card.Title>
    Email:{profile.email} 
    </Card.Title>
   {'\n'}
   <Card.Title>
    ID:{profile.id} 
    </Card.Title>

   </Card.Body>
   </Card>
</div>
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;