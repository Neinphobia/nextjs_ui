const Anasayfa = ({ data }) => {
   console.log(data);
   return (
      <div>
        <h1>Home Page</h1>
        {/* Render your data here */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
   );
  };
  export default Anasayfa;
  
  export async function getServerSideProps() {
   try {
      const res = await fetch('https://kocyasaadmin.sigmas0ftware.com/api/examination-and-operating-room-solutions?populate=deep');
      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      const data = await res.json();
      console.log('Fetched data:', data);
      return { props: { data } };
   } catch (error) {
      console.error('Error fetching data:', error);
      return { props: { data: null } }; // Return null or an error message as props
   }
  }
  
  