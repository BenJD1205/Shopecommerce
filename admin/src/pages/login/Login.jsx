import React, { useEffect } from "react";
import "./login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from "react-router";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
		history.push("/");
	};

	return (
		<div className="login">
			<form action="" className="loginForm">
				<input
					type="text"
					placeholder="Username"
					className="loginInput"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					className="loginInput"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="loginButton" onClick={handleClick}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
