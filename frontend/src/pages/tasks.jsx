import LunchWishForm from "../components/old/lunchWishForm";
import Container from "react-bootstrap/Container";
import React, { useEffect } from "react";
import LunchWishList from "../components/lunchWishList";
import { useState } from "react";
import axios from "axios";
import ToDoForm from "../components/toDoForm";
import ToDoList from "../components/toDoList";
import { Col, Row } from "react-bootstrap";

function Tasks() {
  const [lunchWishes, setLunchWishes] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://172.16.16.98:3000/api/lunch-wishes")
  //       .then((res) => {
  //         const fetchedLunchWishes = parseLunchWishes(res);
  //         setLunchWishes([...lunchWishes, ...fetchedLunchWishes]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const onSubmitLunchWish = (event, name, lunchItem) => {
    event.preventDefault();
    const newLunchWish = createLunchWish(name, lunchItem);
    setLunchWishes([...lunchWishes, newLunchWish]);
    axios
      .post("http://172.16.16.98:3000/api/lunch-wishes", {
        name: newLunchWish.name,
        lunch_item: newLunchWish.lunchItem,
      })
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  const toDoItems = [
    { title: "Wash roof", description: "Use a mop and wash with green soap." },
  ];

  return (
    <Row>
      <Col sm={6}>
        <h2>Tasks</h2>
        <ToDoList toDoItems={toDoItems} />
      </Col>
      <Col sm={6}>
        <h2>Add task</h2>
        <ToDoForm onSubmit={onSubmitLunchWish} />
      </Col>
    </Row>
  );
}

function parseLunchWishes(res) {
  return res.data.map((lunchWish) => {
    return createLunchWish(lunchWish.name, lunchWish.lunch_item);
  });
}

function createLunchWish(name, lunchItem) {
  return { name: name, lunchItem: lunchItem };
}

export default Tasks;
