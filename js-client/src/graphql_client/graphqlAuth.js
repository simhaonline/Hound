import axios from 'axios';
import { local } from 'd3';
import {alertSuccess,alertError} from '../helper_functions/alerts'


const graphqlSignUp = async (firstName,lastName,password,email) =>  {
    
    try {
        
        var query = `mutation {
            signUp(firstName: "${firstName}",lastName: "${lastName}", password: "${password}",email: "${email}")
        }`;
        
        var response = await axios({
            url:'/query', 
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {query},
        })

        response = {...response.data}
        const {data,errors} = response
        if (errors) {
            for(let i = 0; i < errors.length;i++) {
                alertError(errors[i].message);
            }
        }
        let dataToken = undefined
        if(data.signUp === "SUCCESS") {
            const  {login: {token}} = await graphqlLogin(email,password)
            dataToken = token
            localStorage.setItem('PhotonToken',token);
            alertSuccess("Welcome to Photon!");
        }
        
        return dataToken

    } catch(e) {
        alertError("Error with server")
        console.log("wrong auth:",e)
    }
    return undefined;
    
}


const graphqlLogin = async (email,password) => {

        var query = `mutation {
            login(password:"${password}",email:"${email}") {
                firstName,
                lastName,
                email,
                token
            }
        }`;
        try {
            var response = await axios({
                url:'/query', 
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: {query},
            })
            response = {...response.data}
            var {data} = response
        } catch(e) {
            console.log('graphclient login fail', e)
        }
        return data
}

export {graphqlSignUp,graphqlLogin};