import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio } from '@material-tailwind/react'

const ChangeLanguage = () => {
  //const userLanguage = navigator.language.split('-')[0]

  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(localStorage.i18nextLng)

  const handleLangChange = e => {
    const lang = e.target.value
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <div className='flex gap-2 text-gray-100 phone:text-sm'>
      <Radio
        id='html'
        name='type'
        label='Español'
        ripple={true}
        onChange={handleLangChange}
        value={'es'}
        checked={language === 'es'}
      />
      <Radio
        id='react'
        name='type'
        label='Ingles'
        ripple={true}
        onChange={handleLangChange}
        value={'en'}
        checked={language === 'en'}
      />
    </div>
  )
}

export { ChangeLanguage }
