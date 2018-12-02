import React, { Component } from "react";
import { Form } from "./Form";
import { Field } from "./Field";
import { InputFormField } from './InputFormField'

class SomeRandomForm extends Component {
  render() {
    console.log("SomeRandomForm renders");

    return (
      <Form
        onSubmit={ model => console.log('Submitting: ', model) }
      >
        <Field
          name="name"
          // additionalFields={["last"]}
          component={props => <InputFormField {...props} />}
        />

        <Field
          name="last"
          component={props => <InputFormField {...props} />}
        />

        <Field
          name="email"
          component={props => <InputFormField {...props} />}
        />
      </Form>
    );
  }
}

export { SomeRandomForm };
