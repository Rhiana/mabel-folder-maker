export enum NodeType {
  folder, file, unset
}

export interface NodeModel {
  type: NodeType;
  name: string;
  children: NodeModel[];
  id: string;
}