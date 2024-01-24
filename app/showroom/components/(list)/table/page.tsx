'use client'

import { MrbCol, MrbTable } from '@/designSystem'

export default function TableShow() {
  return (
    <>
      <MrbCol gap={1}>
        <MrbTable isHover>
          <MrbTable.Head>
            <MrbTable.HeadRow>
              <MrbTable.HeadColumn>Header 1</MrbTable.HeadColumn>
              <MrbTable.HeadColumn>Header 2</MrbTable.HeadColumn>
              <MrbTable.HeadColumn>Header 3</MrbTable.HeadColumn>
            </MrbTable.HeadRow>
          </MrbTable.Head>
          <MrbTable.Body>
            <MrbTable.Row>
              <MrbTable.Column>Column one</MrbTable.Column>
              <MrbTable.Column>Column two</MrbTable.Column>
              <MrbTable.Column>Column three</MrbTable.Column>
            </MrbTable.Row>
            <MrbTable.Row>
              <MrbTable.Column>Column one</MrbTable.Column>
              <MrbTable.Column>Column two</MrbTable.Column>
              <MrbTable.Column>Column three</MrbTable.Column>
            </MrbTable.Row>
          </MrbTable.Body>
        </MrbTable>

        <MrbTable variant="inner">
          <MrbTable.Head>
            <MrbTable.HeadRow>
              <MrbTable.HeadColumn>Header 1</MrbTable.HeadColumn>
              <MrbTable.HeadColumn>Header 2</MrbTable.HeadColumn>
              <MrbTable.HeadColumn>Header 3</MrbTable.HeadColumn>
            </MrbTable.HeadRow>
          </MrbTable.Head>
          <MrbTable.Body>
            <MrbTable.Row>
              <MrbTable.Column>Column one</MrbTable.Column>
              <MrbTable.Column>Column two</MrbTable.Column>
              <MrbTable.Column>Column three</MrbTable.Column>
            </MrbTable.Row>
            <MrbTable.Row>
              <MrbTable.Column>Column one</MrbTable.Column>
              <MrbTable.Column>Column two</MrbTable.Column>
              <MrbTable.Column>Column three</MrbTable.Column>
            </MrbTable.Row>
          </MrbTable.Body>
        </MrbTable>
      </MrbCol>
    </>
  )
}
