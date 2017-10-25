import Vue from 'vue'
import Axios from 'axios'

Vue.use(Axios);

export function instance(){ 
    return Axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
        headers: { 'Content-Type': 'application/json'}
})}
