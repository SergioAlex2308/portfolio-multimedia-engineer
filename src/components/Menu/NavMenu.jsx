import React from 'react'
import { ChangeLanguage } from 'components/ToggleLang/ToggleLang'
import { useTranslation } from 'react-i18next'

function NavMenu ({ setOpenMenu }) {
  const { t } = useTranslation()
  const onClickMenu = () => {
    setOpenMenu(prevState => !prevState)
  }

  const classElementList =
    'font-body text-base text-gray-100 hover:text-blue-300 hover:underline hover:scale-105'

  return (
    <nav className='flex fixed top-0 w-full z-30 justify-between items-center px-10 py-4 bg-gray-500 drop-shadow-xl'>
      <div className='h-8 w-8 border-2 border-blue-300 rounded-full grid place-items-center'>
        <a href='#home'>
          <span className='text-sm text-center text-gray-300'>SM</span>
        </a>
      </div>
      <div className='sections hidden tablet:inline'>
        <ul className='flex gap-4'>
          <li className={classElementList}>
            <a href='#aboutme'>{t('about.title')}</a>
          </li>
          <li className={classElementList}>
            <a href='#studies'>{t('studies.title')}</a>
          </li>
          <li className={classElementList}>
            <a href='#projects'>{t('projects.title')}</a>
          </li>
          <li className={classElementList}>
            <a href='#contact'>{t('contact.title')}</a>
          </li>
        </ul>
      </div>
      <div className='tablet:hidden' onClick={onClickMenu}>
        <svg
          /* xmlns="http://www.w3.org/2000/svg" */
          className='fill-cyan-500 hover:fill-cyan-700 icon icon-tabler icon-tabler-menu-2 '
          width='28'
          height='28'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#ffffff'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <line x1='4' y1='6' x2='20' y2='6' />
          <line x1='4' y1='12' x2='20' y2='12' />
          <line x1='4' y1='18' x2='20' y2='18' />
        </svg>
      </div>
      <ChangeLanguage />
    </nav>
  )
}

export { NavMenu }
