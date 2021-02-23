import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'หน้าหลัก / Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'เทรด / Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'แลกเปลี่ยน / Exchange',
        href: 'http://pancakexx.web.app/#/swap',
      },
      {
        label: 'สภาพคล่อง / Liquidity',
        href: 'http://pancakexx.web.app/#/pool',
      },
    ],
  },
  {
    label: 'ฟาร์ม / Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: 'พูล',
  //   icon: 'PoolIcon',
  //   href: '/syrup',
  // },
  {
    label: 'ลอตเตอรี่ / Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'เพิ่มเติม / More ',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
