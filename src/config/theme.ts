import type { IConfigOption } from '@/types'

import { defaultTheme, graceTheme, simpleTheme, subBlue, womenStackGrace, womenStackJobs, womenStackNormal, womenStackWeekly } from './themes'

export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  simple: simpleTheme,
  womenStack: womenStackNormal,
  weekly: womenStackWeekly,
  jobs: womenStackJobs,
  graceTheme: womenStackGrace,
  subBlue,
}

export const themeOptions: IConfigOption<keyof typeof themeMap>[] = [
  {
    label: `周刊`,
    value: `weekly`,
    desc: `@WomenStack`,
  },
  {
    label: `职通车`,
    value: `jobs`,
    desc: `@WomenStack`,
  },
  // {
  //   label: `日常`,
  //   value: `womenStack`,
  //   desc: `@WomenStack`,
  // },
  {
    label: `优雅日常`,
    value: `graceTheme`,
    desc: `@WomenStack`,
  },
  {
    label: `蓝副色-支持三级`,
    value: `subBlue`,
    desc: `@asa`,
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
