import * as ynab from 'ynab'
import dotenv from 'dotenv'

// SDK Docs - https://github.com/ynab/ynab-sdk-js

dotenv.config()

const ynabAPI = new ynab.API(process.env.YNAB_ACCESS_TOKEN!)

async function getAllBudgets(): Promise<ynab.BudgetSummary[]> {
  const { data } = await ynabAPI.budgets.getBudgets()
  return data.budgets
}

function parseBudgets(budgets: ynab.BudgetSummary[]) {
  for (const budget of budgets) {
    console.log(budget)
  }
}

;(async function () {
  try {
    const budgetsResponse = await getAllBudgets()
    parseBudgets(budgetsResponse)
  } catch (error) {
    console.error(error)
  }
})()
