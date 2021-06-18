/**
 *
 * @param {Number} member   参与抽奖的人数
 * @param {Number} first    一等奖的数量
 * @param {Number} second   二等奖的数量
 * @param {Number} third    三等奖的数量
 */
function * draw (member = 10, first = 2, second = 3, third = 5) {
  // 所有参与抽奖的成员
  const members = Array(member).fill(null).map((val, index) => index + 1)
  // 一等奖奖品
  const firstReward = Array(first).fill(null).map((val, index) => `A${index + 1}`)
  const secondReward = Array(second).fill(null).map((val, index) => `B${index + 1}`)
  const thirdReward = Array(third).fill(null).map((val, index) => `C${index + 1}`)

  let level = '三等奖'
  for (let i = 0; i < third; i++) {
    const memberNum = members.length
    const rewardNum = thirdReward.length
    const luckyNumIndex = Math.floor(Math.random() * memberNum)
    const rewardInex = Math.floor(Math.random() * rewardNum)
    yield {
      level,
      luckyNum: members[luckyNumIndex],
      reward: thirdReward[rewardInex]
    }
    members.splice(luckyNumIndex, 1)
    thirdReward.splice(rewardInex, 1)
  }

  level = '二等奖'
  for (let i = 0; i < second; i++) {
    const memberNum = members.length
    const rewardNum = secondReward.length
    const luckyNumIndex = Math.floor(Math.random() * memberNum)
    const rewardInex = Math.floor(Math.random() * rewardNum)
    yield {
      level,
      luckyNum: members[luckyNumIndex],
      reward: secondReward[rewardInex]
    }
    members.splice(luckyNumIndex, 1)
    secondReward.splice(rewardInex, 1)
  }

  level = '一等奖'
  for (let i = 0; i < first; i++) {
    const memberNum = members.length
    const rewardNum = firstReward.length
    const luckyNumIndex = Math.floor(Math.random() * memberNum)
    const rewardInex = Math.floor(Math.random() * rewardNum)
    yield {
      level,
      luckyNum: members[luckyNumIndex],
      reward: firstReward[rewardInex]
    }
    members.splice(luckyNumIndex, 1)
    firstReward.splice(rewardInex, 1)
  }
}

/**
 * 斐波那契 数列
 */
function * fibonacciSequence () {
  let [n0 = 0, n1 = 1] = [0, 1]
  const sequence = [n0, n1]
  while (true) {
    let val = n0 + n1
    sequence.push(val)
    yield { val, sequence: [...sequence] }
    n0 = n1
    n1 = val
  }
}
