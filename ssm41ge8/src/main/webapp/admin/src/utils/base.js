const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm41ge8/",
            name: "ssm41ge8",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm41ge8/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "新闻类网站"
        } 
    }
}
export default base
