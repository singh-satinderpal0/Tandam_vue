import axios from 'axios';
import moment from 'moment-timezone';

let tz = moment.tz.guess();

const instance = axios.create({
    baseURL : 'https://iphoneapps.co.in:7980/api/v1.0/',
    });

    instance.defaults.headers['Build-Type'] = 3;
    // instance.defaults.headers['Fcm-Token'] = '12345678';
    // instance.defaults.headers['Device-ID'] = '12345678';
    instance.defaults.headers['Build-Version'] = 1.0;
    instance.defaults.headers['Platform'] = 3;
    instance.defaults.headers['Time-Zone'] = tz;
    instance.defaults.headers['Language-Code'] = 'en';    
        
    export default instance;