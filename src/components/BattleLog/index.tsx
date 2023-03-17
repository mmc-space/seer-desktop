import type { FC } from 'react'
import type { IBattleLog } from '@/core/battle'

export const BattleLog: FC<{ logs: IBattleLog[] }> = ({ logs }) => {
  return (
    <div>
      <p>对战信息</p>
      <ul className="h-24 max-h-24 overflow-x-hidden border border-solid border-black">
        {logs.map(log => (<li key={log.round}>
          [{log.round}] - <span className="">[{log.target}]</span> 使用了 {log.skillName} {log.desc}
        </li>))}
      </ul>
    </div>
  )
}
