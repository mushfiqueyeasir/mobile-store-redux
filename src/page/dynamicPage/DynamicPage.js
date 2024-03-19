import React from "react";
import { useParams } from "react-router-dom";
import StaticPageWithTitle from "../../components/Common/StaticPageWithTitle";
import MobilePage from "../MobilePage/MobilePage";

const DynamicPage = ({ MobileList }) => {
  const { page } = useParams();

  return (
    <>
      {page === "mobile" ? (
        <MobilePage data={MobileList} />
      ) : (
        <StaticPageWithTitle page={page} />
      )}
    </>
  );
};

export default DynamicPage;
