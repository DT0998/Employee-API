// route delete
app.get("/trash", (req, res) => {
    User.findDeleted({}, (err, users) => {
      if (!err) {
        res.render("trash", {
          users: users,
        });
      }
    });
  });
  
  // route get employee 
  app.get("/", (response) => {
    User.find((error, users) => {
     if(error){
       console.log(error);
     }
     response.json(users)
    });
  });
  
  // route post user
  app.post("/", (response) => {
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.save(function (error,user) {
      if (error) {
        console.log(error);
      }
      response(user)
    });
  });
  
  // delete mongodb
  
  // hard delete
  app.post("/force", (req, res) => {
    var id = req.body.id;
    User.deleteOne({ id }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.redirect("/trash");
  });
  
  // soft delete
  app.post("/delete", (req, res) => {
    var id = req.body.id;
    User.delete({ _id: id }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.redirect("/");
  });
  
  //  restore
  app.post("/restore", (req, res) => {
    var id = req.body.id;
    User.restore({ _id: id }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    console.log(id);
    res.redirect("/trash");
  });
  
  // edit mongodb
  app.post("/update", (req, res) => {
    var id = req.body.id;
    User.findById(id, function (err, user) {
      if (err) {
        console.log(err);
      }
      user.name = req.body.name;
      user.email = req.body.email;
      user.save();
    });
    res.redirect("/");
  });