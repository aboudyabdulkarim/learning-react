import "./input.css";

const Input = (props) => {
  return (
    <>
      <div className="input">
        <label>
          {props.txt} :
          <input
            type={props.type}
            onBlur={props.onBlur}
            placeholder={props.pcHolder}
          />
        </label>
      </div>
    </>
  );
};

export default Input;
