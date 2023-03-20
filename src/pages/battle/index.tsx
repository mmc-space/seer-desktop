import { useBattle } from './useBattle'
import type { Skill } from '@/core/skill'
import { Player } from '@/core/player'
import { BattleLog } from '@/components/BattleLog'
import { Skills } from '@/components/Skills'
import { Operate } from '@/components/Operate'

const player = new Player(31)

const BattlePage = () => {
  const { round, useSkill, logs, self, opponent } = useBattle(player)

  const handleUseSkill = (skill: Skill) => {
    useSkill(skill)
  }

  // grid 9宫格布局
  return (
    <div className="grid grid-rows-3">
      <div className="grid grid-cols-3">
        {/* self */}
        <div className="flex-1">
          <p>HP: {self.currentElve?.hp}</p>
        </div>
        {/*  */}
        <div>当前回合: {round}</div>
        {/* oppoent */}
        <div className="flex flex-1 justify-end">
          <p>HP: {opponent.currentElve?.hp}</p>
        </div>
      </div>
      <div></div>
      <div className="grid gap-1 grid-cols-3">
        {/* logs */}
        <BattleLog logs={logs} />
        {/* skills */}
        <Skills
          skills={player.currentElve?.skills ?? []}
          handleUseSkill={handleUseSkill}
        />
        {/* operate */}
        <Operate skills={player.currentElve?.skills ?? []} />
      </div>
    </div>
  )
}

export default BattlePage
