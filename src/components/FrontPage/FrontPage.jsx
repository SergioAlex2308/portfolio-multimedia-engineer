import React from 'react'
/* import AOS from 'aos'
import 'aos/dist/aos.css' */

import { Button } from 'components/Button/Button'
import { SocialIcons } from '../SocialIcons/SocialIcons'

import { useTranslation } from 'react-i18next'

function FrontPage () {
  const { t } = useTranslation()

  const label = 'CV'
  const icon = false
  const url = '../../assets/Pdf/CV_SergioMartínez.pdf'
  const download = true

  /* useEffect(() => {
    AOS.init({
      duration: 800
    })
  }) */

  return (
    <section
      id='home'
      className='relative h-screen snap-center scroll-mt-20 flex flex-col main_photo z-10 bg-photo-main-small bg-cover bg-no-repeat bg-center tablet:bg-photo-main-large tablet:bg-right-top'
    >
      <div className='main_overlay absolute w-full h-full bg-gradient-to-r from-gray-600 to-transparent'></div>
      <div className='main z-10 h-full flex justify-center items-center'>
        <div className='main_text h-2/4 flex flex-col justify-around z-10 w-full tablet:w-11/12 desktop:w-9/12'>
          <div className='main_info pl-10 z-20 w-4/5'>
            <div className='main_info_text font-header text-left flex flex-col'>
              <h3
                data-aos='fade-right'
                className='text-2xl text-blue-300 tablet:text-6xl'
              >
                {t('frontpage.greeting')}
              </h3>
              <h1
                data-aos='fade-right'
                data-aos-delay='100'
                className='text-3xl text-gray-100 tablet:text-8xl'
              >
                Sergio Martínez
              </h1>
              <h2
                data-aos='fade-right'
                data-aos-delay='200'
                className='text-base text-gray-100 tablet:text-4xl mb-4'
              >
                {t('frontpage.role')}
              </h2>
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='300'
              className='main_button w-20 h-7 tablet:w-28 tablet:h-10'
            >
              <Button label={label} icon={icon} url={url} download={download} />
            </div>
          </div>
          <div className='main_contact pl-10 w-full py-9 z-20'>
            <div className='flex justify-between'>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FrontPage }
