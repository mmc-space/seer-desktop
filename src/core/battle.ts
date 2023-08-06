import type { Player } from './player'

/** 对战日志 */
type BattleLog = string

enum GameStatus {
  /** 运行中 */
  running,
  /** 暂停 */
  pause,
  /** 结束 */
  end,
}

export class Battle {
  private player1?: Player
  private player2?: Player

  /** 当前玩家 */
  public currentPlayer?: Player
  /** 等待玩家 */
  public waitPlayer?: Player
  /** 获胜方 */
  public winner?: Player
  /** 游戏状态 */
  public gameStatus = GameStatus.running
  /** 当前回合数 */
  public currentRound = 0
  /** 日志 */
  public logs: BattleLog[] = []

  constructor(player1: Player, player2: Player) {
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = this.randomPriority(player1, player2)
    this.createLog('对战开始')
    this.createLog(`${this.player1.currentElve!.name}登场`)
    this.createLog(`${this.player2.currentElve!.name}登场`)
    this.currentRound = 0
    this.waitPlayer
      = this.currentPlayer === this.player1 ? this.player2! : this.player1!
  }

  /** 检查玩家的精灵是否全部死亡 */
  private isElvesDead(elves: { hp?: number }[]): boolean {
    return elves.every(({ hp }) => hp === 0)
  }

  /** 检查游戏状态 */
  private checkGameStatus() {
    // 如果 player1 全部死亡，则 player2 胜利，游戏结束
    if (this.isElvesDead(this.player1?.bagElves ?? [])) this.winner = this.player2
    // 如果 player2 全部死亡，则 player1 胜利，游戏结束
    else if (this.isElvesDead(this.player2?.bagElves ?? []))
      this.winner = this.player1
    // 如果没有玩家全部死亡，则游戏继续进行
    else return

    // 设置游戏状态为结束
    this.gameStatus = GameStatus.end
  }

  /** 随机先手 */
  private randomPriority(player1: Player, player2: Player) {
    return Math.random() > 0.5 ? player1 : player2
  }

  /** 轮转回合 */
  public takeTurn = (skillId: number) => {
    /** 回合数+1 */
    this.currentRound += 1

    // 释放技能
    const skill = this.currentPlayer?.currentElve?.useSkill(
      skillId,
      this.currentPlayer!,
      this.waitPlayer!,
    )

    this.createLog(`${this.currentPlayer?.currentElve?.name} 使用了 ${skill?.name} ${skill!.desc!}`)

    console.log(this.player1?.currentElve, this.player2?.currentElve)

    // 检查状态
    this.checkGameStatus()

    // 切换当前玩家
    const swap = this.currentPlayer
    this.currentPlayer = this.waitPlayer
    this.waitPlayer = swap
  }

  /** 投降 */
  public surrender(player: Player) {
    if (player === this.player1) this.winner = this.player2
    else this.winner = this.player1

    this.gameStatus = GameStatus.end

    console.log('')
  }

  /** 生成对战日志 */
  public createLog = (content: string) => {
    const log = `[${this.currentRound}] - ${content}`
    this.logs.push(log)
  }
}
