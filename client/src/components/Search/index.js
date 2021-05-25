import React from 'react';
export default function Search({ filterByLocation, location, setLocation }) {
    return (
        <div className="w-100">
            <input placeholder="Search by location" className="p-2 w-50 mr-2 rounded" type="text" name="search" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="button" className="btn btn-primary px-3 mb-2 p-2 rounded" onClick={filterByLocation}>Search</button>
        </div>
    )
};



