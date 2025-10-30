//CRUD create read update delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const connectionURL = "mongodb://localhost:27017";
// const database = "task-manager";

// MongoClient.connect(connectionURL, (error, client) => {
//   if (error) {
//     return console.log("Unable to connect to database");
//   }

//   console.log("connected correctly!");
// });
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// const id = new ObjectId();

// console.log("id", id);
// console.log("id time step", id.getTimestamp());
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("task-manager");
    await db.command({ ping: 1 });
    const usersCollection = db.collection("users");
    /**<======================================================================= CRUD C START=====================================================================>**/
    // const result = usersCollection.insertOne({
    //   _id: id,
    //   name: "bilibili",
    //   age: 35,
    // });
    // const result = usersCollection.insertMany([
    //   {
    //     name: "olivia",
    //     age: 19,
    //   },
    //   {
    //     name: "oreo",
    //     age: 4,
    //   },
    //   {
    //     name: "eleven",
    //     age: 3,
    //   },
    // ]);
    /**<======================================================================= CRUD C END=======================================================================>**/

    /**<=======================================================================CRUD R START=====================================================================>**/
    // ******************************
    // find one will always return the firest one
    // ******************************
    // const result = usersCollection.findOne({
    //   name: "olivia",
    // });

    // ******************************
    // search by id
    // ******************************
    // const result = usersCollection.findOne({
    //   _id: new ObjectId("66fb738e71d36a29b644b2a5"),
    // });

    // ******************************
    // search all with condition and count the number
    // ******************************
    // const result = usersCollection.find({ name: "olivia" }).toArray();
    // const result = usersCollection.find({ age: { $lt: 30 } }).toArray();
    // const result = usersCollection.countDocuments({ age: { $gt: 2 } });
    /**<=======================================================================CRUD R END=======================================================================>**/

    /**<=======================================================================CRUD U START=====================================================================>**/
    // const result = usersCollection.updateOne(
    //   {
    //     _id: new ObjectId("66fb738e71d36a29b644b2a5"),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // );
    const result = usersCollection.updateMany(
      { age: 4 },
      {
        $inc: {
          age: 1,
        },
      }
    );
    /**<=======================================================================CRUD U END=======================================================================>**/

    console.log("result", await result);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("error", error);
  } finally {
    // Ensures that the client will close when you finish/error                                            ~
    await client.close();
  }
}
run().catch(console.dir);
