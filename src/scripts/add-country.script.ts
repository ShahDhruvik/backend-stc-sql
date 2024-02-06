import mongoose from "mongoose";
import connectDb from "../config/database.config";
import CountryModel from "../model/country.model";
import countries from '../data/countries.json'
const createCountries = async () => {
    try {
        console.log("---ADDING COUNTRIES----")
        connectDb()
        await CountryModel.insertMany(countries)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

createCountries();