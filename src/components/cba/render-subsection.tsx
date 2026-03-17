import { BlockGrid } from "./reusable/block-grid"
import { ListSection } from "./reusable/list-section";
import { DescriptionBlock } from "./reusable/description-block";
import type { SubSection } from "./types";
import { LinkToTool } from "./reusable/link-to-tool";

export const RenderSubSection = ({ section }: { section: SubSection }) => {
  switch (section.type) {
    case "block-grid":
      return (
        <BlockGrid
          cols={section.cols}
          blocks={section.blocks}
        />
      );

    case "list":
      return (
        <ListSection
          title={section.title}
          items={section.items}
        />
      );

    case "description":
      return (
        <DescriptionBlock
          title={section.title}
          description={section.description}
        />
      );

    case "link-to-tool":
      return (
        <LinkToTool
          name={section.name}
          link={section.link}
          description={section?.description}
        />
      );

    default:
      return null;
  }
};