'use client'

import {
  MrbButton,
  MrbCard,
  MrbCol,
  MrbDescription,
  MrbDescriptionList,
  MrbIcon,
  MrbImage,
  MrbList,
  MrbRow,
  MrbTag,
  MrbTypography,
} from '@/designSystem'

export default function CardShow() {
  return (
    <>
      <MrbCol gap={2}>
        <MrbCard
          size="small"
          className="mb-2"
          onClick={() => console.log('Hello Marble')}
        >
          <MrbCard.Header>Small</MrbCard.Header>
          <MrbCard.Body>Body</MrbCard.Body>
          <MrbCard.Footer>Footer</MrbCard.Footer>
        </MrbCard>

        <MrbCard size="medium" className="mb-2">
          <MrbCard.Header>Medium</MrbCard.Header>
          <MrbCard.Body>Body</MrbCard.Body>
          <MrbCard.Footer>Footer</MrbCard.Footer>
        </MrbCard>

        <MrbCard size="large" className="mb-2">
          <MrbCard.Header>Large</MrbCard.Header>
          <MrbCard.Body>Body</MrbCard.Body>
          <MrbCard.Footer>Footer</MrbCard.Footer>
        </MrbCard>

        <MrbCard size="full-width" className="mb-2">
          <MrbCard.Header>Full Width</MrbCard.Header>
          <MrbCard.Body>Body</MrbCard.Body>
          <MrbCard.Footer>Footer</MrbCard.Footer>
        </MrbCard>

        <MrbCard size="full-width" className="mb-2">
          <MrbCard.Header>
            <MrbRow vertical="center" gap={1}>
              <MrbCol>
                <MrbImage src="https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100000047/logo/flexport-logo-500w.png" />
              </MrbCol>
              <MrbCol>
                <MrbTypography variant="primary">Unicorn</MrbTypography>
                <MrbTypography variant="secondary">Series B</MrbTypography>
              </MrbCol>
            </MrbRow>
          </MrbCard.Header>
          <MrbCard.Body>
            <MrbDescriptionList orientation="horizontal" columns={3}>
              <MrbDescription>
                <MrbDescription.Label>Stage</MrbDescription.Label>
                <MrbDescription.Value>Series A</MrbDescription.Value>
              </MrbDescription>
              <MrbDescription>
                <MrbDescription.Label>Amount Raised</MrbDescription.Label>
                <MrbDescription.Value>$500,000</MrbDescription.Value>
              </MrbDescription>
              <MrbDescription>
                <MrbDescription.Label>Creation Date</MrbDescription.Label>
                <MrbDescription.Value>2 February 2023</MrbDescription.Value>
              </MrbDescription>
              <MrbDescription>
                <MrbDescription.Label>Share Price</MrbDescription.Label>
                <MrbDescription.Value>$499.99</MrbDescription.Value>
              </MrbDescription>
            </MrbDescriptionList>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right">
              <MrbButton variant="primary" size="small">
                Invest
              </MrbButton>
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>

        <MrbCard size="medium" className="mb-2">
          <MrbCard.Header>
            <MrbRow vertical="center" horizontal="between">
              <MrbCol>
                <MrbTag>Basic</MrbTag>
                <MrbTypography variant="h3">Gold Plan</MrbTypography>
              </MrbCol>
              <MrbCol>
                <MrbButton noPadding variant="plain">
                  <MrbIcon name="info" />
                </MrbButton>
              </MrbCol>
            </MrbRow>
          </MrbCard.Header>
          <MrbCard.Body>
            <MrbList size="small">
              <MrbList.Item>
                <MrbIcon name="tick" />
                Item 1
              </MrbList.Item>
              <MrbList.Item>
                <MrbIcon name="tick" />
                Item 1
              </MrbList.Item>
              <MrbList.Item>
                <MrbIcon name="tick" />
                Item 1
              </MrbList.Item>
            </MrbList>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right">
              <MrbButton size="small">Buy now</MrbButton>
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>
      </MrbCol>
    </>
  )
}
