import { Index } from '@/page-components/Index';
import { database } from '@/api-lib/middlewares/database';
import { getPoints } from '@/api-lib/db';
import nc from 'next-connect';

const IndexPage = ({ points }) => {
  return <Index points={points} />;
};

export async function getServerSideProps(context) {
  await nc().use(database).run(context.req, context.res);

  const points = await getPoints(context.req.db);

  return { props: { points } };
}

export default IndexPage;
