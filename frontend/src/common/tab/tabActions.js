export function selectTab(tabId){
    return {
        type:'TAB-SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabId){
    const tabsToShow = {}
    tabId.forEach(e => tabsToShow[e] = true)
    return {
        type:'TAB-SHOWED',
        payload: tabsToShow 
    }
}