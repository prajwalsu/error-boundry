import React, { useState } from 'react'

function PersonDetail() {

    const [person, setPerson] = useState({
        userName:"Ram",
        age: 20,
    });
    return (
        <div>
            {person.userName} 
            {/* .filter() method only for arrays */}
        </div>
    )
}

export default PersonDetail;


