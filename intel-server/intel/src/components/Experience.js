import { Card } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {sendDataToServer} from '../store.js';
import axios from 'axios';

function Experience() {
    let dispatch = useDispatch();
    let state = useSelector((state)=>state);
    axios.get('http://localhost:8080').then((results)=>{
    console.log(results)
})
    return (
        <Card>
            <Card.Body>This is my Experieeeence</Card.Body>
            <form action='http://localhost:8080/add' method='POST'>
                <div className='form-group'>
                    <label>Job Title</label>
                    <input style={{width: '500px'}} type='text' className='form-control' name='jobTitle'></input>
                </div>
                <div className='form-group'>
                    <label>Job Description</label><br></br>
                    <textarea resize="none" style={{width: '500px'}} name='jobDescription'></textarea>
                </div>
                <button /* </form>onClick={(e)=>{
                    // axios.post('http://localhost:8080/', 'dfddf')
                </Card>}} */type='submit' className='btn btn-danger'>Submit</button>
            </form>
        </Card>
    )    
}

export {Experience};