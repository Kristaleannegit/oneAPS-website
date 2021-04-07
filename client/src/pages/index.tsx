import * as React from "react";
import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo";
import "../sass/main.scss";
import { PageContext } from "../types/types";

// markup
const IndexPage: React.FC<PageContext> = ({ pageContext, location }) => {
  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <SEO title="Home" />
        <div className="au-body hero">
          <section className="container-fluid">
            <div className="col-sm-12 col-md-6 col-md-push-6">
              <div className="intro__img">
                <img
                  className="au-responsive-media-img"
                  src="../../homepage-workingtogether.png"
                  alt="Four people holding a sign that says 'working together as one APS'"
                ></img>
              </div>
            </div>
            <div className="intro__text col-sm-12 col-md-6 col-md-pull-6">
              <p>
                A place to find flexible work opportunities across the APS to
                help deliver outcomes for government and the citizens we all
                serve.
              </p>
              <p>
                <p className="bolden-text">Want to post an opportunity?</p>
                Anyone can post an opportunity on oneAPS.
              </p>
              <p>
                For more details on how to publish an opportunity see the help
                guide.
              </p>
              <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <button className="au-btn">Post an opportunity</button>
              </div>
              <p>
                Want to find out more or have feedback? Contact{" "}
                <a href="mailto:digitalsquads@dta.gov.au">
                  digitalsquads@dta.gov.au
                </a>
              </p>
            </div>
          </section>
        </div>
        <section className="au-body" style={{ background: "#EBEBEB" }}>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-md-12 center-align"
                style={{ marginBottom: "2rem" }}
              >
                <h1>Why would you apply for an opportunity?</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 center-align">
                <img src="../../make-connections.png"></img>
                <p className="bolden-text">Make connections</p>
                Your new colleagues may be down the hall or across the country
              </div>
              <div className="col-md-4 center-align">
                <img src="../../build-skills.png"></img>
                <p className="bolden-text">Build skills</p>
                Advance your career by developing new skills and experience
              </div>
              <div className="col-md-4 center-align">
                <img src="../../make-difference.png"></img>
                <p className="bolden-text">Make a difference</p>
                Use your talent on short term opportunities that are meaningful
                to you.
              </div>
            </div>
          </div>
        </section>
        <section className="au-body center-align">
          This site ia prt of a 3-month pilot program from March to May 2021 run
          by the Digital Squads team at the Digital Transformation Agency.
          <br />
          If you have any questions or feedback, please contact us at
          <a href="mailto:digitalsquads@dta.gov.au">digitalsquads@dta.gov.au</a>
        </section>
      </>
    </DefaultLayout>
  );
};

export default IndexPage;
