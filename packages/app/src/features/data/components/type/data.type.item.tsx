import { Type } from 'src/features/node/type'

import { useDataContext } from '../../data.context'
import { DataE } from '../data'
import { ValueTypeObject } from './data.type.object'

export function ValueTypeItem() {
  const { draft, saved, $change } = useDataContext<Type.Type, Type.Any>()

  switch (draft.type) {
    case 'object':
      return <ValueTypeObject />

    case 'array':
      return (
        <DataE
          Label="Of Type"
          type={{ type: 'type' }}
          saved={(saved as Type.Array)?.of}
          draft={draft.of}
          onChange={(of: Type.Any) => $change({ ...draft, of })}
        />
      )

    case 'node':
      return null

    default:
      return null
  }
}
