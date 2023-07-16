import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Create.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Create() {
  let { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({
    task: "",
    description: "",
    priority: "",
  });

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handelSubmit = () => {
    // alert("Function Working");
    // validation code
    if (!data.task) {
      alert("Task is required");
      return;
    }
    if (!data.description) {
      alert("Description is required");
      return;
    }
    if (!data.priority) {
      alert("Priority is required");
      return;
    }
    // validation complete
    if (id === undefined) {
      axios
        .post("https://64ae9bf5c85640541d4d608e.mockapi.io/data/data", data)
        .then((res) => {
          console.log(res.data);
          alert("Data Submitted");
          // submitNotify();
          navigate("/");
        });
    } else {
      axios
        .put(
          `https://64ae9bf5c85640541d4d608e.mockapi.io/data/data/${id}`,
          data
        )
        .then((res) => {
          console.log(res.data);
          alert("Data Updated Successfully");
          navigate("/");
        });
    }
  };

  const getData = (id) => {
    axios
      .get(`https://64ae9bf5c85640541d4d608e.mockapi.io/data/data/${id}`)
      .then((res) => {
        setData({
          task: res.data.task,
          description: res.data.description,
          priority: res.data.priority,
        });
      });
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  return (
    <div>
      <div className="container ">
        <h1>Create a TODO</h1>
        <div className="col-lg-6">
          <Form>
            <h3>Task</h3>

            <input
              type="task"
              name="task"
              value={data.task}
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Task "
              onChange={(e) => {
                handelChange(e);
              }}
            />

            <h3>Description</h3>

            <input
              type="task"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Description"
              name="description"
              value={data.description}
              onChange={(e) => {
                handelChange(e);
              }}
            />
            <h3>Select Priority</h3>
            <Form.Select
              aria-label="Default select example"
              className=""
              name="priority"
              value={data.priority}
              onChange={(e) => {
                handelChange(e);
              }}
            >
              {/* <option>Select Task Priority</option> */}
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>

            <Button
              variant="success"
              className="mt-3"
              onClick={() => {
                handelSubmit();
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}

export default Create;
