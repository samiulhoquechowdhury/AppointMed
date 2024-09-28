// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Doctors = () => {
//   const {speciality} = useParams();
//   const [filterDoc,setFilterDoc] = useState([]);
//   const { doctor} = useContext(AppContext)

//   const applyFilter = () =>{
//     if(speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(()=>{
//     applyFilter
//   },[doctors, speciality])

//   return (
//     <div>
//       <p>Browse through the doctors speciality</p>
//       <div>
//         <div>
//           <p>Generak Physician</p>
//           <p>Gyneocologist</p>
//           <p>Dermatologist</p>
//           <p>Pediatrician</p>
//           <p>Neurologist</p>
//           <p>Gastroenterologist</p>
//         </div>
//       </div>
//       {
//         filterDoc.map((item, index) =>(

//         ))
//       }
//     </div>
//   );
// };

// export default Doctors;

import React from "react";

const Doctors = () => {
  return <div></div>;
};

export default Doctors;
