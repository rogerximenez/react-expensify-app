import React from "react";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
  
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <div>{amount}</div>
    <div>{createdAt}</div>
  </div>
  );

export default ExpenseListItem;

