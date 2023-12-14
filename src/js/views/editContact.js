import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const editContact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			
		</div>
	);
};


