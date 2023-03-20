import type { FC } from 'react'
import { Card, List } from 'antd'
import type { Skill } from '@/core/skill'

interface SkillsProps {
  skills: Skill[]
  handleUseSkill: (skill: Skill) => void
}

export const Skills: FC<SkillsProps> = (props) => {
  const { skills, handleUseSkill } = props

  return (
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
          onClick={() => handleUseSkill(item)}
        >
          <Card bodyStyle={{ padding: '0.5rem' }}>
            <p>{item.skillType}</p>
            <p>{item.name}</p>
            <p>
              次数{item.times - item.usedTimes} / {item.times}
            </p>
            <p>威力{item.harm}</p>
          </Card>
        </List.Item>
      )}
    />
  )
}
