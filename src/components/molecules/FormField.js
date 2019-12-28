import React from "react";
import Label from "../atoms/Label";
import TextArea from "../atoms/TextArea";
import TextInput from "../atoms/TextInput";

const FormField = ({ type, label, name, value, onChange, ...props }) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      <br />
      {type === "text" && (
        <TextInput name={name} value={value} onChange={onChange} />
      )}
      {type === "textarea" && (
        <TextArea name={name} value={value} onChange={onChange} />
      )}
    </>
  );
};

export default FormField;
