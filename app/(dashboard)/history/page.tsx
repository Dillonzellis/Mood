import HistoryChart from "@/components/HistoryChart";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";

const getData = async () => {
  const user = await getUserByClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const total = analyses.reduce((acc, curr) => {
    return acc + curr.sentimentScore;
  }, 0);
  const average = total / analyses.length;
  return { analyses, average };
};

const History = async () => {
  const { average, analyses } = await getData();

  return (
    <div className="w-full h-full">
      <div>{`Avg. sentimentScore ${average}`}</div>
      <div className="w-full h-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
