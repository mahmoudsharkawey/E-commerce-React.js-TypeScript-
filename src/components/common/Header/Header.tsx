import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";

const {
    headerContainer,
    headerLogo,
    spamlogo,
    basket,
} = styles;

const Header = () => {
    const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span className={spamlogo}>Eco</span>Dev
                </h1>
                <div className={basket}>
                    <ShoppingCart size="30" />
                    <h4>({totalQuantity})</h4>
                </div>
            </div>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="categories">
                                Categories
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="about">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
