import { Alert, Link } from "@mui/material";
import React from "react";

const BRANCH_NAME = process.env.BRANCH_NAME;
const CHROMATIC_BRANCH_NAME = process.env.CHROMATIC_BRANCH_NAME;
const CHROMATIC_APP_ID = process.env.CHROMATIC_APP_ID;

const branchHostname = CHROMATIC_BRANCH_NAME
  ? `${CHROMATIC_BRANCH_NAME}--${CHROMATIC_APP_ID}.chromatic.com`
  : undefined;

export const Welcome = () => {
  return (
    <div>
      <h2>Lunit Design System</h2>
      {branchHostname != null && branchHostname !== window.location.hostname && (
        <Alert severity="info">
          Checkout the latest version for the current branch(
          <code>{BRANCH_NAME}</code>){" "}
          <Link href={`//${branchHostname}`}>here</Link>.
        </Alert>
      )}
    </div>
  );
};
