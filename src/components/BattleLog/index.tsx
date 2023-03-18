import type { FC } from 'react'
import { List } from 'antd'
import type { IBattleLog } from '@/core/battle'

export const BattleLog: FC<{ logs: IBattleLog[] }> = ({ logs }) => {
  return (
    <div>
      <List
        size="small"
        dataSource={logs}
        rowKey="round"
        renderItem={item => (
          <List.Item>
            [{item.round}] <span className="text-red-400">[{item.target}]</span>
            {' 使用了 '}
            {item.skillName} {item.desc}
          </List.Item>
        )}
      />
    </div>
  )
}
