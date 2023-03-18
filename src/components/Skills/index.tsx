import type { FC } from 'react'
import { Card, List } from 'antd'
import type { Skill } from '@/core/skill'

interface SkillsProps {
  skills: Skill[]
  handleUseSkill: (skill: Skill) => void
}

export const Skills: FC<SkillsProps> = ({ skills, handleUseSkill }) => {
  return (
    <div>
      <List
        grid={{
          gutter: 8,
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={skills}
        renderItem={(item, index) => (
          <List.Item
            key={`${item.id}-${index}`}
            onClick={() => handleUseSkill(item)}
          >
            <Card>
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
    </div>
  )
}
