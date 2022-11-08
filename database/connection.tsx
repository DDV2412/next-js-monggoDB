import { connect, ConnectOptions } from "mongoose";

const connection = () => {
  connect(String(process.env.MONGO_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
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
