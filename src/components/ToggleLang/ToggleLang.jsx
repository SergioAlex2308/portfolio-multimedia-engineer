import React from 'react'
import { useTranslation } from 'react-i18next'
import { Switch } from '@material-tailwind/react'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()
  //const [language, setLanguage] = useState(localStorage.i18nextLng)

  const handleLangChange = e => {
    const check = e.nativeEvent.target.checked
    const lang = check ? 'en' : 'es'
    //setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <div className='flex gap-2 text-gray-100 phone:text-sm'>
      <div className='radio flex items-center justify-around gap-4 font-body italic'>
        <label htmlFor='changeLang' aria-label="Español">ES</label>
        <Switch
          id='changeLang'
          ripple={true}
          color='blue'
          onChange={handleLangChange}
        />
        <label htmlFor='changeLang' aria-label="Ingles">EN</label>
      </div>
      {/* <div className='radio flex items-center font-body italic'>
        <Radio
          id='en'
          name='type'
          ripple={true}
          onChange={handleLangChange}
          value={'en'}
          checked={language === 'en'}
        />
        <label htmlFor='html'>English</label>
      </div> */}
    </div>
  )
}

export { ChangeLanguage }
