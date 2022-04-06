import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ info }) => {
    return info === null ? null : (
        <Alert variant={info.type} dismissible>
            {info.message}
        </Alert>
    );
};

export default AlertMessage;
