import { useQuery, gql } from "@apollo/client";
const GET_RESOURCES = gql`
  query Resources {
    resources {
      id
      name
    }
  }
`;
const Resources = () => {
  const { data, loading, error } = useQuery(GET_RESOURCES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <section className="resource">
        {data.resources.map((resource) => (
          <div className="resource_item" key={resource.id}>
            {resource.name}
          </div>
        ))}
      </section>
    </>
  );
};

export default Resources;
