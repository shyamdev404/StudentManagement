import axios from "axios";
import { Component } from "react";
import { Alert, Col, Container,Form,Row } from "react-bootstrap";

export class RagistrationForm extends Component {
    constructor() {
        super()
        this.state={
            roll:0 ,
            name:'',
            phone:'',
            marks:0,
            isRagistrationSuccessful:false

        }
          
    }
    HandleSubmit= async (event)=>{
        event.preventDefault();
       const response= await axios.post("http://localhost:5000/student",{
        roll:this.state.roll,
        name:this.state.name,
        phone:this.state.phone,
        marks:this.state.marks,
        
       })
         console.log(response);
         
         this.setState({isRagistrationSuccessful:false}) 
         setTimeout(() => {
            this.setState({isRagistrationSuccessful:true})
         }, 2000);
        
         }

       

    HandleOnChange=(event)=>{
        console.log(event.target.value);
   this.setState({[event.target.name]:event.target.value});
    }
  
    render() {
        return (
            <>
                <Container className="mt-4">
                    <Alert variant="success">Ragister Student</Alert>
                </Container>
                <Container>
                    <Form onSubmit={this.HandleSubmit}>
                    <Row>
                        <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Roll</Form.Label>
                            <Form.Control type="text" placeholder="Enter Roll" name="roll" onChange={this.HandleOnChange} />
                            
                        </Form.Group>
                        </Col>
                        <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.HandleOnChange} />
                        </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>phone</Form.Label>
                            <Form.Control type="text" name="phone" onChange={this.HandleOnChange} placeholder="Enter Phone" />
                            
                        </Form.Group>
                        </Col>
                        <Col lg={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Marks</Form.Label>
                            <Form.Control type="text" name="marks" onChange={this.HandleOnChange} placeholder="Enter Marks" />
                        </Form.Group>
                        </Col>
                        </Row>
                        <input type={'submit'} value='Ragister' className="btn btn-success" ></input>

                    </Form>
                   {this.state.isRagistrationSuccessful?<Alert variant="success" className="mt-4">Ragistration Success</Alert>:null}
                </Container>
            </>
        )
    }
}