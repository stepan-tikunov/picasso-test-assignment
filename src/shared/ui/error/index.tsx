import React from "react";

import { Alert, Button } from "antd";

interface ErrorAlertProps {
    description: string;
    action?: {
        fn: () => void;
        description: string;
    };
}

export const ErrorAlert: React.FC<ErrorAlertProps> = (props) => {
    const { description, action: actionProps } = props;

    let action;
    if (actionProps !== undefined) {
        action = (
            <Button onClick={actionProps.fn} size="small" danger>
                {actionProps.description}
            </Button>
        );
    }

    return (
        <Alert
            message="Error"
            type="error"
            showIcon
            action={action}
            description={description}
        />
    );
};
