(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{392:function(s,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql-join문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-join문"}},[s._v("#")]),s._v(" SQL JOIN문")]),s._v(" "),a("p",[a("em",[s._v("written by sohyeon, hyemin 💡")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"_1-join문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-join문"}},[s._v("#")]),s._v(" 1. JOIN문")]),s._v(" "),a("p",[s._v("두 개 이상의 테이블을 연결하여 데이터를 조회하는 방법이다."),a("br"),s._v("\n연사자, From절의 JOIN 형태에 따라 4가지로 나뉘어진다.")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("연산자에 따른 분류")]),s._v(" "),a("ul",[a("li",[s._v("EQUI JOIN")]),s._v(" "),a("li",[s._v("Non-EQUI JOIN")])])]),s._v(" "),a("li",[a("p",[s._v("From절의 JOIN 형태에 따라")]),s._v(" "),a("ul",[a("li",[s._v("INNER JOIN")]),s._v(" "),a("li",[s._v("OUTER JOIN")])])])]),s._v(" "),a("h2",{attrs:{id:"_2-inner-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-inner-join"}},[s._v("#")]),s._v(" 2. INNER JOIN")]),s._v(" "),a("h3",{attrs:{id:"_1-equi-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-equi-join"}},[s._v("#")]),s._v(" 1) EQUI JOIN")]),s._v(" "),a("ul",[a("li",[s._v("조인 대상 테이블의 칼럼 값들이 서로 정확하게 일치하는 경우에 사용")]),s._v(" "),a("li",[a("code",[s._v("WHERE")]),s._v("절에 "),a("code",[s._v("=")]),s._v("(Equality Condition)연산자를 사용해 조건을 명시")]),s._v(" "),a("li",[s._v("EQUI JOIN의 성능을 높이려면 INDEX 기능을 사용하는 것이 좋다.")]),s._v(" "),a("li",[s._v("두 테이블을 연결할 때 Hash JOIN을 활용하는 특징이 있다.")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n")])])]),a("h4",{attrs:{id:"inner-join-구문"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inner-join-구문"}},[s._v("#")]),s._v(" INNER JOIN 구문")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n")])])]),a("h3",{attrs:{id:"_2-natural-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-natural-join"}},[s._v("#")]),s._v(" 2) NATURAL JOIN")]),s._v(" "),a("ul",[a("li",[s._v("EQUI JOIN에서 "),a("code",[s._v("=")]),s._v("조건이 성립할 때 동일한 속성이 두번 나타나게 되는데, 중복을 제거해 한번만 표기하게 하는 방식이다.")]),s._v(" "),a("li",[s._v("두 테이블의 동일한 이름을 가지는 칼럼이 모두 JOIN")]),s._v(" "),a("li",[s._v("동일한 칼럼을 내부적으로 찾게 되므로 테이블 별칭을 주면 오류가 발생")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NATURAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("  테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[s._v("NATURAL JOIN만 실행하면 동일한 이름을 가진 칼럼은 모두 조인되는데,"),a("br"),s._v("\nUSING절을 활용하면 칼럼을 선택해 조인할 수 있다."),a("br"),s._v("\nUSING절 안에 포함되는 칼럼에 별칭을 지정하면 오류가 발생한다.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USING")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-non-equi-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-non-equi-join"}},[s._v("#")]),s._v(" 3) NON EQUI JOIN")]),s._v(" "),a("ul",[a("li",[s._v("BETWEEN AND, IS NULL, IS NOT NULL, NOT IN, <, >, >=, <= 연산자를 사용한다.")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NON EQUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 조건"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-self-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-self-join"}},[s._v("#")]),s._v(" 4) SELF JOIN")]),s._v(" "),a("ul",[a("li",[s._v("같은 테이블에서 2개의 속성을 연결하여 EQUI JOIN을 한다.")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("  테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 별칭"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n")])])]),a("h3",{attrs:{id:"_5-cross-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-cross-join"}},[s._v("#")]),s._v(" 5) CROSS JOIN")]),s._v(" "),a("p",[s._v("테이블 A에서 조회되는 하나의 행에 테이블 B에서 조회되는 모든 행을 연결하여 조인한다.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("h2",{attrs:{id:"_3-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-outer-join"}},[s._v("#")]),s._v(" 3. OUTER JOIN")]),s._v(" "),a("p",[s._v("일반적인 INNER JOIN과 비슷하지만 한 쪽의 데이터에서 JOIN조건에 일치하지 않는 값까지 모두 가져와 조회한다.")]),s._v(" "),a("h3",{attrs:{id:"_1-left-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-left-outer-join"}},[s._v("#")]),s._v(" 1) LEFT OUTER JOIN")]),s._v(" "),a("p",[s._v("JOIN 수행 시 왼쪽에 표기된 테이블은 JOIN조건에 일치하지 않는 값까지 모두 조회된다.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("   테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-right-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-right-outer-join"}},[s._v("#")]),s._v(" 2) RIGHT OUTER JOIN")]),s._v(" "),a("p",[s._v("JOIN 수행 시 오른쪽에 표기된 데이블은 JOIN조건에 일치하지 않는 값까지 모두 조회된다.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RIGHT")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("   테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 방법2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n")])])]),a("h3",{attrs:{id:"_3-full-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-full-outer-join"}},[s._v("#")]),s._v(" 3) FULL OUTER JOIN")]),s._v(" "),a("p",[s._v("조인 수행 시 왼쪽, 오른쪽 테이블의 모든 값을 읽어 JOIN을 수행한다. LEFT OUTER JOIN과 RIGHT OUTER JOIN의 결과를 합집합으로 처리한 결과와 동일하다.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FULL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v("   테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("속성명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 테이블명"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("속성명\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);