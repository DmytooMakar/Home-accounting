import axios from "axios"
import {
    Form,
    Button
} from "react-bootstrap"

import "./Authorization.css"


export default function Authorization({user, setUser}) { 

    function sendRegistrationForm(){
        axios.post(`http://localhost:3001/users`, {
            email: user.email,
            password: user.password
        })
    }

    function onChangeEmail(target){
        setUser((prev) => ({ 
            ...prev,
            email: target.target.value
        }))
    }

    function onChangePassword(target){
        setUser((prev) => ({ 
            ...prev,
            password: target.target.value
        }))
    }

    console.log(user)

    return (
    <main className="form-main-authorization">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={user.email} placeholder="Enter email" onChange={onChangeEmail}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={user.password} placeholder="Password" onChange={onChangePassword}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sendRegistrationForm}>
                Submit
            </Button>
        </Form>
    </main>)
}