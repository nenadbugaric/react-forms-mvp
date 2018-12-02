import React, { Component } from "react";
import { Form } from "./Form";
import { Field } from "./Field";
import { InputFormField } from "./InputFormField";

class SomeRandomForm extends Component {
  render() {
    console.log("SomeRandomForm renders");

    return (
      <Form onSubmit={model => console.log("Submitting: ", model)}>
        <Field
          name="name"
          // additionalFields={["surname"]}
          component={fieldProps => (
            <InputFormField label="Name" {...fieldProps} />
          )}
        />

        <Field
          name="surname"
          component={fieldProps => (
            <InputFormField label="Surname" {...fieldProps} />
          )}
        />

        <Field
          name="second"
          component={fieldProps => 
            new Array(1000)
              .join("0")
              .split("0")
              .map((_, id) => <span>second {`${id}`}</span>)
          }
        />

        <Field
          name="third"
          // additionalFields={["surname"]}
          component={fieldProps => 
            new Array(1000)
              .join("0")
              .split("0")
              .map((_, id) => <span>third {`${id}`}</span>)
          }
        />

        {new Array(100)
          .join("0")
          .split("0")
          .map((_, id) => (
            <Field
              name={`${id}`}
              component={fieldProps => (
                <InputFormField label={`${id}`} {...fieldProps} />
              )}
            />
          ))}
      </Form>
    );
  }
}

export { SomeRandomForm };
