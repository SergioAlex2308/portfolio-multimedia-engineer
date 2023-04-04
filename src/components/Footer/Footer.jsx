import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer () {
  const { t } = useTranslation()
  return (
    <footer className='snap-end flex flex-col justify-center items-center w-full h-24 bg-gray-500 text-gray-400 font-body italic'>
      <p>{t('footer.thanks')} 🤙</p>
      <p>&copy;2023 Sergio Martínez</p>
      <p className='not-italic'>👋🤓</p>
    </footer>
  )
}

export { Footer }
