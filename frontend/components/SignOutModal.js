import * as React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function SignOutModal(props) {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>SIGN OUT</ModalHeader>
      <ModalBody>
        Do you want to sign out ?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle} onClick={()=>{
          props.toggle()
          props.history.push('/signout')
        }}>Yes</Button>{' '}
        <Button color="secondary" onClick={props.toggle}>No</Button>
      </ModalFooter>
    </Modal>
  )
}