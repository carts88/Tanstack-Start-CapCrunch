export type SubSection =
  | {
      type: "block-grid";
      cols?: number;
      blocks: {
        title: string;
        description: string;
      }[];
    }
  | {
      type: "list";
      title: string;
      items: string[];
    }
  | {
      type: "description";
      title: string;
      description: string;
    }
  | {
        type: "link-to-tool",
        name: string;
        link: string;
        description?: string;
    };

