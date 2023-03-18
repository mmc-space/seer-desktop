import type { FC } from 'react'
import { Card, List } from 'antd'
import type { Skill } from '@/core/skill'

interface SkillsProps {
  skills: Skill[]
  handleUseSkill?: (skill: Skill) => void
}

export const Operate: FC<SkillsProps> = ({ skills, handleUseSkill }) => {
  return (
    <div>
      <List
        grid={{
          gutter: 8,
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={skills}
        renderItem={(item, index) => (
          <List.Item
            key={`${item.id}-${index}`}
            onClick={() => handleUseSkill?.(item)}
          >
            <Card>
              <p>道具</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}
