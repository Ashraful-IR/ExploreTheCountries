import React, { use } from 'react';

const Countries = ({ countriesPromise }) => {
const countriesData = use(countriesPromise);
const countries= countriesData.countries;
console.log(countriesData);

    return (
        <div>
            <p>Countries{countries.length}</p>
        </div>
    );
};

export default Countries;