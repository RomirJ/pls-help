'use client'

import {
  MrbCard,
  MrbCol,
  MrbDivider,
  MrbLink,
  MrbTypography,
} from '@/designSystem'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function HomePage() {
  return (
    <PageLayout>
      <MrbCard size="large">
        <MrbCol gap={1}>
          <MrbTypography variant="h2">Welcome to Marblism 👋</MrbTypography>
          <MrbTypography variant="primary">
            You are all set up! You can start navigating the app and make it
            yours.
          </MrbTypography>
          <MrbTypography variant="primary">
            The AI-generated pages always compile but may behave unexpectedly.{' '}
            <br />
            To fix the little quirks,{' '}
            <MrbLink
              variant="primary"
              to="https://dev.marblism.com/code-your-first-feature"
              newWindow
            >
              follow this tutorial
            </MrbLink>
            .
          </MrbTypography>
          <MrbTypography variant="primary">
            You will get a fully-functional app in less than 60 minutes of work.
          </MrbTypography>
          <MrbDivider className="mt-1 mb-1" />
          <MrbTypography variant="caption">
            If you have any problems, join our{' '}
            <MrbLink
              variant="primary"
              to="https://discord.gg/GScNz7kAEu"
              newWindow
            >
              Discord
            </MrbLink>
            . We reply fast!
          </MrbTypography>
        </MrbCol>
      </MrbCard>
    </PageLayout>
  )
}
