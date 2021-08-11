const fs = require("fs");

function templateStart(){
    fs.appendFile("./dist/index.html", `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header class="d-flex justify-content-center"> 
            <h1 > My Team </h1> 
        </header>`,
        function(err) {
            if(err) console.log('error', err);
        }
    )}

function templateManager(manager){
    fs.appendFile("./dist/index.html", `<div class="d-flex justify-content-center container manager"> 

   <div class="card m-2" style="width: 36rem;">
       <h5 class="card-title"> ${manager.getName()}</h5>
       <h6 class="card-subtitle mb-2 text-muted"> ${manager.getRole()} </h6>
       <ul class="list-group list-group-flush">
           <li class="list-group-item"> ${manager.getId()} </li>
           <li class="list-group-item"> ${manager.getEmail()} </li>
           <li class="list-group-item"> ${manager.getOfficeNumber()} </li>
       </ul>
     </div>

      

</div>

<div class="container d-flex justify-content-center workers">
        <div class="row">
`, 
    function(err) {
      if(err) console.log('error', err);
    })
}

function templateEngineer(engineer){
    fs.appendFile("./dist/index.html", `<div class="col">
  <div class="card m-2" style="width: 18rem;">
      <h5 class="card-title">${engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> ${engineer.getRole()} </h6>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${engineer.getId()} </li>
          <li class="list-group-item"> ${engineer.getId()} </li>
          <li class="list-group-item"> ${employee.getGitHub()} </li>
      </ul>
    </div>
</div>`,
    function(err) {
        if(err) console.log('error', err);
    })
}

function templateIntern(intern){
    fs.appendFile("./dist/index.html", `<div class="col">
  <div class="card m-2" style="width: 18rem;">
      <h5 class="card-title">${intern.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted"> ${intern.getRole()} </h6>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${intern.getId()} </li>
          <li class="list-group-item"> ${intern.getEmail()} </li>
          <li class="list-group-item"> ${intern.getSchool()} </li>
      </ul>
    </div>
</div>`,
    function(err) {
        if(err) console.log('error', err);
    })
}

function templateEnd(){
    fs.appendFile("./dist/index.html", `</div>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>`,
    function(err) {
        if(err) console.log('error', err);
    }
    )}

module.exports = {
    templateStart,
    templateManager,
    templateEngineer,
    templateEnd,
    templateIntern,

};
