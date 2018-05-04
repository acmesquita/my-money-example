import { combineReducers } from "redux";

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabRecudecer'
import BillingCycleReducer from '../billingCycle/billingCycleReduces'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer