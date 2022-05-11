import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

export default function HomePage() {
    let navigateTo = useNavigate()

    function Cars() {
        navigateTo('/cars')
    }
    function CarID() {
        navigateTo('/carid')
    }
    function CarMake() {
        navigateTo('/carmake')
    }
    function AddCar() {
        navigateTo('/addcar')
    } 
    function EditCar() {
        navigateTo('/editcar')
    } 
    return (
        <div>
            <h1>HOME</h1>
            <button onClick={Cars}>All cars in database</button>
            <button onClick={CarID}>Car from car id</button>
            <button onClick={CarMake}>Car from car make</button>
            <button onClick={AddCar}>Add car to database</button>
            <button onClick={EditCar}>Edit car in the database</button>
        </div>
    )
}