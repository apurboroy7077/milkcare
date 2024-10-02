import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
type propsType = {
  name: string;
  link: string;
};
type activeStatusType = "ACTIVE" | "NOT_ACTIVE";
const DropDownListType1 = (props: propsType) => {
  const { name, link } = props;
  const [activeStatus, setActiveStatus] = useState(
    "NOT_ACTIVE" as activeStatusType
  );
  const myLocation = useLocation();
  const currentPathName = myLocation.pathname;
  const checkActiveStatusFunction = () => {
    if (link === currentPathName) {
      setActiveStatus("ACTIVE");
    }
  };
  useEffect(() => {
    checkActiveStatusFunction();
  }, []);

  return (
    <li>
      <Link
        to={link}
        className={`py-3 px-4 block text-[white] hover:bg-[#505050] hover:text-[white] ${
          activeStatus === "ACTIVE" ? "bg-[#505050]" : ""
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default DropDownListType1;
