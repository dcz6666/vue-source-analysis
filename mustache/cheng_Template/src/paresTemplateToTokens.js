import Scanner from './Scanner.js'
/**
 * 将模板字符串变为tokens数组
 */
export default function paresTemplateToTokens(templateStr) {
    let tokens = []
    //创建扫描器 
    var scanner = new Scanner(templateStr);
    let words;
    //让扫描器工作
    while (!scanner.eos()) {
        //收集开始标记出现之前的文字
        words = scanner.scanUtil('{{')
        if (words != '') {
            //存起来
            tokens.push(["text", words])
        }
        //过双大括号
        scanner.scan("{{")
        //收集开始标记出现之前的文字
        words = scanner.scanUtil('}}')
        if (words != '') {
            // 这个words 就是{{}中间的东西 判断一下首字符
            if(words[0]=="#"){
                //存起来从下标为1的项开始存 因为下标为0 的项是#
                tokens.push(["#", words.substring(1)]);
            }else if(words[0]=="/"){
                //存起来从下标为1的项开始存 因为下标为0 的项是、
                tokens.push(["/", words.substring(1)])
            }else{
                tokens.push(['text',words])
            }
        }
        //过双大括号
        scanner.scan("}}")
    }
    return tokens

}