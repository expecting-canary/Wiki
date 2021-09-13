import { TemplateData, TemplateDataId, TemplateId } from './template'

export type NodeId = TemplateDataId
export type Node = TemplateData & {
  name: string
  info: string
  tags: NodeId[]
  tagged: NodeId[]
  data: {
    template_id: TemplateId
    data_id: TemplateDataId
  }[]
}
