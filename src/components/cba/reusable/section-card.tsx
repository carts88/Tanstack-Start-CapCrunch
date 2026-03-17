
export const SectionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card border rounded-xl p-4 space-y-4 shadow-sm">
      {children}
    </div>
  );
};