import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/templates/PageTemplate";
import ComplaintForm from "../components/organisms/ComplaintForm";
import TextLink from "../components/atoms/TextLink";
import Bio from "../components/molecules/Bio";

const ComplaintPage = ({ city, temp, changeCity, ...props }) => {
  return (
    <PageTemplate
      city={city}
      cityimage="picture of city"
      temp={temp}
      changeCity={changeCity}
    >
      <div className="redirect-textlink">
        <Link to="/">
          <TextLink>I regret this, take me back</TextLink>
        </Link>
      </div>

      <Bio
        header="Clive Weathers"
        image="/static/weatherman.jpg"
        description="Clive has been a hipster weather-person for over 40 years and he’s too busy taste testing a new chai latte before the big new sneaker drop to read your complaints."
      />

      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;
