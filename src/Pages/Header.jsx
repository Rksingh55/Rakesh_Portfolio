import React from "react";

function Header(props) {
  return (
    <div>
      <div className="header  ">
        <div className="w-full  max-sm:text-center  md:w-[70%] pt-12 m-auto font-bold text-[30px]">
          {props.Name}
        </div>
      </div>
    </div>
  );
}

export default Header;
