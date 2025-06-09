import type { IConfigOption } from '@/types'

import { defaultTheme, graceTheme, simpleTheme, womenStackGrace, womenStackNormal, womenStackWeekly } from './themes'

export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  simple: simpleTheme,
  womenStack: womenStackNormal,
  weekly: womenStackWeekly,
  graceTheme: womenStackGrace,
}

export const themeOptions: IConfigOption<keyof typeof themeMap>[] = [
  {
    label: `周刊`,
    value: `weekly`,
    desc: `@WomenStack`,
  },
  {
    label: `日常`,
    value: `womenStack`,
    desc: `@WomenStack`,
  },
  {
    label: `Grace`,
    value: `graceTheme`,
    desc: `@WomenStack`,
  },
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
]
