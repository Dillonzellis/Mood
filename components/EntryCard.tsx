type EntryCardProps = {
  entry: any;
};

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  return <div>{entry.id}</div>;
};
