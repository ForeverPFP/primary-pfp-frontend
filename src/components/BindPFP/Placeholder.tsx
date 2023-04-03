import ContentLoader from "react-content-loader";
import React from "react";

export const PickListPlaceholder: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={522}
    height={189}
    viewBox="0 0 522 189"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="151" cy="41" r="41" />
    <circle cx="151" cy="148" r="41" />
    <circle cx="261" cy="41" r="41" />
    <circle cx="261" cy="148" r="41" />
    <circle cx="371" cy="41" r="41" />
    <circle cx="371" cy="148" r="41" />
    <circle cx="481" cy="41" r="41" />
    <circle cx="481" cy="148" r="41" />
    <circle cx="41" cy="41" r="41" />
    <circle cx="41" cy="148" r="41" />
  </ContentLoader>
);
