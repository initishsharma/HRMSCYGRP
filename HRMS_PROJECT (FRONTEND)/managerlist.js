
    fetch("https://localhost:44315/api/Employee/Managerlist",
    {
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
        
  
 console.log(data);
        let options = "<option>" + "Select Apointed Manager" + "</option>";
        for (var i = 0; i < data.length; i++) 
        {
            options += "<option>" + data[i].empname + "</option>";
        }

            $("#managernamelist").html(options);
        // document.getElementById("managernamelist").append = li;

   
  
        // do something with data
      });
    