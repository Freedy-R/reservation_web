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
  if (error) return <p>Not loaded</p>;
  return (
    <>
      <section className="resource">
        {data.resources.map((resource) => (
          <div className="resource_item" key={resource.id}>
            {resource.name}
            <button className="btn_resource_reserve">Reserve</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Resources;
