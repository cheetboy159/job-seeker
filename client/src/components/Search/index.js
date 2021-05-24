import React from 'react';
export default function Search({ filterByLocation, location, setLocation }) {
    return (
        <div className="w-100">
            <input type="text" name="search" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="button" className="btn btn-primary" onClick={filterByLocation}>Search</button>
        </div>
    )
};



