import React from 'react'

function Alerts(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // props.alert && is used if this props.alert is null then further statement will not be executed but when it is not null then statement after && will be executed!
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>
                {capitalize(props.alert.type)}

            </strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}  
            {/* Cross is removing bcz we are now auto hatiyang alert in 2 sec */}
        </div>

    )
}

export default Alerts
