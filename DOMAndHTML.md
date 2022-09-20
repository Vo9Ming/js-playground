# DOM 과 HTML

## WWW - 1. HTML : 문서 , 2. URL : 문서의 주소를 나타내는 것 , 3. HTTP : 문서를 주고 받는 통신 규칙

## 여기서 HTML은 WWW 의 3요소 중 하나이다.

### 엘리먼트 (Element\_요소)

- 태그 사이에 콘텐츠를 갖고,
- 태그 안에 속성(예. id)과 속성의 값(예. id의 이름)을 가진다.

#### 속성

- 객체의 속성과 비슷하게 엘리먼트도 속성을 가질 수 있다.

#### 블록 엘리먼트

- 줄 바꿈이 있는 엘리먼트 (예. p, h1, div ....)

#### 인라인 엘리먼트

- 줄 바꿈이 없는 엘리먼트 (예. span, img, input, button, a ....)

### DOM (Document Object Model)

- 문서를 객체를 이용해서 계층 구조로 표현함
- 표준 : W3CDOM
- (웹 브라우저 내에서 구현한다.) 구현체 : Gecko(모질라 파이어폭스), Webkit(애플) 등...

### Html객체

- HTML 문서도 객체로 간주된다.
  => window : 최상위 객체이다. <br/>
  => document : DOM의 최상위 객체이면서 window의 하위 객체이다. <br/><br/>

### JS로 DOM 제어하기

- 모든 HTML 엘리먼트는 객체이므로 다른 객체와 마찬가지로 JS로 제어가 가능합니다.

### DOM 객체의 값 바꾸기

### var element = document.getElementById('id');

### element.innerHTML = '값';

- 이런 형식으로 객체의 값을 바꿀 수 있다.
