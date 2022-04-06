import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ info }) => {
    const [show, setShow] = useState(info === null ? true : info.show);

    return info === null
        ? null
        : show && (
              <Alert
                  variant={info.type}
                  onClose={() => setShow(false)}
                  dismissible
              >
                  {info.message}
              </Alert>
          );
};

export default AlertMessage;
