import Editor from "@/components/Editor";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";

const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entry = await prisma.jounralEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  const { mood, summary, color, subject, negative } = entry?.analysis;
  return (
    <div className="h-full w-full">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
