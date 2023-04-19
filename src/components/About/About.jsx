import React from 'react'

import { Divider } from '../Divider/Divider'
import { Header } from '../Header/Header'
import { useTranslation } from 'react-i18next'

function About () {
  const { t } = useTranslation()
  const title = t('about.title')

  return (
    <section
      id='aboutme'
      className='about snap-center h-screen bg-gray-500 font-header text-3xl text-gray-100 flex flex-col justify-between items-center'
    >
      <Header title={title} />
      <div className='about_info flex flex-col h-full items-center justify-evenly px-6 laptop:flex-row w-full tablet:w-11/12 desktop:w-9/12'>
        <div className='about_photo w-3/5 tablet:w-4/12 desktop:w-3/12'>
          <img
            className='rounded-xl drop-shadow-xl'
            src={require('../../assets/Images/Background/Profile.webp')}
            alt='Hombre con lentes sonriendo'
          />
        </div>
        <p className='about_text font-body text-center text-sm tablet:text-2xl px-8 tablet:px-32 laptop:text-3xl laptop:text-left laptop:px-8  laptop:w-3/6'>
          {t('about.description')}
        </p>
      </div>
      <Divider />
    </section>
  )
}

export { About }
