import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 mb-2">Login With</h3>
      <Button variant="primary">
        {" "}
        <FaGoogle /> Google
      </Button>
      <br />
      <Button className="mt-1" variant="secondary">
        <FaGithub /> Github
      </Button>
      <div className="text-center">
        <h3 className="mt-4 mb-2">Find us on</h3>
        <ListGroup className="w-50 mx-auto mb-5">
          <ListGroup.Item className="p-3">
            {" "}
            <FaFacebookSquare /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            {" "}
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            {" "}
            <FaTwitterSquare /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <img src="https://iili.io/HSBFSwP.png" alt="" srcset="" />
    </div>
  );
};

//FcGoogle

export default RightNav;
