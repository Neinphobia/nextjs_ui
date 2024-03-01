// pages/api/data.js
export default async function handler(req, res) {
    // Fetch data from an API, database, etc.
    const response = await fetch('https://kocyasaadmin.sigmas0ftware.com/api/examination-and-operating-room-solutions?populate=deep');
    const data = await response.json();
   
    // Return the data as JSON
    res.status(200).json(data);
   }
   