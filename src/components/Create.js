import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'

function CreateBlog() {

    const [data, setData] = useState({
        title: '',
        author: '',
        body: ''
    })

    const handleChange =(e)=> {
        const {name, value} = e.target;
            setData((prev)=>{
                return{...prev, [name]: value}
            })
        }

    const handleSubmit =(e)=> {
        e.preventDefault();
        axios.post("http://localhost:4000/blogs", data)
        .then(res =>{
            toast.success('New blog added successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000})
            })
            .catch(err => {
                toast.error('An error occured, please try again', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
            })
        })
        }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='text-start'>Title:</Form.Label>
            <Form.Control type="text" onChange={handleChange} placeholder="Blog title" name='title'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author:</Form.Label>
            <Form.Control type="text" onChange={handleChange} placeholder="Author's name" name='author'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Body:</Form.Label>
            <Form.Control as="textarea" onChange={handleChange} name='body' rows={3}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Save Blog
        </Button>
        <ToastContainer/>
    </Form>
  );
}

export default CreateBlog;
