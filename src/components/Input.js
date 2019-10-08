import React, { useState } from "react";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const InputComponent = () => {
  const tableDataSource = useSelector(state => state.tableDataSource);
  const input = useSelector(state => state.input);

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const handleChang = event => {
    setInputText(event.target.value);
    //dispatch({ input: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // let { input, tableDataSource } = this.state;
    tableDataSource.push(input);
    dispatch({ tableDataSource });
    setInputText("");
    console.log("inputText", inputText);

    //dispatch({ input: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="iput-form">
          <Input
            placeholder="input"
            type="text"
            value={inputText}
            onChange={handleChang}
          />
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
