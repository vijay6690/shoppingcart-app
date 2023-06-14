import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const item = useSelector((state) => state.cart.items);
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="text">
            <Link to={"/"} className="text">
              Shoppinng Cart
            </Link>
          </Navbar.Brand>

          <Form className="inp2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                className="inp"
                placeholder="search product"
              />
            </Form.Group>
          </Form>
          <Nav className="drop">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{item.length}</Badge>
              </Dropdown.Toggle>
              <DropdownMenu style={{ minWidth: 370 }}>
                <Dropdown.Item>
                  {item.length > 0 ? (
                    <>
                      {item.map((prod) => (
                        <span className="cart-itemsDrop" key={prod.id}>
                          <img
                            src={prod.thumbnail}
                            className="cartItemImageDrop"
                            alt={prod.name}
                          />
                          <div className="cardItemDetailDrp">
                            <span>{prod.title}</span>
                            <span>${prod.price}</span>
                          </div>
                          {/* <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          } 
                        /> */}
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button
                          className="gocartDrop"
                          style={{ width: "95%", margin: "0 10px" }}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is empty</span>
                  )}
                </Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
          </Nav>
          <div className="signup">
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
          <div className="logout ">
            <Link to="/login">
              <Button>Log Out</Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
