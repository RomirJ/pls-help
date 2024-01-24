'use client'

import { MrbCard, MrbRow } from '@/designSystem'
import { MrbKanban, MrbKanbanChangeEvent } from '@/designSystem/components'
import { useEffect, useState } from 'react'

export default function KanbanShow() {
  const content = <div>hello</div>

  const [stages, setStages] = useState([])

  useEffect(() => {
    const stages = [
      {
        id: 'stage-1',
        title: 'To do',
        tasks: [
          { id: 'task-1', title: 'task-1' },
          { id: 'task-2', title: 'task-2' },
        ],
      },

      {
        id: 'stage-2',
        title: 'In Progress',
        tasks: [{ id: 'task-3', title: 'task-3' }],
      },
      {
        id: 'stage-3',
        title: 'Done',
        tasks: [],
      },
    ]

    setStages(stages)
  }, [])

  function onChange({ draggedItem, droppedZone }: MrbKanbanChangeEvent) {
    const active = draggedItem
    const over = droppedZone

    if (active?.id && over?.id && active.id !== over.id) {
      setStages(prevStages => {
        const newStages = [...prevStages]

        const activeStage = newStages.find(stage =>
          stage.tasks.find(task => task.id === active.id),
        )
        const destStage = newStages.find(stage => stage.id === over.id)
        const [removed] = activeStage.tasks.splice(active['index'], 1)
        destStage.tasks.splice(over['index'], 0, removed)

        return newStages
      })
    }
  }
  return (
    <>
      <MrbRow className="mrb-fill-y">
        <MrbKanban onChange={onChange}>
          {stages?.map(stage => (
            <MrbKanban.Column title={stage.title} id={stage.id} key={stage.id}>
              {stage.tasks?.map(task => (
                <MrbKanban.Item id={task.id} key={`${stage.id}-${task.id}`}>
                  <MrbCard>{task.title}</MrbCard>
                </MrbKanban.Item>
              ))}
            </MrbKanban.Column>
          ))}
        </MrbKanban>
      </MrbRow>
    </>
  )
}
