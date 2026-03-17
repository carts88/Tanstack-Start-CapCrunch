import DndExample from "../drag-and-drop/example";
import { CollapsibleSection } from "./reusable/collapsible-section";
import { contractVariability, contractTypes } from "./config";

const CbaMain = () => {
  return (
    <div className="p-4 max-w-4xl h-screen mx-auto space-y-10">
      {/* <DndExample /> */}
      <CollapsibleSection 
        title={contractVariability.title}
        description={contractVariability.description}
        subSections={contractVariability.subSections}
      />

      <CollapsibleSection 
        title={contractTypes.title}
        description={contractTypes.description}
        subSections={contractTypes.subSections}

      />
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