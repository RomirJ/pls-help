'use client'

import { MrbList } from '@/designSystem/components/atoms/MrbList'
import { MrbComment } from '@/designSystem/components/molecules/MrbComment'

export default function CommentShow() {
  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <>
      <MrbList>
        <MrbList.Item>
          <MrbComment
            name="Ulric Musset"
            date="21/05/2019"
            content="Hello world!"
          />
        </MrbList.Item>
        <MrbList.Item>
          <MrbComment
            name="Cyril Pluche"
            date="21/05/2024"
            content="Hello Marblers!"
          />
        </MrbList.Item>
        <MrbList.Item>
          <MrbComment
            name="John Doe"
            date="21/05/2023"
            content="Great comment!"
          />
        </MrbList.Item>
      </MrbList>
    </>
  )
}
