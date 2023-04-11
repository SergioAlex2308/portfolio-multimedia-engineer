import React from 'react'
import { useTranslation } from 'react-i18next'

function DropDown ({ setOpenMenu }) {
  const { t } = useTranslation()
  const classElementList =
    'font-header text-gray-100 text-6xl hover:text-blue-300 hover:underline'

  const onClickMenu = (delay = 500) => {
    setTimeout(() => {
      setOpenMenu(prevState => !prevState)
    }, delay)
  }
  return (
    <div
      data-aos='fade-up'
      className='menu flex flex-col justify-between p-6 h-full w-full'
    >
      <div
        className='menu_close w-full flex flex-row-reverse pb-4'
        onClick={() => onClickMenu(0)}
      >
        <svg
          className='h-6 w-6 fill-gray-100'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#ffffff'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
      <menu className='flex flex-col h-2/5 justify-around'>
        <li className={classElementList}>
          <a onClick={() => onClickMenu()} href='#aboutme'>
            {t('about.title')}
          </a>
        </li>
        <li className={classElementList}>
          <a onClick={() => onClickMenu()} href='#studies'>
            {t('studies.title')}
          </a>
        </li>
        <li className={classElementList}>
          <a onClick={() => onClickMenu()} href='#contact'>
            {t('contact.title')}
          </a>
        </li>
        <li className={classElementList}>
          <a onClick={() => onClickMenu()} href='#projects'>
            {t('projects.title')}
          </a>
        </li>
      </menu>
    </div>
  )
}

export { DropDown }
