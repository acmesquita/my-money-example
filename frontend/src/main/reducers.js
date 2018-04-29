import { combineReducers } from "redux";

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabRecudecer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer