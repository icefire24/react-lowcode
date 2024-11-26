import { useDrop } from 'react-dnd'
import { useComponetsStore } from '../store/component'
import { useComponentConfigStore } from '../store/component-config'
export const useMaterialDrop = (accept: string[], id: number) => {
  let { addComponent } = useComponetsStore()
  let { componentConfig } = useComponentConfigStore()
  const [{ canDrop }, dropRef] = useDrop({
    accept,
    drop: (item: any, monitor) => {
      const didDrop = monitor.didDrop()
      const config = componentConfig[item.type]
      if (didDrop) return
      addComponent(
        {
          id: Date.now(),
          name: item.type,
          desc: config?.desc,
          props: componentConfig[item.type].defaultProps,
          styles: {
            background: 'green',
          },
        },
        id,
      )
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
    }),
  })
  return { canDrop, dropRef }
}
