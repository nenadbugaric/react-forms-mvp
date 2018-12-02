import React from "react";
import { FormContext } from "./Form";

class OptComponent extends React.PureComponent {
  render() {
    const { component, ...restOfProps } = this.props;
    return <div style={{padding: '20px'}}>{component(restOfProps)}</div>;
  }
}

export class Field extends React.PureComponent {
  render() {
    const { name, component } = this.props;

    return (
      <FormContext.Consumer>
        {({ model, updateValue }) => {
          const props = { value: model[name], updateValue, name, component };
          return <OptComponent {...props} />;
        }}
      </FormContext.Consumer>
    );
  }
}
