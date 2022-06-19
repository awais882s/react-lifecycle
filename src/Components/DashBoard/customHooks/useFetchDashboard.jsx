import React, { useState, useEffect } from 'react'
export default function useFetchBoard() {
    // logics
    const [students, setStudents] = useState([
        {
            name: "awais",
            id: "1234"
        },
        {
            name: "bilal",
            id: "1237"
        },
        {
            name: "hadia",
            id: "1934"
        }
    ])
    // end of logic
    useEffect(() => {
        console.log("name");
    }, [])

    // logics return
    return (
        [students, setStudents]
    );
    // end of views
}
