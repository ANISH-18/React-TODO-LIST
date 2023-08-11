import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import "./Create.css";
import { LinkContainer } from "react-router-bootstrap";

function Todo() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://64ae9bf5c85640541d4d608e.mockapi.io/data/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  function handelDelete(id) {
    axios
      .delete(`https://64ae9bf5c85640541d4d608e.mockapi.io/data/data/${id}`)
      .then((res) => {
        alert("Delete Succussfully");
        getData();
      });
    // alert(id);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>TODO LIST</h1>

        {/* <table className="table table-striped table-hover table-responsive">
          <thead className="table-dark"> */}
        <Table responsive striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Description</th>
              <th>Priority</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{eachData.task}</th>
                  <th>{eachData.description}</th>
                  <th>{eachData.priority}</th>
                  <th>
                    <div className="action">
                      <LinkContainer to={"/create/" + eachData.id}>
                        <Button variant="success">Update</Button>
                      </LinkContainer>

                      <Button
                        variant="danger"
                        onClick={(e) => {
                          handelDelete(eachData.id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Todo;
