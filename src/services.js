import axios from './axios';
import { formatCustomTime, formatCustomDate } from './helper/helper';
// import { authProvider } from '../authProvider';

// export const handleLogin = async function login(){
//     const email = await authProvider.getAccount().userName
//     const token = await authProvider.getAccessToken()     
    
    
//     return new Promise((resolve,reject) => {
//         console.log(email);
//         console.log(token.accessToken);
//         localStorage.setItem('username',email)
        
//         const registeration = {
//             email : email, 
//             access_token : token.accessToken,
//         }
        
//         axios.post('/user/login', registeration)
//         .then(response => {            
//             console.log(response);
//             resolve(response)
//         })
//         .catch((err) => {
//             reject(err)
//             const temp = Promise.reject(new Error("Whoops!"));
//             console.log(temp);
//         })  
//     })
// }

export const handleLogin = () =>{
    return new Promise((resolve,reject) => {

        const registeration = {
            email : "test.user3@swiftoffice.org", 
        }
        
        axios.post('/user/withoutlogin', registeration)
        .then(response => {            
            console.log(response);
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })  
    })
}

export const handleLogout = (auth) => {
    return new Promise((resolve,reject) => {
        var headers = {
            Authorization : auth
        }
        axios.get('/user/logout',{headers})
        .then(response => {            
            // console.log(response);
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })  
    })
}

export const getListWhosIN = (auth,date) => {
    // console.log(date);
    
    return new Promise((resolve,reject) => {
        var params = {
            date: date
        }
        var headers = {
            Authorization: auth,
            }
                        
        axios.get('/whois',{headers,params} )
        .then(response => {
            // console.log(response);            
            resolve(response)
        })
        .catch((err) => {
            // console.log(err);
            
            reject(err)
        })  
    })
}

export const createProgram = (auth,data,shift,v_list,users) => {    

    console.log(data);
    

    const v = [...v_list]

    const vehicles = v.map((d)=>{
        console.log(d);
        const temp = 
            {
              title: d.VehicleTitle,
              v_s_t: formatCustomTime(d.start,':'),
              v_e_t: formatCustomTime(d.end,':'),
              vehicle_no: d.vehicleNo,
              additional_info: d.locationVal,
              support_user_id: d.eelId,
              user_id:  d.personsList ? d.personsList.map(data => {
                return data.id
            }) : ""
            }
        return temp
    })
    //  console.log(data);
    return new Promise((resolve,reject) => {
        var paramsMorning = {
            date : data[0].date,
            oot_morning : data[0].oatMeal,
            oct_morning : data[0].emerald,
            vmt_morning : data[0].beef,
            ws_o_time : data[0].pancake,
            vehicles : vehicles
        }
        var paramsEvening = {
            date : data[0].date,
            oot_evening :   data[0].oatMeal,
            oct_evening :   data[0].emerald,
            vmt_evening :   data[0].beef,
            ws_o_time : data[0].pancake,
            vehicles : [...vehicles]
        }

        const params = shift ? paramsMorning : paramsEvening

        var headers = {
            Authorization: auth,
            }
                        
        axios.post('/programme',params,{ headers: headers } )
        .then(response => {
            console.log(response);
            
            resolve(response)
        })
        .catch((err) => {
            console.log(err);
            
            reject(err)
        })  
    })
}

export const getListOfProgrammes = (auth,Start,End) => {
    // console.log(auth,Start,End);
    
    return new Promise((resolve,reject) => {
        var params = {
            start_date : Start ,
            end_date : End
        }
        var headers = {
            Authorization: auth,
            }
                        
        axios.get('/programme/count',{headers,params} )
        .then(response => {
            // console.log(response);            
            resolve(response)
        })
        .catch((err) => {
            // console.log(err);
            
            reject(err)
        })  
    })
}

export const getProgrammeById = (auth,id) => {
    console.log((id));
    
    return new Promise((resolve,reject) => {
        var headers = {
            Authorization: auth,
            }         
        axios.get('/programme/'+id,{headers} )
        .then(response => {
            // console.log(response);            
            resolve(response)
        })
        .catch((err) => {
            // console.log(err);
            
            reject(err)
        })  
    })
}

export const getUserList = (auth,date) => {
    // console.log(date);
    // console.log(auth);
    
    
    return new Promise((resolve,reject) => {
        var params = {
            available : 1,
            date: date
        }
        var headers = {
            Authorization: auth,
            }
                        
        axios.get('/user/list',{headers,params} )
        .then(response => {
            // console.log(response);            
            resolve(response)
        })
        .catch((err) => {
            // console.log(err);
            reject(err)
        })  
    })
}

export const updateProgram = (auth,data,shift,v_list,updateVehicleId,removedList) => {    
    const v = [...v_list]

    let remove = removedList.filter(data => {
            return data.user_id.length > 0
        })

    const vehicles = v.map((d)=>{   
        const temp = 
            {
              vehicle_id : d.id,
              title: d.VehicleTitle,
              v_s_t: formatCustomTime(d.start,':'),
              v_e_t: formatCustomTime(d.end,':'),
              vehicle_no: d.vehicleNo,
              additional_info: d.locationVal,
              support_user_id: d.eelId,
              user_id:  d.personsList ? d.personsList.map(data => {
                return data.id
            }) : ""
            }
        return temp
    })
     
    return new Promise((resolve,reject) => {
        var paramsMorning = {
            programme_id : data[0].programme_id ,
            date : formatCustomDate(data[0].date,'-'),
            oot_morning : formatCustomTime(data[0].oatMeal,':'),
            oct_morning : formatCustomTime(data[0].emerald,':'),
            vmt_morning : formatCustomTime(data[0].beef,':'),
            ws_o_time   : formatCustomTime(data[0].pancake,':'),
            vehicles : vehicles,
            remove_users_vehicles : remove,         
            remove_vehicles: [ ],
        }
        var paramsEvening = {
            date : data[0].date,
            oot_evening :   data[0].oatMeal,
            oct_evening :   data[0].emerald,
            vmt_evening :   data[0].beef,
            ws_o_time : data[0].pancake,
            vehicles : [...vehicles]
        }
        const params = shift ? paramsMorning : paramsEvening

        var headers = {
            Authorization: auth,
            }
            console.log(params);
                        
        axios.put('/programme',params,{ headers: headers } )
        .then(response => {
            console.log(response);
            resolve(response)
        })
        .catch((err) => {
            // console.log(err);
            
            reject(err)
        })  
    })
}