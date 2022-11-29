import Input from "../../Components/inputWithProps/Input";
import "./thirdsection.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("prevented default");
  };
  return (
    <div className="container">
      <div className="register">
        <form>
          <Input txt="Username" pcHolder="Username" type="text" />
          <Input txt="Email" pcHolder="Email" type="email" />
          <Input txt="Password" pcHolder="Password" type="password" />
          <Input txt="abbude" type="text" />
          <Input txt="firstname" pcHolder="firstname" type="text" />
          <div>
            <button onClick={handleSubmit}> Submit! </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

Input.defaultProps = {
  type: "password",
  pcHolder: "abbude",
};
