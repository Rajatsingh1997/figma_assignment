import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./Update";
import "./InputForm.css";

function InputForm(props) {
  const [input, setInput] = useState("");
  const [error, seterror] = useState(false);

  const handleclick = (event) => {
    event.preventDefault();
    if (input === "") {
      seterror(true);
      event.preventDefault();
    } else {
      props.addTodo(input);
      setInput("");
      seterror(false);
      props.handleClose();
    }
  };

  return (
    <div className="forminput">
      <>
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className="modhead">Add Todo</h3>
            </Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <textarea
                className={error ? "textarea-error" : "textarea"}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows="4"
                cols="50"
              ></textarea>
              {error ? <Update /> : " "}
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                className="btncancel"
                onClick={props.handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="btndone"
                onClick={handleclick}
              >
                Done
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    </div>
  );
}

export default InputForm;
