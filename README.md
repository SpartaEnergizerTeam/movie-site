# 🎥 Ennergivve
대한민국의 OTT 서비스, Wavve(웨이브)를 클론코딩하는 JS 프로젝트에요<br />
영화 정보 공유사이트 [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) 의 Open API를 바탕으로 만들었어요<br/><br/>

## 0. 팀원 소개
<table>
   <tr>
    <td align="center"><b>이예린</b></td>
    <td align="center"><b>이인</b></td>
    <td align="center"><b>서예은</b></td>
    <td align="center"><b>임종현</b></td>
    <td align="center"><b>안종현</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/whitewise95"><img src="https://avatars.githubusercontent.com/u/40863185?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/heesu21"><img src="https://avatars.githubusercontent.com/u/96329698?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/jeoninhwa3"><img src="https://avatars.githubusercontent.com/u/167187204?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/NHJeans"><img src="https://avatars.githubusercontent.com/u/159714267?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/NHJeans"><img src="https://avatars.githubusercontent.com/u/110883544?v=4" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center">리뷰</td>
    <td align="center">프로필</td>
    <td align="center">메인</td>
    <td align="center">검색</td>
    <td align="center">상세페이지</td>
  </tr>
</table><br/>

## 0-1. 프로젝트 진행 기간
- 2024.05.01 ~ 2024.05.08<br/><br/>
## 0-2. 프로젝트 중에는..
- 활발하게 진행 상황을 공유하기 위해 zep과 slack을 사용했어요
- 매일 3시, 필요하다면 수시로 발의하여 솔직한 의견을 주고받았어요
- 회의는 간략하게 30분 이내로 마치도록 해요
- 전체적인 팀 프로젝트의 진행상황을 확인하기 위해 gitgub project를 사용했어요
- backlog를 남기고 수시로 진행상황을 팔로우업해요<br/>
<img width="650" alt="백로그" src="https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/a81d9859-6814-4060-977f-a91d0c4c4b6e"><br/>
- 코드리뷰하는 문화를 지향해요
- pr에 1명 이상의 approve가 있어야 develop에 merge를 할 수 있도록 설정했어요
<br/><br/>
## 1. 사용한 라이브러리
### swiper @11
다양한 커스터마이징을 지원하는 가장 유명한 slider 라이브러리를 사용했어요<br/><br/>
## 2. 사용한 외부 API
### TMDB
영화 정보를 제공할 수 있도록 tmdb를 사용했어요
### dicebear
프로필 아바타 이미지를 변경할 수 있도록 dicebear를 사용했어요<br/><br/>
## 2. 대표기능

- [x] 내가 찾고 싶은 영화를 검색할 수 있어요<br />
- [x] 엄선한 카테고리로 추천된 다양한 영화를 만날 수 있어요<br />
- [x] 영화의 상세 정보를 볼 수 있어요<br />
- [x] 밝게 보고 싶을 때, 테마 변경을 해 보세요<br />
- [x] 사이트에서 이용할 내 프로필을 변경할 수 있어요<br />
- [x] 프로필 이미지는 랜덤으로 가져와 재밌게 꾸밀 수 있어요<br />
- [x] 영화마다 감상평을 작성할 수 있어요<br />
- [x] 내가 작성한 감상평을 수정할 수 있어요<br />
- [x] 나의 비밀번호를 한번 더 체크하여, 안전하게 감상평을 지울 수 있어요<br />
- [x] 현재 영화 상세페이지를 공유할 수 있도록 공유버튼 기능을 제공해요<br />
- [x] 쿠키를 사용하여 사이트시 팝업을 띄우고, 7일간 다시보지 않는 기능을 제공해요<br />
- [x] 영화 상세페이지 접속시 트레일러 영상을 볼 수 있도록 링크를 제공해요<br /><br/>
## 3. 상세설명
### 1. 쿠키를 사용한 팝업 기능
<img width="500" alt="팝업" src="https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/4fe4bc20-2103-4277-9349-b4694828d647"/><br />
- 사이트 접속시 팝업을 띄워요
- 쿠키를 사용하여 7일간 다시보지 않는 기능을 제공해요<br/><br/>
### 2. swiper를 사용한 메인 슬라이드 기능
![swiper-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/64206bcc-22c6-4ebd-b5ec-1a1486f55ccd)<br/>
- 인기 있는 영화 중 5개만 노출돼요
- swiper의 기본 제공 className인 `swiper-slide-active`를 이용하여 css transition 애니메이션을 적용했어요<br/><br/>
### 2-1. 배열의 index를 사용하여 만든 랭킹 숫자 UI
![top20-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/c912c6d2-e91f-4829-a8ef-f905bf14f65a)<br/>
- TOP 20 구좌는 render할 때 배열의 `index`값을 이용하여 숫자 이미지를 순차대로 적용하도록 구현했어요<br/><br/>
### 3. css var를 사용한 테마모드 구현
![다크테마-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/54357511-261c-497f-b536-983b464f86f8)<br/>
- 사이트에서 주로 사용하는 컬러를 정리하고, 컬러팔레트를 정의했어요
- css var를 이용하여 최상단에서 선언하고, 테마가 바뀔 경우 body에 `.light-mode` class를 주어 변수를 재선언하도록 했어요
- 사이트를 벗어나거나, 끄는 경우에도 `localstorage`를 사용하여 유지할 수 있도록 했어요<br/><br/>
### 3. css animation을 사용한 페이지 로더
![로딩바-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/fff9779a-5b43-40b0-a4e9-d7cdceade2e7)
- 상세페이지가 로딩중인 경우, 부자연스러운 화면으로 고객 경험을 해치지 않도록 css animation을 이용하여 loading dim을 구현했어요<br/><br/>
### 3-1. 상세페이지
<img width="600" alt="상세페이지" src="https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/f09dff5a-a0a1-46c0-9579-e13a43ef6a49"><br/>
- seo 검색 최적화를 위해 탭 제목을 현재 영화 제목으로 바꿔주었어요
- 상세페이지 접속시 쿼리스트링에 id를 주어 새로고침을 해도 같은 페이지를 바라볼 수 있도록 했어요
- 트레일러 재생 클릭시 새 창으로 트레일러 영상을 볼 수 있도록 했어요
- 공유버튼을 제공하여 현재 영화 페이지 링크를 공유할 수 있도록 구현했어요<br/><br/>
### 4. dicebear http-api를 사용한 프로필 변경 기능
![프로필 변경-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/01fd2f86-0848-4477-bb02-897ed8376999)
- `localstorage`를 사용하여 프로필을 저장해요
- 프로필 이미지를 랜덤으로 생성할 수 있게 했어요
- 생성 중에는 다시 클릭할 수 없어요<br/><br/>
### 5. setInterval을 이용한 footer 공지 슬라이더 구현
![footer-r](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/dfbb757c-4844-4b4f-bb5d-617e3224b89e)
- setInterval을 사용하여, swiper 라이브러리 없이 슬라이더를 구현했어요<br/><br/>
### 6. js를 사용한 별점 부여 UI
![review](https://github.com/SpartaEnergizerTeam/movie-site/assets/40863185/36953914-4df0-45db-bfeb-d383d0d26e9b)
- 프로필 등록을 하여야 리뷰를 남길 수 있도록 했어요, 등록하지 않은 경우 프로필 등록 페이지로 이동해요
- `localstorage`를 이용하여 리뷰를 저장할 수 있도록 했어요
- 영화마다 리뷰를 다르게 작성할 수 있어요
- 삭제는 본인임을 증명할 수 있어야 해요, 프로필 등록시 입력했던 비밀번호와 일치하면 삭제할 수 있어요

