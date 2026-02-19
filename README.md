# 1️⃣ Commit Message Convention

## 📍 기본 형식

```
type: 작업 내용
```

- type은 소문자
- 간결하게 작성
- 한글 작성 가능

---

## 📍 예시

```
chore: storybook 패키지 설치
feat: 로그인 기능 구현
fix: 회원가입 중복 요청 버그 수정
docs: README 수정
refactor: 사용자 상태 관리 로직 개선
```

---

## 📍 Type 목록

| Type | 설명 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 수정 |
| style | 코드 스타일 변경 (로직 변경 없음) |
| refactor | 리팩토링 |
| test | 테스트 코드 |
| chore | 설정, 패키지, 빌드 관련 작업 |

---

# 2️⃣ Branch Naming Convention

## 📍 기본 형식

```
type/#이슈번호
```

## 📍 예시

```
feat/#12
fix/#7
chore/#3
refactor/#21
```

---

## 📍 규칙

- 반드시 이슈 생성 후 브랜치 생성
- 이슈 번호 포함 필수
- 브랜치에 작업 설명을 길게 쓰지 않는다
- `main` 브랜치 직접 push 금지

---

# 3️⃣ Pull Request Convention

## 📍 PR Title 규칙

### 기본 형식

```
[TYPE] 작업 내용
```

- TYPE은 대문자
- 대괄호 필수
- 커밋 메시지와 동일한 의미로 작성

---

### 예시

```
[CHORE] storybook 패키지 설치
[FEAT] 로그인 기능 구현
[FIX] 회원가입 중복 요청 버그 수정
[REFACTOR] 사용자 상태 관리 로직 개선
[DOCS] README 수정
```

---

# 4️⃣ Label Rule

PR 생성 시 반드시 타입에 맞는 Label을 추가한다.

## 📍 Label 목록

| PR TYPE | Label |
|---------|-------|
| FEAT | feat |
| FIX | fix |
| DOCS | docs |
| STYLE | style |
| REFACTOR | refactor |
| TEST | test |
| CHORE | chore |

---

## 📍 Label 규칙

- PR 제목의 TYPE과 Label은 반드시 일치해야 한다.
- 기본적으로 하나의 타입 Label만 사용한다.
- 복합 작업일 경우 가장 핵심 작업 기준으로 선택한다.

---

# 5️⃣ PR 작성 규칙

## 📍 체크리스트

- [ ] 커밋 메시지 컨벤션을 지켰는가
- [ ] 콘솔 로그 제거했는가
- [ ] 정상 동작 확인했는가
- [ ] 관련 이슈 연결했는가

---


# 6️⃣ Review Rule

- 최소 1명 이상 승인 후 Merge
- 승인 없이 Merge 금지
- 리뷰 코멘트는 반드시 반영하거나 답변 후 Resolve

---

# 7️⃣ Merge Rule

- 기본 머지 방식: Squash and merge
- Squash 후 커밋 메시지는 PR 제목과 동일하게 유지
- Merge 후 브랜치 삭제
