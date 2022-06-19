import React, { useState } from 'react'
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
    // start of views / user views
    return (
        [students, setStudents]
    );
    // end of views
}
