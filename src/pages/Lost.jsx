import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Lost = () => {
  
  const router = useNavigate();
  useEffect(() => { router('/main') }, [router]);

  return <p className="lost">Page is not found, 404</p>
}

export default Lost;