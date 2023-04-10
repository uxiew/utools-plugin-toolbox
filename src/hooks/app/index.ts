


export default function useApp() {
    // 主界面--搜索
    function onInputSearch(text: string) {
        console.log(text);
    }
    const init = () => {
        utools.setSubInput(onInputSearch, '任意输入，快速搜索 🔍', true);
        utools.setExpendHeight(660);
    }



    return { init }

}