import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as LogoLight } from 'assets/Icons/Logo/Logo_Light_Silhouette.svg'

function Footer () {
  const { t } = useTranslation()
  return (
    <footer className='snap-end flex flex-col justify-center items-center w-full h-full gap-5 bg-gray-500 text-gray-400 font-body italic py-4'>
      <div className='footer-logo'>
        <LogoLight width='40px' />
      </div>
      <div className='footer-text flex flex-col items-center'>
        <p>{t('footer.thanks')} 🤙</p>
        <p>&copy;2023 Sergio Martínez</p>
      </div>
    </footer>
  )
}

export { Footer }
