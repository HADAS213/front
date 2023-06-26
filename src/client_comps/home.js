import React from 'react'
import React,{ useState , useEffect }  from 'react'
import { API_URL, doApiGet } from '../../services/apiService';
export default function Home() {

  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = API_URL+"/blogs";
    try{
      let resp = await doApiGet(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch(err){
      console.log(err);
      alert("there problem ,try again later")
    }

  }


  return (
    <div className='container'>
      <CheckAdminComp />
      <h1>List of users in systems</h1>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>info</th>
            {/* <th>Role</th>
            <th>Rank</th>
            <th>Location</th>
            <th>NickName</th>
            <th>Active</th>
            <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <UserItem key={item._id} doApi={doApi} index={i} item={item}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

