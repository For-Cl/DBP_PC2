import axios, {axiosError, type InternalAxiosRequestConfig} from 'axios';
import constants from '../components/common/constants';

interface apiError{
    message?:string;
}

const api=axios.create({
    baseURL: constants.API_HOST,
    headers: {'Content-Type': 'application/json'},
});

