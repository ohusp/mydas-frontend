import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import Logo from 'assets/img/logo.png';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="transparent" navbar className="nav-background">
            <NavbarContainer>
                <NavbarWrapper>
                    <Link
                        to="/"
                        rel="noreferrer"
                    >
                        {/* <NavbarBrand> */}
                            {/* MYDAS Tutors */}
                            <img className="logo" src={Logo} alt="logo" />
                        {/* </NavbarBrand> */}
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <Link 
                                to="/"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Home
                            </Link>
                            <Link 
                                to="/who-we-are"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Who We Are
                            </Link>
                            <Link 
                                to="/programmes"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Programmes
                            </Link>
                            <Link 
                                to="/contact"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Contact
                            </Link>
                            <Link 
                                to="/"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Enrol Now
                            </Link>
                            <Dropdown
                                style={{color: "#ffffff"}}
                                color="transparent"
                                size="sm"
                                buttonType="link"
                                buttonText={
                                    <div className="py-2.5 font-medium flex items-center">
                                        <Icon
                                            name="view_carousel"
                                            size="2xl"
                                            color="white"
                                        />
                                        <span className="ml-2">
                                            Login
                                        </span>
                                    </div>
                                }
                                ripple="light"
                            >
                                <a href="https://mydas-dashboard.brickpine.com/student_signin">
                                    <DropdownItem color="lightBlue">
                                        Student Log in
                                    </DropdownItem>
                                </a>
                                <a href="https://mydas-dashboard.brickpine.com/user_signin">
                                    <DropdownItem color="lightBlue">
                                        User/Parent Log in
                                    </DropdownItem>
                                </a>
                            </Dropdown>
                            {/* <Link 
                                to="/"
                                style={{color: "#fff"}}
                                className="false false px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
                            >
                                <Icon 
                                    name="description" 
                                    size="2xl" 
                                    className="material-icons undefined text-2xl leading-none"
                                />
                                &nbsp;Legal Terms
                            </Link> */}



                            {/* <NavLink
                                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="description" size="2xl" />
                                &nbsp;Docs
                            </NavLink>
                            <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="apps" size="2xl" />
                                &nbsp;Components
                            </NavLink>
                            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Templates
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div> */}
                            {/* <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Issues
                            </NavLink> */}
                            {/* <a
                                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                >
                                    Free Download
                                </Button>
                            </a> */}
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
