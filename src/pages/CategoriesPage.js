import { useLocation, useHistory } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(location.search);
  const skip = query.get("skip") || 0;
  const limit = query.get("limit") || 15;
  console.log(skip, limit);

  const handleNext = () => {
    query.set("skip", skip*1 + limit*1)
    // query.set("limit",200)
    history.push({search:query.toString()})
  };

  return (
    <div>
      <h1>
        Skip: {skip} Limit: {limit}
      </h1>
      <button onClick={handleNext}>next</button>
    </div>
  );
}
