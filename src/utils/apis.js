import axios from 'axios';

export default {
  user: {
    login: credentials =>
      axios
        .post('/api/user/login', {
          email: credentials.email,
          password: credentials.password
        })
        .then(res => res.data),
    fetchUserData: () =>
      axios.get('/api/user/getuserdata').then(res => res.data)
  },
  property:{
    fetchProperties:()=>axios.get('/api/property/allproperties').then((res)=>res.data),
    fetchPropertyDetail:(id)=>axios.get(`/api/property/propertydetails/${id}`).then(res=>res.data)
  }
};
