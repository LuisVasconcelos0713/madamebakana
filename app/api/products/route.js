import database from "../../../infra/database";

const GET = async () => {
  const res = await database.query("SELECT 1 + 1 as sum");
  return Response.json({
    success: true,
    result: res.rows[0].sum,
  });
};

export { GET }