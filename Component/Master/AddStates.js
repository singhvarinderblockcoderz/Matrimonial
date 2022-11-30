import React, { useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import Link from 'next/link'
import Script from 'next/script'
import $ from "jquery"

const State = () => {

async function jqueryCode(){  
  $(".state-form").show("slow");
  $(".show-form").hide("slow");
  $('.state-form').toggleClass("show-form") 
}


  return (
    <div>
          <div className="new-dashboard">
            <SideBar/>
      <section className="profile-sec profile-sects" >
        <div className="container">
          <div className="row justify-content-center">

          <form className="input-sec input-top p-0 state-form" id="bar-tops">
              <div className="input-line iptset-line" id="index-line"></div>
              <div className="p-3">
                <div className="login-top-img">
                  <h3 className="heading-text mt-3"  id='close-btn-setting'> STATE</h3>
                  <button type="button" class="btn-close" aria-label="Close"  onClick={jqueryCode}></button>
                </div>
                <div className="input-item mt-0" id="input-mt">
                  <h6 className="item-text">ADD STATE</h6>
                  <input
                    className="textinput"
                    type="text"
                    name="username"
                    autoComplete="on"
                  />
                </div>

                

                
            <button
                  variant="primary"
                  className="btn btn-round btn-warning w-100 p-0 "
                  style={{ marginTop: "30px" }}
                  type="submit"
                > ADD           </button>
              </div>
            </form>

          <form className="input-sec input-top p-0" id="bar-top">
              <div className="input-line iptset-line" id="index-line"></div>
             

                          
              <div className="token-head ">
                 <div className="rapper-between" id="token-form-padding">
                 
                 <Link href="/">
                  <h5
                    style={{ cursor: "pointer" }}
                    // onClick={() => router.back()}
                    >
                    {" "}
                    <i className="bi bi-chevron-left" id="back-btn-icon"></i>
                  </h5>
                    </Link>
                  <h5 className='heading-text pink-text '> State </h5>
                  <h5 className="hide-text">1</h5>
                </div>  

                <h6 className='State-text mt-3'>Country</h6>

                <div className="input-group mb-1" id="search-bar">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-search"></i>
                  </span>
                  <select
                    type="text"
                    className="form-control form-select"
                    placeholder="Search by name or past address"
                    aria-label="Username"
                    aria-describedby="basic-addon1" >
                      <option>India</option>
                      <option>England</option>
                 </select>
                </div>

              </div>

              
              <div className="token-head ">
                <h6 className='State-text mt-0'>State</h6>

                <div className="input-group mb-1" id="search-bar">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-search"></i>
                  </span>
                  <select
                    type="text"
                    className="form-control form-select"
                    placeholder="Search by name or past address"
                    aria-label="Username"
                    aria-describedby="basic-addon1" >
                   <option>Select Country...</option>
                   <option>America</option>
                   <option>England</option>
                  <option>India</option>
                    </select>
                <div  onClick={jqueryCode} className='btn add-btn p-2' id='add-btn' >ADD</div>
                </div>

              </div>

         
            </form>
          </div>
        </div>
      </section>
    </div>
        
    </div>
  )
}

export default State