export function selectTab(tabId){
    console.log(tabId)
    return {
        type:'TAB-SELECTED',
        payload: tabId
    }
}