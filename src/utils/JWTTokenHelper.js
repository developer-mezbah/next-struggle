import jwt from "jsonwebtoken";

const JWTTokenHelper = () => {
  return jwt.sign(
    { foo: "bar" },
    "privateKey",
    { algorithm: "RS256" },
    function (err, token) {
      console.log(token);
    }
  );
};

export default JWTTokenHelper;
