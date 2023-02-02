import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';

function CompareButton(props) {

    const handleClick = async () => {
        try{
            const response = await axios.get(`http://localhost:3002/?city=${props.selectedCity}`);

            props.onResponse((response.data));

        }
        catch (e){
            console.log(e);
        }
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Compare with second city prices
        </Button>
    );
}

export default CompareButton;