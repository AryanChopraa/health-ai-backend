const {Patient,Doctor} = require('../models/');
const bcrypt = require('bcrypt');


const registerUser = async (UserDetails) => {
    try {
        console.log("from the auth service",UserDetails)
        const {name,email,phone,gender,password}=UserDetails
        // let hashedPassword= await bcrypt.hash(password,10)
        const existingUser = await Patient.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser = await Patient.create({
            email: email,
            password: password,
            name: name,
            gender:gender,
            phone:phone
        });
        return newUser;
    
    } catch (error) {
        
        throw new Error(error);
    }
};

const loginUser = async (UserDetails) => {
    try {
        const {email,password}=UserDetails
     
        const existingUser = await Patient.findOne({ where: { email } });
        if (!existingUser) {
            throw new Error('User doesnt exists');
        }
        const isPasswordValid = password === existingUser.password;
        console.log("isPasswordValid - ",isPasswordValid)
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        return existingUser;
    } catch (error) {
        // Handle errors
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
};

const registerDoctor = async (UserDetails) => {
    try {
        const {email,password,name}=UserDetails

        // let hashedPassword= await bcrypt.hash(password,10)
        

        const existingUser = await Doctor.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists');
            
        }
        const newUser = await Doctor.create({
            email: email,
            Password: password,
            Name: name,
        });
        return newUser;
    
    } catch (error) {
        
        throw new Error(error);
    }
};

const loginDoctor = async (UserDetails) => {
    try {
        const {email,password}=UserDetails
     
        const existingUser = await Doctor.findOne({ where: { email } });
        if (!existingUser) {
            throw new Error('User doesnt exists');
        }
        console.log("existingUser - ",existingUser.password)
        const isPasswordValid = password == existingUser.password;
        console.log("isPasswordValid - ",isPasswordValid)
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        return existingUser;
    } catch (error) {
        // Handle errors
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
};

module.exports = {
    registerUser,
    loginUser,
    registerDoctor,
    loginDoctor
};
