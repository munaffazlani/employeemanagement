import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Button, Checkbox } from "antd";
import { Formik, Form, Field } from "formik";
import actions from "../../redux/auth/actions";
import loginSchema from "../../validation/loginSchema";

import "./loginForm.css";
import "antd/dist/antd.css";

const error = { color: "red", paddingTop:'3px' };
function LoginForm({ history }) {
  const dispatch = useDispatch();
  const requested = useSelector((state) => state.authReducer.loading);
  const loginError = useSelector(state => state.authReducer.error)

  const handleSubmit = (payload) => {
    dispatch(actions.login(payload, history));
  };
  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember_me: true,
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
          if (values.remember_me) {
            localStorage.setItem("remember_me", values.remember_me);
          }
          // deleting remember me to make data exactly like we want payload in api call
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <div className="main-container">
            <div>
              <h1>LOG IN</h1>
            </div>

            <Form>
              <div className="form">
                <div>
                  <label htmlFor="email">Email</label>
                  <Field placeholder="Email" name="email" as={Input} />
                  {errors.email && touched.email ? (
                    <div style={error}>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    placeholder="Password"
                    name="password"
                    as={Input}
                  />
                  {errors.password && touched.password ? (
                    <div style={error}>{errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <Field name="remember_me" type="checkbox" as={Checkbox} />
                  <label htmlFor="remember_me"> Remember Me</label>
                </div>
                <div>
                  {loginError && <p style={error}>{loginError}</p>}
                  <Button htmlType="submit" type="primary" loading={requested}>
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      <br />
      <br />
    </div>
  );
}

export default LoginForm;
