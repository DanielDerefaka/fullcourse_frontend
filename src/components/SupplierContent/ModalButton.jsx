import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UpdateForm from './UpdateForm';


function ModalButton (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Complete Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      <form action="" className="py-5">
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">Fullname</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={''}
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={''}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">URL</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={''}
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="">Status</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={''}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <label htmlFor="">Agent Ref</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={''}
              />
            </div>
          </div>
          <div className="">
            <input type="submit" value="Update" className='btn btn-success px-4' />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
       <Button 
        style={{background:"#a8ce9b", border:"none", borderRadius:"5px", cusor:"pointer", fontWeight:"600"}} variant="primary" onClick={() => setModalShow(true)}>
         Add Profile
        </Button>
  

      <ModalButton
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;