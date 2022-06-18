import React, { useState } from 'react'

export default function DashBoard() {
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
    return (
        <div>
            {
                students.map((student, index) => {
                    return <p>
                        No.#{index} - Name:{student.name}
                    </p>
                })
            }
        </div>
    );
}
