import axios from "axios";

const URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

const options = {
    
    params: {
      q: 'London,uk',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: 'imperial',
      mode: 'xml'
    },
    headers: {
      'X-RapidAPI-Key': 'c433fbdd9cmshb778d9443e01b92p102a18jsnaa87bc28776b',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

export const getCities = async () => {
    try{
       const data = await axios.get(URL, options)

       return data
    } catch (error) {

        console.log(error)
    }

   
    
}