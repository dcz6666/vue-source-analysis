import parseTemplateToTokens from './paresTemplateToTokens'
// 全局提供cheng_Template 对象
window.cheng_Template={
    render(templateStr,data){
        // 调用parseTemplateToTokens
        var tokens = parseTemplateToTokens(templateStr);
        console.log("tokens",tokens)
    }
}