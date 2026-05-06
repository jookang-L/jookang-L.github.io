# 포켓몬(프로젝트) 테마 추가 체크리스트

새 포켓몬 캐릭터 또는 포켓몬 테마 섹션/허브 카드를 넣을 때 아래 순서로 확인합니다.  
**섹션 UI는 나무킹(PokéPandas) · 에이팜(판사시스템)과 동일 패턴**으로 통일합니다.

---

## 1. 섹션 레이아웃 (필수)

- [ ] `PokemonImage`를 **진한 단색/반투명 카드 `div`로 감싸지 않는다.**  
  (예: `rounded-2xl` + `background: rgba(12, 8, 22, 0.65)` 류 래퍼 금지)
- [ ] 그리드 왼쪽(또는 캐릭터 열)은 구조를 맞춘다:  
  `FadeIn` → `flex justify-center` → `div.relative.p-4` → (선택) 장식 요소(span) → `PokemonImage`

```tsx
<FadeIn direction="right" className="flex justify-center">
  <div className="relative p-4">
    {/* 선택: 섹션 톤에 맞는 작은 장식 */}
    <PokemonImage src="/ico/파일명.png" alt="…" type="타입키" sparkleBorder />
  </div>
</FadeIn>
```

---

## 2. 이미지 에셋 (필수)

- [ ] `public/ico/` 아래 PNG(권장: **RGBA 투명 배경**) 배치  
- [ ] 배경이 **흰 단색**(JFIF 등)이면 나무킹처럼 `knockoutWhite` prop 사용 (`PokemonImage`)

---

## 3. `components/ui/PokemonImage.tsx`

- [ ] `PokeType` 유니온에 새 타입 키 추가 (CSS 클래스 이름으로 사용됨 → **영문·소문자·하이픈 없이** 권장)
- [ ] `PARTICLE_CONFIGS`에 맞는 파티클 계열이 없으면 항목 추가
- [ ] `TYPE_MAP`에서 새 타입 → 파티클 계열 연결

---

## 4. `app/globals.css`

- [ ] `.pokemon-wrap.{타입키}:hover .pokemon-img` (호버 글로우)
- [ ] `.pokemon-wrap.{타입키}::after` (바닥 그림자 링)
- [ ] `.pokemon-wrap.pokemon-sparkle.{타입키}:hover::before` (스파클 테두리 색)
- [ ] `knockoutWhite`를 쓰는 타입이면 `.pokemon-wrap.{타입키}:hover .pokemon-img--knockout` 및  
  `.pokemon-wrap.{타입키}.pokemon-wrap--knockout:hover` 블록 추가 (기존 sceptile / aipom / infernape 참고)

---

## 5. 허브 카드 (프로젝트가 허브에 올라가는 경우)

- [ ] `constants/projects.ts` — `PokemonType`에 키 추가
- [ ] 같은 파일 `PROJECTS` 배열에 프로젝트 객체 추가 (`pokemon` 필드는 위 키와 일치)
- [ ] `components/cards/ProjectCard.tsx` — `THEME`에 동일 키로 테마(그라데이션·보더·태그 색 등) 추가

> **참고:** 허브의 `pokemon` 키와 홈 섹션의 `PokemonImage` `type`은 **다를 수 있음**  
> (예: 허브 `pokepandas` ↔ 이미지 `sceptile`). 허브 키는 제품명에 맞추고, CSS/파티클은 `PokemonImage` 쪽 키로 맞춘다.

---

## 6. 페이지·내비게이션

- [ ] `app/page.tsx` — 섹션 컴포넌트 import 및 배치
- [ ] 섹션 루트에 **앵커 id** 부여 (예: `id="pandas-section"`) — 이미 있는 패턴 유지
- [ ] `components/layout/Header.tsx` — 메가메뉴 등 앵커 링크
- [ ] `components/layout/Footer.tsx` — 푸터 링크
- [ ] `components/layout/MobileDrawer.tsx` — 드로어 내 링크

---

## 7. 선택

- [ ] `components/home/Hero.tsx` — CTA 버튼/스크롤이 새 섹션을 가리키면 href·문구 수정
- [ ] `components/home/About.tsx` — 캐릭터 한 줄 소개 줄 추가 시 톤 맞춤

---

## 완료 전 스모크 테스트

- [ ] 해당 섹션에서 캐릭터 **뒤에 짙은 카드 형태 네모가 보이지 않음**
- [ ] 호버 시 파티클·글로우·스파클 테두리가 깨지지 않음 (모바일/데스크톱 각 1회)
