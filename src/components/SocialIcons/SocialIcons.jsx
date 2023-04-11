import React from 'react'

import behance from '../../assets/Icons/Contact/Contact_Icon-01.png'
import linkedin from '../../assets/Icons/Contact/Contact_Icon-02.png'
import github from '../../assets/Icons/Contact/Contact_Icon-06.png'
import instagram from '../../assets/Icons/Contact/Contact_Icon-04.png'

function SocialIcons () {
  const socialUrl = {
    url_behance: 'https://github.com/SergioAlex2308',
    url_linkedin: 'https://www.linkedin.com/in/sergio-martinez-cardenas/',
    url_git: 'https://www.behance.net/sergiomartinez49',
    url_instagram: 'https://www.instagram.com/smartinez_ph/'
  }

  return (
    <div id='icons'>
      <ul className='flex flex-col gap-3 w-5'>
        <li data-aos-delay='400' className='w-6 hover:scale-110 tablet:w-8'>
          <a
            href={socialUrl.url_behance}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='Behance logo' width='40px' height='40px' />
          </a>
        </li>
        <li data-aos-delay='500' className='w-6 hover:scale-110 tablet:w-8'>
          <a
            href={socialUrl.url_linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={linkedin}
              alt='Lindkein logo'
              width='40px'
              height='40px'
            />
          </a>
        </li>
        <li data-aos-delay='600' className='w-6 hover:scale-110 tablet:w-8'>
          <a
            href={socialUrl.url_behance}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={behance} alt='Behance logo' width='40px' height='40px' />
          </a>
        </li>
        <li data-aos-delay='700' className='w-6 hover:scale-110 tablet:w-8'>
          <a
            href={socialUrl.url_instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={instagram}
              alt='Instagram logo'
              width='40px'
              height='40px'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export { SocialIcons }
