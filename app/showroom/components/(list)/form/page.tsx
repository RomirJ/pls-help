'use client'

import { MrbButton, MrbTag } from '@/designSystem'
import {
  MrbForm,
  MrbFormInputConfiguration,
} from '@/designSystem/components/organisms/MrbForm'
import { StringLibrary } from '@/libraries/string'
import { useState } from 'react'

export default function FormShow() {
  const [values, setValues] = useState()
  const [isSubmitted, setSubmitted] = useState(false)

  const ImageRadioButton = ({ image, label }) => (
    <div>
      <div>{label}</div>
      <img
        src={image}
        alt={label}
        style={{ width: '100px', borderRadius: '10px', marginTop: '10px' }}
      />
    </div>
  )

  const inputs: MrbFormInputConfiguration[] = [
    {
      key: 'email',
      label: 'Email',
      indication: 'For ex: john@example.com',
      isOptional: true,
      props: {
        type: 'email',
      },
    },
    {
      key: 'firstname',
      label: 'First name',
      indication: 'For ex: John',
      props: {
        placeholder: 'John',
      },
    },
    {
      key: 'bio',
      type: 'textarea',
      label: 'Bio',
      props: { placeholder: 'This is my story...' },
    },
    {
      key: 'age',
      type: 'number',
      label: 'Age',
    },
    {
      key: 'dateOfBirth',
      type: 'date',
      label: 'Date of Birth',
    },
    {
      key: 'color',
      type: 'select',
      label: 'Color',
      props: { placeholder: 'Choose a color' },
      options: [
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
      ],
    },
    {
      key: 'direction',
      type: 'select',
      label: 'Direction',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      key: 'animal',
      type: 'radio',
      label: 'Your favourite animal',
      options: [
        {
          label: 'Cat',
          value: 'cat',
        },
        {
          label: 'Dog',
          value: 'dog',
        },
      ],
    },
    {
      key: 'marble',
      type: 'radio',
      label: 'Your favourite marble?',
      orientation: 'horizontal',
      options: [
        {
          label: (
            <ImageRadioButton
              label="Black & Gold"
              image="https://i.imgur.com/JRJbXPu.png"
            />
          ),
          value: 'GOLD',
        },
        {
          label: (
            <ImageRadioButton
              label="Green & White"
              image="https://i.imgur.com/7ZQAanf.png"
            />
          ),
          value: 'GREEN',
        },
      ],
    },
    {
      key: 'hasAccepted',
      type: 'checkbox',
      label: 'Do you accept the terms and conditions?',
    },
    {
      key: 'acceptedTermsAndConditions',
      type: 'text',
      label: 'How does it feel to accep something?',
      isVisible: values => values.hasAccepted === true,
    },
    {
      key: 'rejectedTermsAndConditions',
      type: 'text',
      label: 'How does it feel to reject something?',
      isVisible: values => values.hasAccepted === false,
    },
    {
      key: 'addresses',
      type: 'list',
      label: 'Addresses',
      inputs: [
        {
          key: 'street',
          label: 'Street',
          props: { placeholder: '4 rue du Capitaine Potiron' },
        },
        {
          key: 'country',
          label: 'Country',
          props: { placeholder: 'Choose a Country' },
        },
      ],
    },
  ]

  const handleChange = values => {
    setValues(values)
  }

  const handleSubmit = values => {
    setSubmitted(!isSubmitted)
  }

  return (
    <>
      {StringLibrary.stringify(values)}

      <div>
        {isSubmitted && <MrbTag>Submitted</MrbTag>}
        {!isSubmitted && <MrbTag>Draft</MrbTag>}
      </div>

      <MrbForm
        defaultValues={values}
        inputs={inputs}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <MrbButton type="submit">Submit</MrbButton>
      </MrbForm>
    </>
  )
}
