# **Module**

**모듈** 
: 코드를 여러개의 파일로 분리해놓은 것

**효과**
 - 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재사용 가능
 - 코드 개선 시 이를 사용하고 있는 모든 애플리케이션의 동작 개선
 - 코드 수정 시 필요한 로직 빠르게 찾을 수 있음 

### **ES6 Module**
 - **Exporting** : 모듈 기능을 사용하기 위해 export문을 사용하여 수행<br>

    - function, valr, let, const, class를 내보낼 수 있지만 최상위 항목이어야 된다. (함수 안에서 사용 불가능)<br>
      ```js
       export const name = 'name1';
       ```
    - 여러 항목을 하나의 export문을 사용하여 내보낼 수 있음. <br>
        ``` js
       export {value1, value2, value3};
       ```

 - **Importing** :내보낸 기능을 사용할 수 있도록 우리가 사용할 스크립트로 가져옴<br>

    ```js
     import {value1, value2, value3} from './파일경로'
     ```
 - **Defualt exports**: 모듈 하나에서 하나만 가능<br>
    ```js
     export default class {...} 
    ```

    - 함수 앞에 export default 추가하고 익명함수로 선언가능<br>

        ```js
         export  default function(ctx) { }
        ```

 - **Renaming imports and exprots** : `as` 키워드를 사용하여 식별가능한 이름으로 변경 가능<br>
    ```js
    export {function1 as newFunctionName}
    import (newFunctionName) from './modules/module.js'
    ```
    ```js
    export {function1};
    import {function1 as newFunctionName} from './modules/module.js'
    ```