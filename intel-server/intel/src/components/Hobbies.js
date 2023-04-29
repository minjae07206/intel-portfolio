import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addHobby } from '../store.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Hobbies() {
    return (
        <Card>
            <Card.Body>
                <h1>Hobby</h1>
                <h2>1. Board game</h2>
                <h2>2. History</h2>
                <h2>3. Watching baseball</h2>
            </Card.Body>
        </Card>
    )
}

export {Hobbies};