import axios from "axios";



// export const getCities = async (cityName) => {
  
//   const URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'
//   const options = {
      
//       params: {
//         limit: 10,
        
//       },
//       headers: {
//         'X-RapidAPI-Key': 'c433fbdd9cmshb778d9443e01b92p102a18jsnaa87bc28776b',
//         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//       }
//   };

//     try{
//        const {data : {data}} = await axios.get(URL, options)

//        return data
//     } catch (error) {

//         console.log(error)
//     }

   
    
// }

export const getAllCities = async (allCities) => {
  
  const URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'
  const options = {
      
      params: { 
        limit: 9 
      },
      headers: {
        'X-RapidAPI-Key': 'c433fbdd9cmshb778d9443e01b92p102a18jsnaa87bc28776b',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
  };

    try{
       const {data : {data}} = await axios.get(URL, options)
      const allData = data[0]
      console.log(allData)
      return allData
       
    } catch (error) {

        console.log(error)
    }

   
    
}