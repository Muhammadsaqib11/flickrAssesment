// import React, { useState } from "react";  
// import { Table } from "react-bootstrap";
// const Autocomplete = () => {
//   const [value,setValue]=useState('');
//   const Searchedelement = (searchItem) => {
//     setValue(searchItem);
//     // console.log(searchItem, "SearchItem");
//   }

//   const States=[
//       {'Id': 'AL',
//       'Name' : 'Alabama',
//       'Cities' : ['Montgomeryfeqgwtegw']
//         },
//         {'Id': 'AK',
//         'Name' : 'Alaska',
//         'Cities' : ['Juneau']
//       },
//       {'Id': 'AZ ',
//       'Name' : 'Azizona',
//       'Cities' : ['Phoenix']
//       },
//       {'Id': 'AR',
//       'Name' : 'Arkansas',
//       'Cities' : ['Little Rock']
//       },
//       {'Id': 'CA',
//       'Name' : 'California',
//       'Cities' : ['Sacramento']
//       },
//       {'Id': 'CO',
//       'Name' : 'Colorado',
//       'Cities' : ['Denver']
//       },
//       {'Id': 'DE',
//       'Name' : 'Delaware',
//       'Cities' : ['Dover',]
//       },
//       {'Id': 'FL',
//       'Name' : 'Florida',
//       'Cities' : ['Tallahassee']
//       },
//       {'Id': 'FL',
//       'Name' : 'Alabama',
//       'Cities' : ['Montgomery']
//       }, {'Id': 'GA',
//       'Name' : 'Gorgia',
//       'Cities' : ['Atlanta']
//       }, {'Id': 'HI',
//       'Name' : 'Hawaii',
//       'Cities' : ['Honolulu']
//       }, {'Id': 'ID',
//       'Name' : ' Idaho',
//       'Cities' : ['Boise']
//       }, {'Id': 'KS',
//       'Name' : 'Kansas',
//       'Cities' : ['Topeka']
//       }, {'Id': 'LA',
//       'Name' : 'Louisiana',
//       'Cities' : ['Baton Rouge']
//       }, {'Id': 'MN',
//       'Name' : ' Minnesota',
//       'Cities' : ['St. Paul']
//       }, {'Id': 'MS',
//       'Name' : 'Mississippi',
//       'Cities' : ['Jackson']
//       }, {'Id': 'NC',
//       'Name' : 'North Carolina',
//       'Cities' : ['Raleigh' ]
//       }, {'Id': 'OH',
//       'Name' : ' Ohio',
//       'Cities' : ['Columbus']
//       }, {'Id': 'RI',
//       'Name' : 'Rhode Island',
//       'Cities' : ['Providence']
//       },
// ] 
//     return ( 
//     <div>
//       <h1>Autocomplete Table </h1>

//         <input type='text' placeholder='Search...' value={value} onChange={(e) => setValue(e.target.value)}/>
//         <button onClick={() => Searchedelement(value) }> Search</button>
    
//       <div>
        
//         {States.filter (item =>{
//           const searchTerm = value.toLowerCase ();
//           const full_name= item.Name.toLowerCase();
//           return searchTerm && full_name.startsWith(searchTerm) && full_name !== searchTerm;
//         }).slice(0,10)
//         .map((item) => (<div onClick={() => Searchedelement(item.Name)}>
//        <table class="table table-condensed" style={{width: "15%"}}>
//           <tbody>
//             <tr>
//               <td>{item.Name}</td>
//               <td>{item.Cities}</td>
//             </tr>
//           </tbody>
//          </table>
//           </div>))}
//       </div>
//     </div> );
// }
 
// export default Autocomplete;

