'use client'

import { MrbCard, MrbCol, MrbTypography } from '@/designSystem'
import { MrbTabs } from '@/designSystem/components/atoms/MrbTabs'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

export default function TabsShow() {
  const tabs = ['Tab 1', 'Tab 2']
  const [activeTab, setActiveTab] = useState<number>(1)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.get('tab')
  console.log(searchParams.toString())
  return (
    <>
      <MrbTypography variant="h3">Without Router</MrbTypography>
      <MrbTabs>
        <MrbTabs.Item
          isActive={activeTab === 1}
          onClick={() => {
            setActiveTab(1)
          }}
        >
          Tab 1
        </MrbTabs.Item>
        <MrbTabs.Item
          isActive={activeTab === 2}
          onClick={() => {
            setActiveTab(2)
          }}
        >
          Tab 2
        </MrbTabs.Item>
      </MrbTabs>
      <MrbCard className="m-2">
        {activeTab === 1 && <MrbTypography>Tab 1 Content</MrbTypography>}
        {activeTab === 2 && <MrbTypography>Tab 2 Content</MrbTypography>}
      </MrbCard>
      <MrbTypography variant="h3">With Router</MrbTypography>
      <MrbTabs>
        <MrbTabs.Item to={`${pathname}?tab=tab1`}>Tab 1</MrbTabs.Item>
        <MrbTabs.Item to={`${pathname}?tab=tab2`}>Tab 2</MrbTabs.Item>
      </MrbTabs>
      <MrbCard className="m-2">
        {search === 'tab1' && <MrbTypography>Tab 1 Content</MrbTypography>}
        {search === 'tab2' && <MrbTypography>Tab 2 Content</MrbTypography>}
      </MrbCard>
      <MrbTypography variant="h3">Vertical</MrbTypography>
      <MrbCol xs="6" md="2">
        <MrbTabs orientation="vertical">
          <MrbTabs.Item
            isActive={activeTab === 1}
            onClick={() => {
              setActiveTab(1)
            }}
          >
            Tab 1
          </MrbTabs.Item>
          <MrbTabs.Item
            isActive={activeTab === 2}
            onClick={() => {
              setActiveTab(2)
            }}
          >
            Tab 2
          </MrbTabs.Item>
        </MrbTabs>
      </MrbCol>
    </>
  )
}
