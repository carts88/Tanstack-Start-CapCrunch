import { LineGrid } from "../test/line-builder/line-grid";
import DndExample from "../drag-and-drop/example";
const forwardPositions = ["LW", "C", "RW"] as const;
const forwardLines = [1, 2, 3, 4] as const;

const defensePositions = ["LD", "RD", "G"] as const;
const defensePairs = [1, 2, 3] as const;

const reserveTypes = ["HS", "IR", "LTIR", "SEIR"] as const;
const reserveRows = [1, 2] as const;

const CbaMain = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-10">
      <DndExample />
{/* 
      <LineGrid
        title="Forwards"
        columns={forwardPositions}
        rows={forwardLines}
      />

      <LineGrid
        title="Defense / Goalies"
        columns={defensePositions}
        rows={defensePairs}
      />

     

      <LineGrid
        title="Scratches / IR"
        columns={reserveTypes}
        rows={reserveRows}
      />
 */}

    </div>
  );
};

export default CbaMain;