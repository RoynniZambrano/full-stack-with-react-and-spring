import Axios from "axios"


class HelloWorldService {

 executeHelloWorldService(){
   return  Axios.get('http://localhost:8080/hello')
 }

 executeHelloWorldBeanService(){
    return  Axios.get('http://localhost:8080/hello-bean')
  }

  executeHelloWorldBeanWithVarService(name){
    return  Axios.get(`http://localhost:8080/hello-bean/var/${name}`)
  }

}



export default new HelloWorldService()