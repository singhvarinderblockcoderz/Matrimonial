import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../ui/Navbar";
import Router from "next/router";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const TotalUsers = () => {
  const [data, setData] = useState();
  const [search,setSearch] = useState("");
  
  const  router = useRouter()
  

  async function userlists() {
    try {
      const email=localStorage.getItem('email')
      const token = localStorage.getItem("token");
      let res = await axios.post("/api/totalUsers",{email,token});
      const response = res.data.data;
      console.log(res)

      setData(res.data.data)
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userlists();
  }, []);

  function match(e){
    setSearch(e.target.value)
    
  }
  
  function handleClick(item){
    router.push({
      pathname:'/userDetails',
      query:{
        id:item.id,
        
      }
    })
   }
   
  return (
    <>
           <div className="new-dashboard">
            <SideBar/>
        <section className="profile-sec profile-sects">
          <div className="container">
            <div className="row justify-content-center">
              <Navbar/>
              <form className="input-sec" id="ref-code">
                {/* {/ <div className="line profile-line" id="ch-line"></div> /} */}
                <h3 className="heading-text pink-text mt-2 ">
                  USERS LIST
                  <Link href={"/dashboard"}>
                    <span
                      className="arr-icon"
                      style={{
                        position: "relative",
                        left: "-48%",
                        cursor: "pointer",
                      }}
                    >
                      <img src="" className="icon-width"/>
                    </span>
                  </Link>
                </h3>
                <div  className="me-2" style={{display:"flex",justifyContent:'left',marginTop:"2rem",marginBottom:"-2rem"}}>
                <input type="search" placeholder="search" onChange={(e)=>{match(e)}}></input>
                </div>
                

                <table className="table funds-table mt-5" id="funds-color">
                  <thead>
                    <tr className="">
                      <th id="fuds" scope="col">
                        Sr. No.
                      </th>
                      <th id="fuds" scope="col">
                        First Name
                      </th>
                      <th id="fuds" scope="col">
                        Last Name
                      </th>
                      <th id="fuds" scope="col">
                        Email
                      </th>
                      <th id="fuds" scope="col">
                        Referal code
                      </th>
                      <th id="fuds" scope="col">
                        Position
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.filter((item)=>{
                        return search.toLowerCase()===''? item:item.firstName.toLowerCase().includes(search)
                    }).map((item, id) => {
                      return (
                        <tr key={id} onClick={()=>handleClick(item)}>
                          <td className="total-account">{id+1}</td>
                          <td className="total-account">{item.firstName}</td>
                          <td className="total-account">{item.lastName}</td>
                          <td className="total-account">{item.email}</td>
                          <td className="total-account">{item.referralCode}</td>
                          <td className="total-account">{item.position}</td>
                         
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TotalUsers;
