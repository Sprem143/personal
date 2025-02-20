import { useState } from 'react'
import Form from 'react-bootstrap/Form';


import './App.scss'

function App() {

  return (
<>
<div className="container p-4 m-0 homecontact">
  <div className="row p-0 m-0 parentheight">
    <div className="col-lg-8 col-md-6 pe-4 d-flex flex-column justify-content-center parentheight" >
<h4>heading 001</h4>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni deleniti facilis? Repellendus doloremque molestiae et asperiores dolorum excepturi debitis dolor inventore, possimus, veritatis sequi quos enim harum ut dolore.</p>
<button className='butn'>Button</button>

    </div>
    <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center parentheight">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </div>

  </div>
</div>
</>
  )
}

export default App
