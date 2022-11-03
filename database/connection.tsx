import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then((res) => {
      console.log(
        "Connected to Distribution API Database - Initial Connection"
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export default connection;
