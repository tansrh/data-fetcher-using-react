import React from 'react'
let App=()=>{
  let divi={
    float:'left',
    color:'white',
    marginRight:'2em',
    width:'fitContent',
    height:'100%'
  }
  let st={
    width:'100%',
    height:'fitContent',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
    

  }
  let cnt={
  
    width:'3em',
    height:'3em',
    margin:'2em auto'
  }

 var pg=0;
  var mx=0;
   function f(){
    pg=pg+1; 
    document.getElementById('lower').innerHTML = "";
    document.getElementById('sp').style.display='none';
    fetch(`https://reqres.in/api/users?page=${pg}`)
    .then((response) => response.json())
    .then((json) => (json.data.map((ent)=>{
      
      mx=json.total_pages;
      let c=document.createElement('div');
      c.style.margin="2em auto";
      c.style.border="2px solid black";
      let im=document.createElement('img');
      im.src=ent.avatar;
      im.style.border='2px solid black';
      c.appendChild(im);
      let fn=document.createElement('p');
      fn.innerText="First Name: "+ent.first_name;
      c.appendChild(fn);
      let ln=document.createElement('p');
      ln.innerText="Last Name: "+ent.last_name;
      c.appendChild(ln);
      let i=document.createElement('p');
      i.innerText="Id: "+ent.id;
      c.appendChild(i);
      let email=document.createElement('p');
      email.innerText="Email:"+ent.email;
      c.appendChild(email);
      c.style.width="18em";
      c.style.margin="3em auto";
      c.style.padding="10px 10px";
      c.style.backgroundColor="#D3D3D3";
      c.style.display="flex";
      c.style.flexDirection="column";
      c.style.border="2px solid black";
      document.getElementById('lower').appendChild(c);
    }
    )))}
     let btn={
      width:'5em',
      margin:'0px 5px',
      padding:'2px'
     }
     
     let inp={
      
      backgroundColor:'white',
      width:'5em',
      color:'black',
      textAlign:'center',
      borderRadius:'2px',
      height:'100%'
     }
    return (
    
      <div style={st}>
     <nav className="navbar navbar-dark bg-dark">
  <form className="container-fluid justify-content-start ">
    <div style={divi}>bIG"s</div>
    <button id="next" style={btn} className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{    
      if(mx===0 || pg<mx){
        document.getElementById('inpu').innerText="Page: "+(pg+1);
        document.getElementById('lower').innerHTML = "";
        setTimeout(()=>{
          f();
        }, 800);
        document.getElementById('sp').style.display='block';
       
      }
    }}>Next</button>
     <button id="prev" style={btn} className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
      if(pg>1){
        pg=pg-2;
        document.getElementById('inpu').innerText="Page: "+(pg+1);
        document.getElementById('lower').innerHTML = "";
        setTimeout(()=>{
          f();
        }, 800);
        document.getElementById('sp').style.display='block';
      }     
    }}>Previous</button>
     <div id="inpu" style={inp}>Click Next</div>
  </form>
</nav>
<img id="sp" style={cnt} src="https://i.gifer.com/XOsX.gif" alt="loading...." />
<div id="lower" style={st}>
</div>
</div>
    )
  }
export default App
