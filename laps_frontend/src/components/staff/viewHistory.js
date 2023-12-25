// import { useState } from 'react';
import axios from "axios";
// import React from 'react';
import { Card } from 'antd';
import React, { useState, useEffect } from 'react';


const ViewHistory = () => {
    const [historyList, setHistoryList] = useState([]);
    const user_id = 1; 

    useEffect(() => {
        axios.get(`http://localhost:8080/api/application/get-application-by-employee-id/${user_id}`)
            .then(response => {
                const filteredData = response.data.map(item => ({
                    fromDate: item.fromDate,
                    leaveType: item.employeeLeaveType,
                    dayOff: item.dayOff,
                    applicationStatus: item.applicationStatus,
                    compensationStart: item.compensationStart
                }));
                setHistoryList(filteredData);
                console.log(filteredData)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []); 


    // const list = [
    //     {
    //         fromDate: 2023 - 11 - 7,
    //         leaveType: 'ANNUAL LEAVE'
    //     },
    //     {
    //         fromDate: 2023 - 11 - 7,
    //         leaveType: 'ANNUAL LEAVE'
    //     }
    // ]

    return (
        <Card title="Application History">
            {historyList.map((item, index) => (
                <Card
                    key={index}
                    style={{ marginTop: 16 }}
                    type="inner"
                    title={item.fromDate}
                    extra={<a href="#">More</a>}
                >
                    <p>Leave Type: {item.leaveType}</p>
                    <p>Days Off: {item.dayOff}</p>
                    <p>Application Status: {item.applicationStatus}</p>
                    {item.compensationStart && (
                        <p>Compensation Start: {item.compensationStart}</p>
                    )}
                </Card>
            ))}
        </Card>
    );
};
export default ViewHistory