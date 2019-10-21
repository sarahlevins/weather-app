import React from 'react';

import PageTemplate from '../templates/PageTemplate';
import ComplaintForm from '../organisms/ComplaintForm';
import Bio from '../molecules/Bio';

function ComplaintPage() {
  return (
    <PageTemplate>
    <Bio />
    <ComplaintForm />
    </PageTemplate>
  );
}

export default ComplaintPage;