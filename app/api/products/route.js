import database from "../../../infra/database";

const GET = async () => {
  const res = await database.query("SELECT 1 + 1 as sum");
  return Response.json({
    sucess: true,
    result: res.rows[0],
  });
};
