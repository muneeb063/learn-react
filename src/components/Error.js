import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        {error.status}: {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
