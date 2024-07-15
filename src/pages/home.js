import { useQuery, gql } from "@apollo/client";
const GET_RESOURCES = gql`
  query Resources {
    resources {
      name
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_RESOURCES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...(</p>;
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {data.resources.map((resource) => (
        <div key={resource.id}>{resource.name}</div>
      ))}
    </div>
  );
};

export default Home;
