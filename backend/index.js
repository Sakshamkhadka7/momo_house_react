// npm init -y
import express from "express";
const app = express();

// middleware manupulate req and res

const mid = (req, res, next) => {
  console.log("This is mid");
  next();
};

// types of middleware
// 1) Application level middleware / global middlware

// app.use(mid); // this is global and attach in every route

// 2) Route level middleware

// 3) inbuilt middleware

app.use(express.json()); // it is used to passed a data from frontend to body and used by every route

// 4) Third party middleware made by other and we used by installing

// multer,cors

// 5) Error handling middleware
// does party is made by express is inbuilt and that we download that is third party

app.get("/", mid, (req, res) => {
  console.log(req);
  console.log("Home");
  res.send("This is Home page ");
});
app.get("/user", (req, res) => {
  res.send("This is user page ");
});

app.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("This is delete page");
});

app.get("/searchUser", (req, res) => {
  console.log(req.query);
  console.log(req.query.q);
  console.log(req.query.w);

  res.send("This is searchUser");
});

app.put("/updateUser", (req, res) => {
  res.send("This is update page");
});

app.patch("/updateSingleUser", (req, res) => {
  res.send("This is updateSingleUser Page");
});

app.post("/createUser", (req, res) => {
    console.log(req.body.name);
  res.send("This is createUser page");
});

app.listen(9000, () => {
  console.log("Server is running at port number 9000 !");
});
