import React, {useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import UploadService from "./Upload-service";


const ModalExample = (props) => {
  console.log(props.username)
  console.log(props.userkey)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="openbtn"  outline color="danger" size="lg" onClick={toggle}>Open-API 서비스 시작</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle}> OPEN API 서비스 시작</ModalHeader>
        <ModalBody>
            {props.userfiles}
            
            파일로 api 서비스를 생성합니다.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>API START</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(ModalExample);

