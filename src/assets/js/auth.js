

const getToken = function (param){ 
  const token = JSON.parse(window.localStorage.getItem("admin-token")).token
  return token
}



export default getToken