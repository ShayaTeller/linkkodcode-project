import { useNavigate } from "react-router";

export default function loading() {
      const navigate = useNavigate()

  return (
    <>
    <h1>loading the posts</h1>
    {
        setTimeout(() => {
            navigate('/homepage')
        }, 3000)
    }

      
    </>
  );
}