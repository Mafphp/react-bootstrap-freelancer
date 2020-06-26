import React from 'react';
import DataTable from '../../Components/DataTable';

function Cars() {
    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "category",
         label: "category",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "brand",
         label: "brand",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "model",
         label: "model",
         options: {
          filter: true,
          sort: true,
         }
        },
       ];
       const data = [
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "Joe James", category: "Test Corp", brand: "Yonkers", model: "NY" },
        { name: "John Walsh", category: "Test Corp", brand: "Hartford", model: "CT" },
        { name: "John Walsh", category: "Test Corp", brand: "Hartford", model: "CT" },
        { name: "John Walsh", category: "Test Corp", brand: "Hartford", model: "CT" },
        { name: "John Walsh", category: "Test Corp", brand: "Hartford", model: "CT" },
        { name: "John Walsh", category: "Test Corp", brand: "Hartford", model: "CT" },
        { name: "Bob Herm", category: "Test Corp", brand: "Tampa", model: "FL" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
        { name: "James Houston", category: "Test Corp", brand: "Dallas", model: "TX" },
    ];
    
    return <DataTable data={data} columns={columns} title={"Vehicles List"} />
}

export default Cars;