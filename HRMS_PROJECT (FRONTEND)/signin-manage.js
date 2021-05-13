
  
    // ----------- ADD USER FUNCTION IS HERE //// 
  
  
    function AddEmployee(){
      var EmployeeName = document.getElementById("empname");
      var EmployeeEmailId = document.getElementById("empemailid");
      var EmployeePassword = abc();
      var EmployeeContact = document.getElementById("empcontact");    
      var e = document.getElementById("empdesg");
      var EmployeeDesg = e.options[e.selectedIndex].text;
      var x = document.getElementById("managernamelist");
      var EmployeeAM = x.options[x.selectedIndex].text;
      
      var EmployeeRole=null;
      if(EmployeeDesg=='Manager') EmployeeRole=2;
      else EmployeeRole=3;
  
      var tempUser = {
        "empname": EmployeeName.value,
        "emailid": EmployeeEmailId.value,
        "password": EmployeePassword,
        "desg": EmployeeDesg,
        "contact": EmployeeContact.value,      
        "amid": EmployeeAM,
        "role": EmployeeRole
      };
      console.log(tempUser);
      fetch("https://localhost:44315/api/employee", 
      {
           
    
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(tempUser),
      })
  
      console.log("New Account Added");
      
    
    }
  
    function abc(){
      console.log("aagaya yaha")
      var a=document.getElementById("emppass");
      var md5Hash = CryptoJS.MD5(a.value); 
      
      console.log(md5Hash.toString()); 
      return md5Hash.toString();
      }
  
  
    // -------------- FETCH DATA FROM EMPLOYEE TABLE ------------ 
  
    function EmployeeFetchData() {
      fetch("https://localhost:44315/api/employee", {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
      })
        .then((res) => res.json())
    
        .then((data) => {
          
    
          // console.log(data);
          let li = ``;
          data.forEach((EmployeeFetch) => {
            // console.log(EmployeeFetch);
            li += `<tr>
                  
                  <td>${EmployeeFetch.empname}</td>
                  <td>${EmployeeFetch.emailid} </td>
                  <td>${EmployeeFetch.desg}</td>
                  <td>${EmployeeFetch.contact}</td>
                  <td>${EmployeeFetch.amid}</td>
                             
                  </tr>`;
          });
          document.getElementById("employeedata").innerHTML = li;
          // console.log("worked");
          // console.log(EmployeeFetch);
    
          // do something with data
        })
        .catch(function (error) {
    
          console.log("Looks like there was a problem: \n", error);
        });
    
        
    }



    var e=window.localStorage.getItem("email");
    var g=window.localStorage.getItem("email");

    
  fetch('https://localhost:44315/api/employee/'+e)
  .then(response => response.json())
  .then(data => window.localStorage.setItem('id',data));

  fetch('https://localhost:44315/api/employee/getrole/'+g)
  .then(response => response.json())
  .then(data => window.localStorage.setItem('Role',data));

  var ID=window.localStorage.getItem("id");
  console.log(ID);


