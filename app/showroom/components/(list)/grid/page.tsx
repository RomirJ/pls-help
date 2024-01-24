'use client'

import { MrbDescription, MrbGrid, MrbGridItem, MrbImage } from '@/designSystem'

export default function GridShow() {
  return (
    <>
      <MrbGrid gap={2}>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/diesel-liquid-green-f1-swatch-500x500.jpeg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 1</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/AOSTA-GREEN-MARBLE-F01-500x500.jpg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 2</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/HIAA300U012A214-500x500.jpg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 3</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/projetto-zinco-f1-1000x1000-1-500x500.jpg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 4</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/fumo_100x100-500x500.jpg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 5</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
        <MrbGridItem xs={4} horizontal="center">
          <MrbImage
            size="fill"
            src="https://emporiosurfaces.com/wp-content/uploads/gf_mlab_calacatta_elite_120h60_sl_f10_as204x864-500x500.jpg"
          />
          <MrbDescription>
            <MrbDescription.Label>Type of Marble</MrbDescription.Label>
            <MrbDescription.Value>Beautiful Marble 6</MrbDescription.Value>
          </MrbDescription>
        </MrbGridItem>
      </MrbGrid>
    </>
  )
}
