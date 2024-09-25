export const handleGetImg = (itemImg: any): string => {
    const splitImg = itemImg.path.split('/');
    return splitImg[splitImg.length - 1]
}

export const getBaseConnectorUrl = (url: string) => {
    // "https://7uw70gk8dc.execute-api.ap-northeast-1.amazonaws.com/v1/search?index_search=linh2test"
    return url.split("=")[0]
}