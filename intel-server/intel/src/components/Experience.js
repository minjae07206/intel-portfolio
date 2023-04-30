import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addExperience } from '../store.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {JobsChart} from './JobsChart.js';

function Experience() {
    let dispatch = useDispatch();
    let state = useSelector((state) => { return state });
    useEffect(() => {
        axios.get('http://localhost:8080').then((results) => {
            dispatch(addExperience(results.data));
        }).catch((err) => { console.log(err) })
    }, [])

    return (
        <div>
        <Card>
            <Card.Body>
                <h1>Experience</h1>
            </Card.Body>
            <form action='http://localhost:8080/addjob' method='POST'>
                <div className='form-group'>
                    <label>Job Title</label>
                    <input type='text' className='form-control' name='jobTitle'></input>
                </div>
                <div className='form-group'>
                    <label>Job Description</label><br></br>
                    <textarea resize="none" style={{ width: '500px'}} name='jobDescription'></textarea>
                </div>
                <div className='form-group'>
                    <label>Time period in months</label>
                    <input type='text' className='form-control' name='timeInMonths'></input>
                </div>
                <button type='submit' className='btn btn-danger'>Add</button>
            </form>

            {
                state.experiences.map(function (job) {
                    return (
                        <div>
                            <h4>{job.jobTitle}</h4>
                            <p>{job.jobDescription}</p>
                            <p>Time in months: {job.timeInMonths}</p>
                        </div>
                    )
                })
            }
        </Card>
        <JobsChart></JobsChart>
        </div>
    )
}

export { Experience };