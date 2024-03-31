import React from "react";

export const page = ({ params }: { params: { workspace_id: string } }) => {
  console.log("this is the page prosp", params.workspace_id);

  return <div>workspace id: {params?.workspace_id}</div>;
};

export default page;
