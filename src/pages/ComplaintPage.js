import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/templates/PageTemplate";
import ComplaintForm from "../components/organisms/ComplaintForm";
import Button from "../components/atoms/Button";
import Bio from "../components/molecules/Bio";

const ComplaintPage = ({ city, temp, changeCity, ...props }) => {
  return (
    <PageTemplate
      city={city}
      cityimage="picture of city"
      temp={temp}
      changeCity={changeCity}
    >
      <Bio
        header="Sarah Levins"
        image="/static/weatherman.jpg"
        description="she tells us the weather"
      />

      <ComplaintForm />

      <Link to="/">
        <Button>Go to weather</Button>
      </Link>
    </PageTemplate>
  );
};

export default ComplaintPage;
