import * as React from "react";
import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo";
import { PageContext } from "../types/types";
import { useClaimHook } from "../hooks";
import { Link, navigate } from "gatsby";

// markup
const ClaimToken: React.FC<PageContext> = ({
  pageContext,
  location,
}) => {
  const params = new URLSearchParams(location.search);
  const token = params.get('token');
  const { claim, errors } = useClaimHook(token);

  if (!token) {
    navigate('/');
  }

  return (
    <DefaultLayout pageContext={pageContext} location={location}>
      <>
        <SEO title="Account activation" />
        <div className="container-fluid au-body">
          <h1>Account activation</h1>
          {claim ? (
            <>
              {errors ? (
                <p>Your account activation has expired.</p>
              ) : (
                <>
                  <p>Your account has been successfully activated.</p>
                  <p>You can login to oneAPS by going to the <Link to="/login">login</Link> screen.</p>
                </>
              )}
            </>
          ) : (
            <p>Activating account.</p>
          )}
        </div>
      </>
    </DefaultLayout>
  );
};

export default ClaimToken;
