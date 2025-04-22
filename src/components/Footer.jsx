import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#E0E0CF] py-8 w-full pt-20 pl-20 pr-20 overflow-hidden '>
      <section className=''>
        <div className='flex justify-center gap-50 text-base mb-20'>
          <ul className=''>
            <li className='font-bold '>About</li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold'>Support</li>
            <li>
              <a href="">Getting Started</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul>
            <li className='font-bold'>Products</li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">SkillSprout packs</a>
            </li>
            <li>
              <a href="">SkillSprout writing</a>
            </li>
          </ul>

        </div>
        <div>
          <p className='text-center text-sm'> © 2025 SkillSprout.org. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;