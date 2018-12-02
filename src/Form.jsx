import React, { createContext } from "react";

export const FormContext = createContext({});

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.updateValue = (name, value) => {
      this.setState({ model: { ...this.state.model, [name]: value } });
    };

    this.state = {
      model: this.props.model || {},
      updateValue: this.updateValue,
    };
  }

  render() {
    console.log("FORM rendering!");

    const { children, onSubmit} = this.props;

    return (
      <FormContext.Provider value={this.state}>
        <div>
            {children}
            <button onClick={() => onSubmit(this.state.model)}>Submit</button>
        </div>
      </FormContext.Provider>
    );
  }
}
