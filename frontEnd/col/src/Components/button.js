import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';



function GoButton(props) {

    const handleClick = async () => {
        console.log(`Selected City: ${props.selectedCity}`);

        try{
            const response = await axios.get(`http://localhost:3002/?city=${props.selectedCity}`);
            props.onResponse((response.data));
            console.log(response.data)

        }
        catch (e){
            console.log(e);
        }

    };

    return (
        <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
            Find Apartment Costs of First City
        </Button>
        </div>
    );
}

export default GoButton;