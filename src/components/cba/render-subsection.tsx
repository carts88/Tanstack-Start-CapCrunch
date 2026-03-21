import { BlockGrid } from "./reusable/block-grid";
import { ListSection } from "./reusable/list-section";
import { DescriptionBlock } from "./reusable/description-block";
import { LinkToTool } from "./reusable/link-to-tool";
import { TableSection } from "./reusable/table-section";
import { GridSection } from "./reusable/grid-section";
import { StatCallout } from "./reusable/stat-callout";
import { AlertBlock } from "./reusable/alert-block";
import { ComparisonBlock } from "./reusable/comparison-block";
import { TimelineBlock } from "./reusable/timeline-block";
import { DefinitionBlock } from "./reusable/definition-block";
import { RichListSection } from "./reusable/rich-list-section";
import type { SubSection } from "./types";

export const RenderSubSection = ({ section }: { section: SubSection }) => {
  switch (section.type) {
    case "block-grid":
      return <BlockGrid 
      title={section.title}
      description={section.description}
      cols={section.cols} blocks={section.blocks} />;

    case "list":
      return <ListSection title={section.title} items={section.items} />;

    case "description":
      return <DescriptionBlock title={section.title} description={section.description} />;

    case "link-to-tool":
      return (
        <LinkToTool
          name={section.name}
          link={section.link}
          description={section?.description}
        />
      );

    case "table":
      return (
        <TableSection
          headers={section.headers}
          tableData={section.tableData}
          footers={section.footers}
          caption={section.caption}
        />
      );

    case "grid-section":
      return (
        <GridSection
          title={section.title}
          description={section.description}
          cols={section.cols}
          subSections={section.subSection}
        />
      );

    case "stat-callout":
      return <StatCallout stats={section.stats} cols={section.cols} />;

    case "alert":
      return (
        <AlertBlock
          variant={section.variant}
          title={section.title}
          description={section.description}
        />
      );

    case "comparison":
      return (
        <ComparisonBlock
          leftLabel={section.leftLabel}
          rightLabel={section.rightLabel}
          leftItems={section.leftItems}
          rightItems={section.rightItems}
          rightAccent={section.rightAccent}
        />
      );

    case "timeline":
      return <TimelineBlock events={section.events} />;

    case "definition":
      return <DefinitionBlock title={section.title} items={section.items} />;

    case "rich-list":
      return <RichListSection title={section.title} items={section.items} />;

    default:
      return null;
  }
};