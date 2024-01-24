'use client'

import { MrbNavbar } from '@/designSystem'
import { StringLibrary } from '@/libraries/string'
import { Utility } from '@/libraries/utility'

export function Leftbar() {
  const To = {
    ALERT: `/showroom/components/alert`,
    AVATAR: `/showroom/components/avatar`,
    BADGE: `/showroom/components/badge`,
    BUTTON: `/showroom/components/button`,
    CARD: `/showroom/components/card`,
    COMMENT: `/showroom/components/comment`,
    DEMO: `/showroom/components/demo`,
    CHECKBOX: `/showroom/components/checkbox`,
    COL: `/showroom/components/col`,
    DESCRIPTION: `/showroom/components/description`,
    DIVIDER: `/showroom/components/divider`,
    DROPDOWN: `/showroom/components/dropdown`,
    EDITOR: `/showroom/components/editor`,
    KANBAN: `/showroom/components/kanban`,
    EMPTYSTATE: `/showroom/components/emptyState`,
    FORM: `/showroom/components/form`,
    GRID: `/showroom/components/grid`,
    ICON: `/showroom/components/icon`,
    IMAGE: `/showroom/components/image`,
    LINK: `/showroom/components/link`,
    LIST: `/showroom/components/list`,
    LOADER: `/showroom/components/loader`,
    MODAL: `/showroom/components/modal`,
    NAVBAR: `/showroom/components/navbar`,
    NOTIFICATION: `/showroom/components/notification`,
    ROW: `/showroom/components/row`,
    STEPPER: `/showroom/components/stepper`,
    TABLE: `/showroom/components/table`,
    TABS: `/showroom/components/tabs`,
    TAG: `/showroom/components/tag`,
    THEME: `/showroom/components/theme`,
    TOAST: `/showroom/components/toast`,
    TOOLTIP: `/showroom/components/tooltip`,
    TYPOGRAPHY: `/showroom/components/typography`,
  }

  const items = Object.entries(To).map(([name, to]) => ({
    name,
    to,
  }))

  const itemsSorted = Utility.sortByString(items, 'name')

  return (
    <>
      <MrbNavbar direction="vertical">
        {itemsSorted.map(({ name, to }) => (
          <MrbNavbar.Link key={name} to={to}>
            {StringLibrary.toCapitalisedCamelCase(name)}
          </MrbNavbar.Link>
        ))}
      </MrbNavbar>
    </>
  )
}
