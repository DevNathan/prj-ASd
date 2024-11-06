import React, { useState } from "react";
import { useLocation } from "react-router-dom";

type ResponseData = {
  department: string;
  purpose: string;
};

const ConfirmPage = () => {
  const location = useLocation();
  const data: ResponseData | undefined = location.state;
  const [page, setPage] = useState<"main" | "write" | "voice">("main");

  if (!data) {
    return <>오류</>;
  }

  const { department, purpose } = data;

  return (
    <div>
      {page === "main" && (
        <>
          <div>{department}로 접수?</div>
          <div>병명: {purpose}</div>
          <div>
            <button type={"button"}></button>
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmPage;
