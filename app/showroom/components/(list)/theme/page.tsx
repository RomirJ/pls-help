'use client'

import { MrbCol, MrbGrid, MrbGridItem, MrbRow, Theme } from '@/designSystem'

type Item = [string, any]

const Spaces = (props: { items: Item[] }) => {
  const itemsFiltered = props.items.filter(item => {
    const name = item[0]
    const isOK = name.startsWith('space_')
    return isOK
  })

  return (
    <>
      <MrbGrid>
        <MrbGridItem xs={12}>
          <h1>Spaces</h1>
        </MrbGridItem>
        <MrbGridItem xs={12}>
          {itemsFiltered.map(([name, value]) => (
            <MrbRow key={name}>
              <MrbCol xs={2}>
                <b>{name}</b>
              </MrbCol>

              <MrbCol xs={2}>
                <span>{value}</span>
              </MrbCol>
              <MrbCol xs={8}>
                <div
                  style={{
                    background: Theme.colorPrimary,
                    color: Theme.colorPrimary,
                    width: value,
                  }}
                >
                  {'.'}
                </div>
              </MrbCol>
            </MrbRow>
          ))}
        </MrbGridItem>
      </MrbGrid>
    </>
  )
}

const Colors = (props: { items: Item[] }) => {
  const itemsFiltered = props.items.filter(item => {
    const name = item[0]
    const isOK = name.startsWith('color') || name.startsWith('ui_')
    return isOK
  })

  return (
    <>
      <MrbGrid>
        <MrbGridItem xs={12}>
          <h1>Colors</h1>
        </MrbGridItem>
        <MrbGridItem xs={12}>
          <MrbRow>
            {itemsFiltered.map(([name, value]) => (
              <MrbCol
                key={name}
                xs={4}
                className="p-2"
                style={{ background: value }}
              >
                <b>{name}</b>
              </MrbCol>
            ))}
          </MrbRow>
        </MrbGridItem>
      </MrbGrid>
    </>
  )
}

const TextSize = (props: { items: Item[] }) => {
  const itemsFiltered = props.items.filter(item => {
    const name = item[0]
    const isOK = name.startsWith('textSize_')
    return isOK
  })

  return (
    <>
      <MrbGrid>
        <MrbGridItem xs={12}>
          <h1>Text Sizes</h1>
        </MrbGridItem>
        <MrbGridItem xs={12}>
          {itemsFiltered.map(([name, value]) => (
            <MrbRow key={name}>
              <MrbCol xs={2}>
                <b>{name}</b>
              </MrbCol>
              <MrbCol xs={10} style={{ fontSize: value }}>
                {value}
              </MrbCol>
            </MrbRow>
          ))}
        </MrbGridItem>
      </MrbGrid>
    </>
  )
}

const Breakpoints = (props: { items: Item[] }) => {
  const itemsFiltered = props.items.filter(item => {
    const name = item[0]
    const isOK = name.startsWith('breakpoint_')
    return isOK
  })

  return (
    <MrbGrid>
      <MrbGridItem xs={12}>
        <h1>Breakpoints</h1>
      </MrbGridItem>
      <MrbGridItem xs={12}>
        {itemsFiltered.map(([name, value]) => (
          <MrbRow key={name}>
            <MrbCol xs={4}>
              <b>{name}</b>
            </MrbCol>
            <MrbCol xs={8}>
              <span>{value}px</span>
            </MrbCol>
          </MrbRow>
        ))}
      </MrbGridItem>
    </MrbGrid>
  )
}

const BoxShadows = (props: { items: Item[] }) => {
  const itemsFiltered = props.items.filter(item => {
    const name = item[0]
    const isOK = name.startsWith('boxShadow')
    return isOK
  })

  return (
    <MrbGrid>
      <MrbGridItem xs={12}>
        <h1>Box Shadows</h1>
      </MrbGridItem>
      <MrbGridItem xs={12}>
        {itemsFiltered.map(([name, value]) => (
          <MrbRow key={name} vertical="center">
            <MrbCol xs={2}>
              <b>{name}</b>
            </MrbCol>
            <MrbCol xs={6} style={{ fontSize: Theme.textSize_xs }}>
              {value}
            </MrbCol>
            <MrbCol xs={4} className="p-4">
              <div
                className="mrb-fill-x"
                style={{ height: '20px', boxShadow: value }}
              ></div>
            </MrbCol>
          </MrbRow>
        ))}
      </MrbGridItem>
    </MrbGrid>
  )
}

const Borders = (props: { items: Item[] }) => {
  return (
    <>
      <MrbGrid>
        <MrbGridItem xs={12}>
          <h1>Borders</h1>
        </MrbGridItem>
        <MrbGridItem xs={12}>
          <MrbRow vertical="center">
            <MrbCol xs={2}>borderRadius</MrbCol>
            <MrbCol xs={2}>{Theme.borderRadius}</MrbCol>
            <MrbCol xs={8} className="p-4">
              <div
                className="mrb-fill-x"
                style={{
                  height: '20px',
                  borderRadius: Theme.borderRadius,
                  border: '1px solid #000',
                }}
              ></div>
            </MrbCol>
          </MrbRow>
        </MrbGridItem>
      </MrbGrid>
    </>
  )
}

export default function ThemeShow() {
  const items = Object.entries(Theme)

  const itemsBorder = []

  items.forEach(item => {
    const name = item[0]

    const isBorder = name.startsWith('border_')
    if (isBorder) {
      itemsBorder.push(item)
    }
  })

  return (
    <>
      <MrbCol gap={1}>
        <Spaces items={items} />
        <Breakpoints items={items} />
        <TextSize items={items} />
        <BoxShadows items={items} />
        <Colors items={items} />
        <Borders items={items} />
      </MrbCol>
    </>
  )
}
