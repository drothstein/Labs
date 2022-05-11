import React, { useState } from 'react'
import './App.css';
import { useNavigate } from "react-router-dom";

export default function CarID() {
    const [allCars, setAllCars] = useState([])
    const [carId, setCarId] = useState()
    let navigateTo = useNavigate()
    
    async function getData() {
        try {
            const res = await fetch('http://localhost:8080/cars/car_id/' + carId)
            const resJSON = await res.json()
            setAllCars(resJSON.data)
            console.log(allCars)
            console.log('TEST with .data', resJSON.data[0].Timestamp)
            console.log('TEST without', resJSON[0].Timestamp)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
             <button onClick={() => navigateTo('/')}>Go Back</button>
            <h1>CAR ID</h1>
            <input onChange={(event) => setCarId(event.target.value)} />
            <button onClick={getData}>Fetch one car</button>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Car_ID</th>
                        <th>Judge_ID</th>
                        <th>Judge_Name</th>
                        <th>Racer_Turbo</th>
                        <th>Racer_Supercharged</th>
                        <th>Racer_Performance</th>
                        <th>Racer_Horsepower</th>
                        <th>Car_Overall</th>
                        <th>Engine_Modifications</th>
                        <th>Engine_Performance</th>
                        <th>Engine_Chrome</th>
                        <th>Engine_Detailing</th>
                        <th>Engine_Cleanliness</th>
                        <th>Body_Frame_Undercarriage</th>
                        <th>Body_Frame_Suspension</th>
                        <th>Body_Frame_Chrome</th>
                        <th>Body_Frame_Detailing</th>
                        <th>Body_Frame_Cleanliness</th>
                        <th>Mods_Paint</th>
                        <th>Mods_Body</th>
                        <th>Mods_Wrap</th>
                        <th>Mods_Rims</th>
                        <th>Mods_Interior</th>
                        <th>Mods_Other</th>
                        <th>Mods_ICE</th>
                        <th>Mods_Aftermarket</th>
                        <th>Mods_WIP</th>
                        <th>Mods_Overall</th>
                    </tr>
                </thead>
                <tbody>
                    {allCars.map((cars, i) => {
                        return (
                            <tr>
                                <td>{allCars[i].Timestamp}</td>
                                <td>{allCars[i].Email}</td>
                                <td>{allCars[i].Name}</td>
                                <td>{allCars[i].Year}</td>
                                <td>{allCars[i].Make}</td>
                                <td>{allCars[i].Model}</td>
                                <td>{allCars[i].Car_ID}</td>
                                <td>{allCars[i].Judge_ID}</td>
                                <td>{allCars[i].Judge_Name}</td>
                                <td>{allCars[i].Racer_Turbo}</td>
                                <td>{allCars[i].Racer_Supercharged}</td>
                                <td>{allCars[i].Racer_Performance}</td>
                                <td>{allCars[i].Racer_Horsepower}</td>
                                <td>{allCars[i].Car_Overall}</td>
                                <td>{allCars[i].Engine_Modifications}</td>
                                <td>{allCars[i].Engine_Performance}</td>
                                <td>{allCars[i].Engine_Chrome}</td>
                                <td>{allCars[i].Engine_Detailing}</td>
                                <td>{allCars[i].Engine_Cleanliness}</td>
                                <td>{allCars[i].Body_Frame_Undercarriage}</td>
                                <td>{allCars[i].Body_Frame_Suspension}</td>
                                <td>{allCars[i].Body_Frame_Chrome}</td>
                                <td>{allCars[i].Body_Frame_Detailing}</td>
                                <td>{allCars[i].Body_Frame_Cleanliness}</td>
                                <td>{allCars[i].Mods_Paint}</td>
                                <td>{allCars[i].Mods_Body}</td>
                                <td>{allCars[i].Mods_Wrap}</td>
                                <td>{allCars[i].Mods_Rims}</td>
                                <td>{allCars[i].Mods_Interior}</td>
                                <td>{allCars[i].Mods_Other}</td>
                                <td>{allCars[i].Mods_ICE}</td>
                                <td>{allCars[i].Mods_Aftermarket}</td>
                                <td>{allCars[i].Mods_WIP}</td>
                                <td>{allCars[i].Mods_Overall}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}