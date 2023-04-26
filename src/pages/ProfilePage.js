import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { username } = useParams();

  return <div>Hola: {username}</div>;
}
