'use client'

import {
  MrbCol,
  MrbDescriptionList,
  MrbRow,
  MrbTypography,
} from '@/designSystem'
import { MrbDescription } from '@/designSystem/components/atoms/MrbDescription'

export default function DescriptionShow() {
  return (
    <>
      <MrbTypography className="mb-2">Default</MrbTypography>
      <MrbDescriptionList>
        <MrbDescription>
          <MrbDescription.Label>Name</MrbDescription.Label>
          <MrbDescription.Value>John</MrbDescription.Value>
        </MrbDescription>

        <MrbDescription>
          <MrbDescription.Label>Age</MrbDescription.Label>
          <MrbDescription.Value>25yo</MrbDescription.Value>
        </MrbDescription>
      </MrbDescriptionList>

      <MrbTypography className="mt-5 mb-2">Vertical</MrbTypography>
      <MrbRow>
        <MrbCol xs="4">
          <MrbDescriptionList orientation="vertical">
            <MrbDescription>
              <MrbDescription.Label>Name</MrbDescription.Label>
              <MrbDescription.Value>Francis</MrbDescription.Value>
            </MrbDescription>

            <MrbDescription>
              <MrbDescription.Label>Age</MrbDescription.Label>
              <MrbDescription.Value>26yo</MrbDescription.Value>
            </MrbDescription>
          </MrbDescriptionList>
        </MrbCol>
      </MrbRow>
    </>
  )
}
