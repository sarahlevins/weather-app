import React from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const ComplaintForm = props => {
  return (
    <div>
      <form>
        <FormField type="text" name="name" label="Name" /><br />
        <FormField type="text" name="email" label="Email Address" /><br />
        <FormField type="textarea" name="textarea" label="Message" /><br />
        <Button>Complain</Button>
      </form>
    </div>
  );
};

export default ComplaintForm;