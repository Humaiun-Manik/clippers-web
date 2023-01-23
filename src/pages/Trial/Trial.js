import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Trial = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container my-5">
      <Row className="g-5">
        <Col xs={12} lg={8}>
          <h2 className="fw-light">Try Our Image Editing Services For FREE!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-100 my-3 p-2 border border-2"
              {...register("firstName", { required: true, maxLength: 20 })}
              placeholder="Full Name"
            />
            <input
              className="w-100 mb-3 p-2 border border-2"
              {...register("email", { required: true, maxLength: 20 })}
              placeholder="Enter your email"
            />
            <input
              className="w-100 mb-3 p-2 border border-2"
              type="number"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <textarea
              className="w-100 mb-3 p-2 border border-2"
              rows={5}
              placeholder="Message"
              {...register("message", { required: true })}
            />
            <Button className="fs-5" variant="primary" type="submit">
              Get Your FREE Trial
            </Button>
          </form>
        </Col>
        <Col xs={12} lg={4}>
          <h1 className="fw-normal">Get a Free Trial with No Cost or Obligation</h1>
          <p>
            You can email us, your email will go to our experts with years of experience. And one of our
            experts will answer you as soon as possible.
          </p>
          <p className="mt-0 fw-bold">E-mail: info@clippersweb.com</p>
        </Col>
      </Row>
    </section>
  );
};

export default Trial;
