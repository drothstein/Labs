import React, { useState } from 'react'
import CarID from './CarID.js'
import './App.css';
import { useNavigate } from "react-router-dom";

export default function EditCar() {
    const [form, setForm] = useState({ timestamp: null, email: null, name: null, year: null, make: null, model: null, car_id: null, judge_id: null, judge_name: null, racer_turbo: null, racer_supercharged: null, racer_performance: null, racer_horsepower: null, car_overall: null, engine_modifications: null, engine_performance: null, engine_chrome: null, engine_detailing: null, engine_cleanliness: null, body_frame_undercarriage: null, body_frame_suspension: null, body_frame_chrome: null, body_frame_detailing: null, body_frame_cleanliness: null, mods_paint: null, mods_body: null, mods_wrap: null, mods_rims: null, mods_interior: null, mods_other: null, mods_ice: null, mods_aftermarket: null, mods_wip: null, mods_overall: null })
    const [carId, setCarId] = useState()

    async function editData() {
        try {
            setCarId(form.car_id)
            const res = await fetch('http://localhost:8080/cars/update/' + form.car_id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    timestamp: new Date(),
                    email: form.email,
                    name: form.name,
                    year: form.year,
                    make: form.make,
                    model: form.model,
                    car_id: form.car_id,
                    judge_id: form.judge_id,
                    judge_name: form.judge_name,
                    racer_turbo: form.racer_turbo,
                    racer_supercharged: form.racer_supercharged,
                    racer_performance: form.racer_performance,
                    racer_horsepower: form.racer_horsepower,
                    car_overall: form.car_overall,
                    engine_modifications: form.engine_modifications,
                    engine_performance: form.engine_performance,
                    engine_chrome: form.engine_chrome,
                    engine_detailing: form.engine_detailing,
                    engine_cleanliness: form.engine_cleanliness,
                    body_frame_undercarriage: form.body_frame_undercarriage,
                    body_frame_suspension: form.body_frame_suspension,
                    body_frame_chrome: form.body_frame_chrome,
                    body_frame_detailing: form.body_frame_detailing,
                    body_frame_cleanliness: form.body_frame_cleanliness,
                    mods_paint: form.mods_paint,
                    mods_body: form.mods_body,
                    mods_wrap: form.mods_wrap,
                    mods_rims: form.mods_rims,
                    mods_interior: form.mods_interior,
                    mods_other: form.mods_other,
                    mods_ice: form.mods_ice,
                    mods_aftermarket: form.mods_aftermarket,
                    mods_wip: form.mods_wip,
                    mods_overall: form.mods_overall
                })
            })
            const resJSON = await res.json()
            console.log(resJSON)
            alert('Done')
            console.log('TEST with .data', resJSON.data[0].Timestamp)
            console.log('TEST without', resJSON[0].Timestamp)
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.getAttribute('name')
        const value = event.target.value
        setForm({ ...form, [name]: value })
        console.log(form)
        editData()
    }
    function handleChange(event) {
        const name = event.target.getAttribute('name')
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }
    return (
        <div>

            <CarID />

            <h1>search for car id. then update car details</h1>
            <br></br>

            <form onSubmit={handleSubmit}>
                <p>timestamp</p>
                <input onChange={handleChange} type='text' name='timestamp' />
                <p>email</p>
                <input onChange={handleChange} type='text' name='email' />
                <p>name</p>
                <input onChange={handleChange} type='text' name='name' />
                <p>year</p>
                <input onChange={handleChange} type='text' name='year' />
                <p>make</p>
                <input onChange={handleChange} type='text' name='make' />
                <p>model</p>
                <input onChange={handleChange} type='text' name='model' />
                <p>car id</p>
                <input onChange={handleChange} type='text' name='car_id' required='required' />
                <p>judge id</p>
                <input onChange={handleChange} type='text' name='judge_id' />
                <p>judge name</p>
                <input onChange={handleChange} type='text' name='judge_name' />
                <p>racer turbo</p>
                <input onChange={handleChange} type='text' name='racer_turbo' />
                <p>racer supercharged</p>
                <input onChange={handleChange} type='text' name='racer_supercharged' />
                <p>racer performance</p>
                <input onChange={handleChange} type='text' name='racer_performance' />
                <p>racer horsepower</p>
                <input onChange={handleChange} type='text' name='racer_horsepower' />
                <p>car overall turbo</p>
                <input onChange={handleChange} type='text' name='car_overall' />
                <p>engine modifications</p>
                <input onChange={handleChange} type='text' name='engine_modifications' />
                <p>engine performance</p>
                <input onChange={handleChange} type='text' name='engine_performance' />
                <p>engine chrome</p>
                <input onChange={handleChange} type='text' name='engine_chrome' />
                <p>engine detailing</p>
                <input onChange={handleChange} type='text' name='engine_detailing' />
                <p>engine leanliness</p>
                <input onChange={handleChange} type='text' name='engine_cleanliness' />
                <p>body frame undercarriage</p>
                <input onChange={handleChange} type='text' name='body_frame_undercarriage' />
                <p>body frame suspension</p>
                <input onChange={handleChange} type='text' name='body_frame_suspension' />
                <p>body frame chrome</p>
                <input onChange={handleChange} type='text' name='body_frame_chrome' />
                <p>body frame detailing</p>
                <input onChange={handleChange} type='text' name='body_frame_detailing' />
                <p>body frame cleanliness</p>
                <input onChange={handleChange} type='text' name='body_frame_cleanliness' />
                <p>mods paint</p>
                <input onChange={handleChange} type='text' name='mods_paint' />
                <p>mods body</p>
                <input onChange={handleChange} type='text' name='mods_body' />
                <p>mods wrap</p>
                <input onChange={handleChange} type='text' name='mods_wrap' />
                <p>mods rims</p>
                <input onChange={handleChange} type='text' name='mods_rims' />
                <p>mods interior</p>
                <input onChange={handleChange} type='text' name='mods_interior' />
                <p>mods other</p>
                <input onChange={handleChange} type='text' name='mods_other' />
                <p>mods ice</p>
                <input onChange={handleChange} type='text' name='mods_ice' />
                <p>mods aftermarket</p>
                <input onChange={handleChange} type='text' name='mods_aftermarket' />
                <p>mods wip</p>
                <input onChange={handleChange} type='text' name='mods_wip' />
                <p>mods overall</p>
                <input onChange={handleChange} type='text' name='mods_overall' />

                <input type='submit' />
            </form>
        </div>
    )
}