import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./ModalStyle.css";

function AuthModal({
  show,
  handleClose,
  title,
  formLabel,
  footerContent,
  input,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="rounded-modal">
        <div className="bg-tuatara-900 rounded-2xl overflow-hidden">
          <Modal.Header closeButton className="custom-close-button">
            <Modal.Title className="w-100 text-center text-white text-caption">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{input}</Modal.Body>
          <Modal.Footer className="flex-col border-t border-gray-700">
            {footerContent}
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

function AuthInput(params) {
  return (
    <>
      <Form.Group
        className="mb-3 mr-14 ml-14"
        controlId="exampleForm.ControlInput1"
      >
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
            <img className="w-4 h-4" src={params.url} alt="" />
          </span>
          <Form.Control
            type="email"
            onChange={params.handleInputChange}
            placeholder={params.placeholder}
            autoFocus
            className="bg-tuatara-900 placeholder-white text-white text-mini text-caption font-apple border-white pl-10 focus:bg-tuatara-900 focus:text-white pt-2 pb-2"
          />
          {params.activity && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-white">
              <img
                className="w-4 h-4"
                src="assets/images/ic_check.svg"
                alt=""
              />
            </span>
          )}
        </div>
      </Form.Group>
    </>
  );
}
function LoginFooter({ handleClose, clickSignup }) {
  return (
    <>
      <Button
        className="bg-[#637CFF] border-none pr-8 pl-8 text-mini"
        onClick={handleClose}
      >
        로그인
      </Button>
      <Button
        className="bg-transparent border-none text-[#BCBCBC] text-decoration-underline text-mini"
        onClick={clickSignup}
      >
        회원가입
      </Button>
    </>
  );
}

function SignupFooter({ handleClose }) {
  return (
    <>
      <Button
        className="bg-[#637CFF] border-none pr-8 pl-8 text-mini"
        onClick={handleClose}
      >
        완료
      </Button>
    </>
  );
}

function LoginInput(params) {
  return (
    <>
      <Form className="mt-2">
        <AuthInput
          placeholder="test@email"
          url="assets/images/ic_email.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
        <AuthInput
          placeholder="password"
          url="assets/images/ic_block.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
      </Form>
    </>
  );
}

function SignupInput(params) {
  return (
    <>
      <Form className="mt-2">
        <AuthInput
          placeholder="name"
          url="assets/images/ic_block.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
        <AuthInput
          placeholder="email"
          url="assets/images/ic_email.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
        <AuthInput
          placeholder="password"
          url="assets/images/ic_block.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
        <AuthInput
          placeholder="confirm password"
          url="assets/images/ic_block.svg"
          handleInputChange={params.handleInputChange}
          activity={params.activity}
        />
      </Form>
    </>
  );
}

export function Login({ show, handleClose, handleClickedSignupButton }) {
  const [activity, setActivity] = useState(false);
  const handleInputChange = (e) => {
    console.log("login:" + e.target.value);
    if (e.target.value.length > 0) {
      setActivity(true);
    } else {
      setActivity(false);
    }
  };

  return (
    <AuthModal
      show={show}
      handleClose={handleClose}
      title="로그인"
      formLabel="Enter your login details"
      footerContent={
        <LoginFooter
          handleClose={handleClose}
          clickSignup={handleClickedSignupButton}
        />
      }
      input={
        <LoginInput handleInputChange={handleInputChange} activity={activity} />
      }
    />
  );
}

export function Signup({ show, handleClose }) {
  const [activity, setActivity] = useState(false);
  const handleInputChange = (e) => {
    console.log("signup:" + e.target.value);

    if (e.target.value.length > 0) {
      setActivity(true);
    } else {
      setActivity(false);
    }
  };
  return (
    <AuthModal
      show={show}
      handleClose={handleClose}
      title="회원가입"
      formLabel="Enter your signup details"
      footerContent={<SignupFooter handleClose={handleClose} />}
      input={
        <SignupInput
          handleInputChange={handleInputChange}
          activity={activity}
        />
      }
    />
  );
}
