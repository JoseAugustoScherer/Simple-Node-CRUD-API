<h1>To Execute</h1>

To run it on your machine, just update the MongoDB connection string with your own SRV link.

The link is on line 20 of the index.js file.

```
...
mongoose
  .connect(
    "mongodb+srv://<user>:<password>@<appName>.hewefsi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=<appName>"
  )
...
```

<h2>Testing</h2>

To test the APIs, you can use the Thunder Client extension for VS Code, Insomnia, Postman, or any other similar tool
