export interface JournalEntry {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  analysis?: Analysis;
}

export interface Analysis {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entryId: string;
  mood: string;
  summary: string;
  color: string;
  negative: boolean;
}
