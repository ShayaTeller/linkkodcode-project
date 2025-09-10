import { useLocation, useNavigate } from "react-router";

export default function Message() {
  const { state } = useLocation();
  const navigate = useNavigate()

  
  return (
    <>

      <p>{state.message}</p>
      {setTimeout(() => {navigate('/')}, 4500)}
    </>
  );
}
