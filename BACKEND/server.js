import express from "express";
const app = express();
app.use(express.static("dist"));
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "second joke",
      content: "This is a second joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is Third joke",
    },
    {
      id: 4,
      title: "fourth joke",
      content: "This is fourth joke",
    },
    {
      id: 5,
      title: "Another joke",
      content: "This is Another joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Lisetening on port http://localhost:${port}`);
});
